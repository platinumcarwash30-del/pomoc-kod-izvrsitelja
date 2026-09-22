export const CASE_PROBLEMS = [
  "Blokiran račun",
  "Plata ili penzija",
  "Rešenje o izvršenju",
  "Imovina",
  "Dug koji ne prepoznajete",
  "Nisam siguran/sigurna",
];

export const CASE_URGENCIES = [
  "Danas sam dobio/dobila dokument",
  "Račun ili primanje je već blokirano",
  "Dobio/dobila sam poziv ili najavu",
  "Problem traje već neko vreme",
  "Nisam siguran/sigurna koji je rok",
];

export function normalizeCasePhone(value) {
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

export function validateCaseIntake(input = {}) {
  const errors = [];
  const fullName = String(input.fullName ?? "").trim();
  const phone = normalizeCasePhone(input.phone);
  const problem = String(input.problem ?? "").trim();
  const urgency = String(input.urgency ?? "").trim();
  const website = String(input.website ?? "").trim();

  if (fullName.length < 2 || fullName.length > 160) errors.push("fullName");
  if (!phone) errors.push("phone");
  if (!CASE_PROBLEMS.includes(problem)) errors.push("problem");
  if (!CASE_URGENCIES.includes(urgency)) errors.push("urgency");
  if (website) errors.push("website");

  return errors;
}

export function buildCaseIntakePayload(input = {}) {
  return {
    license_number: "LK-023",
    full_name: String(input.fullName ?? "").trim(),
    phone: normalizeCasePhone(input.phone),
    problem: String(input.problem ?? "").trim(),
    urgency: String(input.urgency ?? "").trim(),
    website: String(input.website ?? "").trim(),
  };
}
