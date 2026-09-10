import { readFileSync } from "node:fs";

const page = readFileSync(new URL("../app/page.tsx", import.meta.url), "utf8");
const layout = readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
const casePage = readFileSync(new URL("../app/provera-slucaja/page.tsx", import.meta.url), "utf8");

const requiredPageText = [
  "Rešite se problema sa",
  "javnim izvršiteljima.",
  "#problemi",
  "#kako-radimo",
  "id=\"kontakt\"",
  "Blokiran račun",
];

for (const text of requiredPageText) {
  if (!page.includes(text)) {
    throw new Error(`Landing page is missing required content: ${text}`);
  }
}

if (!layout.includes('lang="sr"')) {
  throw new Error("Document language must be Serbian (sr)");
}

if (layout.includes("Starter Project")) {
  throw new Error("Starter metadata must be replaced");
}

if (!page.includes('href="/provera-slucaja"')) {
  throw new Error("Primary CTA must lead to the case-check page");
}

for (const text of ["Korak {step} od 3", "Blokiran račun", "Nastavite"]) {
  if (!casePage.includes(text)) {
    throw new Error(`Case-check page is missing required content: ${text}`);
  }
}

console.log("Landing page contract passed.");
