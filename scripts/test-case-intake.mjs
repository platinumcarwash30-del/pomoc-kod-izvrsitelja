import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import {
  buildCaseIntakePayload,
  normalizeCasePhone,
  validateCaseIntake,
} from "../lib/case-intake.mjs";

assert.equal(normalizeCasePhone("063 120 0118"), "+381631200118");
assert.equal(normalizeCasePhone("+381 63 120 0118"), "+381631200118");
assert.equal(normalizeCasePhone("not-a-phone"), null);

assert.deepEqual(
  validateCaseIntake({
    fullName: "Marko Test",
    phone: "063 120 0118",
    problem: "Blokiran račun",
    urgency: "Račun ili primanje je već blokirano",
    website: "",
  }),
  [],
);

assert.deepEqual(
  validateCaseIntake({
    fullName: "",
    phone: "123",
    problem: "",
    urgency: "",
    website: "",
  }),
  ["fullName", "phone", "problem", "urgency"],
);

assert.deepEqual(
  buildCaseIntakePayload({
    fullName: " Marko Test ",
    phone: "063 120 0118",
    problem: "Blokiran račun",
    urgency: "Račun ili primanje je već blokirano",
    website: "",
  }),
  {
    license_number: "LK-023",
    full_name: "Marko Test",
    phone: "+381631200118",
    problem: "Blokiran račun",
    urgency: "Račun ili primanje je već blokirano",
    website: "",
  },
);

const casePage = readFileSync(
  new URL("../app/provera-slucaja/page.tsx", import.meta.url),
  "utf8",
);
assert.ok(casePage.includes("Trenutno nismo uspeli da primimo vaš zahtev."));
assert.ok(casePage.includes("Uspešno ste poslali zahtev."));
assert.ok(casePage.includes("Očekujte odgovor u najkraćem roku."));

console.log("case-intake tests passed");
