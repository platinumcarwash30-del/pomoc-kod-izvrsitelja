"use client";

import type { FormEvent } from "react";
import { useEffect, useState } from "react";

const SUPABASE_URL = "https://ruhxyodqhgfkwvwlxaxf.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_kgf__jIm5xu6Exp2RT18mw_wWVpbZT3";
const CLIENT_ENDPOINT = SUPABASE_URL + "/functions/v1/lk023-client-portal";
const SESSION_KEY = "lk023-client-session";

type Session = { access_token?: string };
type DocumentRow = {
  id: string;
  original_name: string;
  content_type: string;
  byte_size: number;
  signed_url?: string | null;
};
type CaseRow = {
  id: string;
  title?: string;
  description?: string;
  status?: string;
  documents?: DocumentRow[];
};

function loginEmail(value: string) {
  const raw = value.trim().toLowerCase();
  if (raw.includes("@")) return raw;
  let digits = raw.replace(/[^0-9]/g, "");
  if (digits.startsWith("00")) digits = digits.slice(2);
  if (digits.startsWith("0")) digits = "381" + digits.slice(1);
  if (!digits) throw new Error("Unesite broj telefona.");
  return digits + "@login.lk023.invalid";
}

function formatBytes(value: number) {
  return value < 1024 * 1024
    ? Math.max(1, Math.round(value / 1024)) + " KB"
    : (value / 1024 / 1024).toFixed(1) + " MB";
}

