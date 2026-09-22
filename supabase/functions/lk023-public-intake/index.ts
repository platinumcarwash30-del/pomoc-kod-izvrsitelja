import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const LICENSE = "LK-023";
const ALLOWED_ORIGINS = new Set([
  "https://platinumcore777.com",
  "https://www.platinumcore777.com",
  "https://platinumcarwash30-del.github.io",
]);

const allowedProblems = new Set([
  "Blokiran račun",
  "Plata ili penzija",
  "Rešenje o izvršenju",
  "Imovina",
  "Dug koji ne prepoznajete",
  "Nisam siguran/sigurna",
]);

const allowedUrgencies = new Set([
  "Danas sam dobio/dobila dokument",
  "Račun ili primanje je već blokirano",
  "Dobio/dobila sam poziv ili najavu",
  "Problem traje već neko vreme",
  "Nisam siguran/sigurna koji je rok",
]);

function responseHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.has(origin) ? origin : "null";
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "apikey, authorization, x-client-info, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Cache-Control": "no-store",
    "Content-Type": "application/json",
    Vary: "Origin",
  };
}

function json(req: Request, body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: responseHeaders(req),
  });
}

function normalizePhone(value: unknown): string | null {
  const raw = String(value ?? "").trim().replace(/[().\-\s]/g, "");
  if (!raw) return null;

  const normalized = raw.startsWith("00")
    ? `+${raw.slice(2)}`
    : raw.startsWith("0")
      ? `+381${raw.slice(1)}`
      : raw.startsWith("+")
        ? raw
        : `+${raw}`;

  return /^\+[1-9][0-9]{7,14}$/.test(normalized) ? normalized : null;
}

function loginEmail(phone: string) {
  return phone.replace(/\D/g, "") + "@login.lk023.invalid";
}

function temporaryPassword() {
  const alphabet =
    "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  return Array.from(bytes, (value) => alphabet[value % alphabet.length]).join(
    "",
  );
}

function adminClient() {
  const url = Deno.env.get("SUPABASE_URL");
  const key =
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ||
    Deno.env.get("SUPABASE_SECRET_KEY");
  if (!url || !key) return null;
  return createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}

async function resolveScope(admin: ReturnType<typeof adminClient>) {
  if (!admin) return null;

  const { data: namespace, error: namespaceError } = await admin
    .from("pc777_license_namespaces")
    .select("license_number,storage_tenant_id,legacy_tenant_id,active")
    .eq("license_number", LICENSE)
    .eq("active", true)
    .maybeSingle();
  if (namespaceError) throw namespaceError;
  if (!namespace?.legacy_tenant_id || !namespace.storage_tenant_id) return null;

  const { data: storageTenant, error: storageError } = await admin
    .from("pc777_storage_tenants")
    .select("id,active")
    .eq("id", namespace.storage_tenant_id)
    .eq("storage_key", "CORE-777")
    .eq("active", true)
    .maybeSingle();
  if (storageError) throw storageError;
  if (!storageTenant) return null;

  const { data: tenant, error: tenantError } = await admin
    .from("pc777_tenants")
    .select("id,active,license_status")
    .eq("id", namespace.legacy_tenant_id)
    .eq("active", true)
    .eq("license_status", "active")
    .maybeSingle();
  if (tenantError) throw tenantError;
  if (!tenant) return null;

  return {
    tenantId: tenant.id,
    storageTenantId: storageTenant.id,
  };
}

