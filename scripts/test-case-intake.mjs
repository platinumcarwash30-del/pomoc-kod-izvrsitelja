import assert from "node:assert/strict";
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

console.log("case-intake tests passed");
