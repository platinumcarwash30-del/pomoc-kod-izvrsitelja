import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const outputDir = resolve(process.cwd(), "out");
const routes = [
  ["/", "index.html"],
  ["/blog", "blog/index.html"],
  ["/provera-slucaja", "provera-slucaja/index.html"],
];

const missing = routes
  .map(([route, file]) => [route, resolve(outputDir, file)])
  .filter(([, file]) => !existsSync(file));

if (missing.length > 0) {
  throw new Error(
    `Static export is incomplete. Missing routes: ${missing
      .map(([route]) => route)
      .join(", ")}`,
  );
}

for (const [, file] of routes.map(([, relative]) => [relative, resolve(outputDir, relative)])) {
  const html = readFileSync(file, "utf8");
  if (!html.includes("<!DOCTYPE html>")) {
    throw new Error(`Static route is not HTML: ${file}`);
  }
}

const homepage = readFileSync(resolve(outputDir, "index.html"), "utf8");
if (!homepage.includes("LICENSED") || !homepage.includes("POWERED BY PLATINUM CORE 777")) {
  throw new Error("Homepage footer is missing the Platinum Core 777 licensing notice.");
}

if (!existsSync(resolve(outputDir, "platinum-core-777-logo.png"))) {
  throw new Error("Homepage logo asset is missing from the static export.");
}

console.log(`Static export verified: ${routes.length} routes in ${outputDir}`);