async function findOrCreateClient(
  admin: NonNullable<ReturnType<typeof adminClient>>,
  tenantId: string,
  fullName: string,
  phone: string,
) {
  const { data: existing, error: existingError } = await admin
    .from("pc777_lk023_clients")
    .select("id,tenant_id,auth_user_id,license_number,full_name,phone_e164,active")
    .eq("tenant_id", tenantId)
    .eq("license_number", LICENSE)
    .eq("phone_e164", phone)
    .maybeSingle();
  if (existingError) throw existingError;
  if (existing) {
    if (!existing.active) return { error: "CLIENT_INACTIVE" as const };
    return { client: existing, created: false };
  }

  const authResult = await admin.auth.admin.createUser({
    email: loginEmail(phone),
    password: temporaryPassword(),
    email_confirm: true,
    user_metadata: {
      role: "lk023_client",
      license_number: LICENSE,
      phone_e164: phone,
      source: "pobedi-izvrsitelja",
    },
  });
  if (authResult.error) {
    if (String(authResult.error.message || "").toLowerCase().includes("already")) {
      return { error: "CLIENT_ALREADY_EXISTS" as const };
    }
    throw authResult.error;
  }

  const { data: client, error: clientError } = await admin
    .from("pc777_lk023_clients")
    .insert({
      tenant_id: tenantId,
      auth_user_id: authResult.data.user.id,
      license_number: LICENSE,
      full_name: fullName,
      phone_e164: phone,
      must_change_password: true,
      active: true,
    })
    .select("id,tenant_id,auth_user_id,license_number,full_name,phone_e164,active")
    .single();

  if (clientError) {
    await admin.auth.admin.deleteUser(authResult.data.user.id);
    if (clientError.code === "23505") {
      return { error: "CLIENT_ALREADY_EXISTS" as const };
    }
    throw clientError;
  }

  return { client, created: true };
}

async function submitCase(req: Request, body: Record<string, unknown>) {
  const admin = adminClient();
  if (!admin) return json(req, { ok: false, error: "SERVER_NOT_CONFIGURED" }, 503);

  const licenseNumber = String(body.license_number || "").trim().toUpperCase();
  const fullName = String(body.full_name || "").trim();
  const phone = normalizePhone(body.phone);
  const problem = String(body.problem || "").trim();
  const urgency = String(body.urgency || "").trim();
  const website = String(body.website || "").trim();

  if (licenseNumber !== LICENSE || website) {
    return json(req, { ok: false, error: "BAD_REQUEST" }, 400);
  }
  if (fullName.length < 2 || fullName.length > 160 || !phone) {
    return json(req, { ok: false, error: "CONTACT_FIELDS_INVALID" }, 400);
  }
  if (!allowedProblems.has(problem) || !allowedUrgencies.has(urgency)) {
    return json(req, { ok: false, error: "CASE_FIELDS_INVALID" }, 400);
  }

  const scope = await resolveScope(admin);
  if (!scope) return json(req, { ok: false, error: "LICENSE_NOT_ACTIVE" }, 409);

  const clientResult = await findOrCreateClient(
    admin,
    scope.tenantId,
    fullName,
    phone,
  );
  if ("error" in clientResult) {
    return json(req, { ok: false, error: clientResult.error }, 409);
  }

  const description = [
    `Situacija: ${problem}`,
    `Hitnost: ${urgency}`,
    "Izvor: javni sajt Pobedi izvršitelja (LK-023).",
    `Kontakt osoba: ${fullName}. Telefon je sačuvan uz klijenta u LK-023.`,
    "Dokumenta se ne primaju preko javnog obrasca; šalju se isključivo bezbednim putem nakon razgovora.",
  ].join("\n");

  const { data: caseRow, error: caseError } = await admin
    .from("pc777_lk023_cases")
    .insert({
      tenant_id: scope.tenantId,
      client_id: clientResult.client.id,
      license_number: LICENSE,
      title: `Pobedi izvršitelja: ${problem}`.slice(0, 160),
      description,
      status: "received",
    })
    .select("id,status,created_at")
    .single();
  if (caseError) throw caseError;

  return json(req, {
    ok: true,
    status: caseRow.status,
    case_id: caseRow.id,
    client_created: clientResult.created,
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: responseHeaders(req) });
  if (req.method !== "POST") return json(req, { ok: false, error: "METHOD_NOT_ALLOWED" }, 405);
  if (!req.headers.get("apikey")) return json(req, { ok: false, error: "API_KEY_REQUIRED" }, 401);

  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return json(req, { ok: false, error: "BAD_REQUEST" }, 400);
    }
    return await submitCase(req, body as Record<string, unknown>);
  } catch (error) {
    console.error("LK023_PUBLIC_INTAKE_ERROR", error);
    return json(req, { ok: false, error: "SUBMISSION_FAILED" }, 500);
  }
});