export default function ClientPortalPage() {
  const [session, setSession] = useState<Session | null>(null);
  const [cases, setCases] = useState<CaseRow[]>([]);
  const [clientName, setClientName] = useState("Moj portal");
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function apiCall(action: string, payload: Record<string, unknown> = {}) {
    const stored = JSON.parse(window.localStorage.getItem(SESSION_KEY) || "null") as Session | null;
    if (!stored?.access_token) throw new Error("Sesija je istekla.");
    const response = await fetch(CLIENT_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
        Authorization: "Bearer " + stored.access_token,
      },
      body: JSON.stringify({ action, ...payload }),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || data.ok === false) {
      throw new Error(data.error || "Veza sa serverom trenutno nije uspela.");
    }
    return data;
  }

  async function loadPortal() {
    const data = await apiCall("client-list-cases");
    setClientName(data.actor?.full_name || "Moj portal");
    setCases(data.cases || []);
    setSession(JSON.parse(window.localStorage.getItem(SESSION_KEY) || "null"));
  }

  useEffect(() => {
    if (window.localStorage.getItem(SESSION_KEY)) {
      loadPortal().catch(() => {
        window.localStorage.removeItem(SESSION_KEY);
        setSession(null);
      });
    }
  }, []);

  async function submitLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setNotice("");
    setLoading(true);
    try {
      const response = await fetch(SUPABASE_URL + "/auth/v1/token?grant_type=password", {
        method: "POST",
        headers: { "Content-Type": "application/json", apikey: SUPABASE_ANON_KEY },
        body: JSON.stringify({
          email: loginEmail(loginId),
          password,
        }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.access_token) {
        throw new Error(data.message || data.msg || "Prijava nije uspela.");
      }
      window.localStorage.setItem(SESSION_KEY, JSON.stringify(data));
      await loadPortal();
      setPassword("");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Prijava nije uspela.");
    } finally {
      setLoading(false);
    }
  }

  async function uploadDocument(caseId: string, file: File) {
    setError("");
    setNotice("");
    if (file.size > 10 * 1024 * 1024) {
      setError("Dokument je veci od 10 MB.");
      return;
    }
    const reader = new FileReader();
    reader.onload = async () => {
      try {
        const base64 = String(reader.result).split(",")[1] || "";
        await apiCall("client-upload-document", {
          case_id: caseId,
          file_name: file.name,
          content_type: file.type || "application/octet-stream",
          content_base64: base64,
        });
        setNotice("Dokument je uspesno poslat.");
        await loadPortal();
      } catch (cause) {
        setError(cause instanceof Error ? cause.message : "Slanje dokumenta nije uspelo.");
      }
    };
    reader.readAsDataURL(file);
  }

  function logout() {
    window.localStorage.removeItem(SESSION_KEY);
    setSession(null);
    setCases([]);
    setClientName("Moj portal");
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(145deg,#08131c_0%,#102431_54%,#edf3f5_100%)] px-4 py-8 text-slate-950 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <header className="mb-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-200">POMOC KOD IZVRSITELJA</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Zasticeni klijentski portal</h1>
          <p className="mt-2 text-slate-300">LK-023 · pregled predmeta i bezbedno slanje dokumenata</p>
        </header>

        {notice && <div className="mb-4 rounded-xl bg-emerald-100 px-4 py-3 text-sm font-semibold text-emerald-900">{notice}</div>}
        {error && <div className="mb-4 rounded-xl bg-red-100 px-4 py-3 text-sm font-semibold text-red-900">{error}</div>}

        {!session ? (
          <section className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
            <h2 className="text-2xl font-semibold">Prijava klijenta</h2>
            <p className="mt-2 text-slate-600">Unesite broj telefona koji ste ostavili u zahtevu i svoju lozinku.</p>
            <form onSubmit={submitLogin} className="mt-6 space-y-4">
              <label className="block text-sm font-semibold">
                Telefon ili korisnicki email
                <input
                  required
                  value={loginId}
                  onChange={(event) => setLoginId(event.target.value)}
                  placeholder="0631234567"
                  autoComplete="username"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500"
                />
              </label>
              <label className="block text-sm font-semibold">
                Lozinka
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  autoComplete="current-password"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 font-normal outline-none focus:border-amber-500"
                />
              </label>
              <button disabled={loading} className="rounded-xl bg-[#0f607e] px-5 py-3 font-bold text-white disabled:opacity-60">
                {loading ? "Prijavljivanje..." : "Udji u portal"}
              </button>
            </form>
          </section>
        ) : (
          <>
            <section className="mb-5 flex flex-col justify-between gap-4 rounded-3xl bg-white p-6 shadow-2xl sm:flex-row sm:items-center sm:p-8">
              <div>
                <h2 className="text-2xl font-semibold">{clientName}</h2>
                <p className="mt-2 text-slate-600">Ovde mozete videti status i dokumenta svog predmeta.</p>
              </div>
              <button onClick={logout} className="rounded-xl bg-red-600 px-5 py-3 font-bold text-white">Odjava</button>
            </section>

            {cases.length === 0 ? (
              <section className="rounded-3xl bg-white p-6 shadow-2xl">
                <p className="text-slate-600">Nema dostupnih predmeta.</p>
              </section>
            ) : (
              <div className="space-y-5">
                {cases.map((item) => (
                  <article key={item.id} className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
                    <h3 className="text-xl font-semibold">{item.title || "Predmet"}</h3>
                    <p className="mt-2 font-semibold text-teal-700">{item.status || "Status nije unet"}</p>
                    {item.description && <p className="mt-3 whitespace-pre-wrap text-slate-700">{item.description}</p>}
                    <h4 className="mt-6 text-lg font-semibold">Dokumenta</h4>
                    <div className="mt-2 divide-y divide-slate-200">
                      {(item.documents || []).length === 0 ? (
                        <p className="py-3 text-slate-500">Jos nema dokumenata.</p>
                      ) : (
                        (item.documents || []).map((document) => (
                          <div key={document.id} className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                              <strong>{document.original_name}</strong>
                              <p className="text-sm text-slate-500">{document.content_type} · {formatBytes(Number(document.byte_size || 0))}</p>
                            </div>
                            {document.signed_url && <a className="rounded-lg bg-slate-100 px-3 py-2 text-sm font-bold text-slate-800" href={document.signed_url} target="_blank" rel="noopener noreferrer">Otvori</a>}
                          </div>
                        ))
                      )}
                    </div>
                    <label className="mt-6 block text-sm font-semibold">
                      Dodaj dokument
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,application/pdf,image/jpeg,image/png,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          if (file) uploadDocument(item.id, file);
                          event.currentTarget.value = "";
                        }}
                        className="mt-2 block w-full rounded-xl border border-slate-300 px-3 py-3 font-normal"
                      />
                    </label>
                    <p className="mt-2 text-sm text-slate-500">PDF, slike, DOC i DOCX do 10 MB.</p>
                  </article>
                ))}
              </div>
            )}
          </>
        )}

        <a href="https://www.pobediizvrsitelja.rs/" className="mt-6 inline-block text-sm font-bold text-amber-200">Nazad na glavni sajt</a>
      </div>
    </main>
  );
}
