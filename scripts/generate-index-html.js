/**
 * Post-build script: generates index.html from the TanStack Start build output.
 *
 * TanStack Start is an SSR framework that does NOT emit index.html.
 * For static / SPA hosting on Vercel we need one, so we generate it
 * by reading the server-side manifest to discover the hashed entry
 * script and CSS filenames.
 */

import { readdir, readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const clientDir = join(root, "dist", "client");
const assetsDir = join(clientDir, "assets");

async function main() {
  const files = await readdir(assetsDir);

  // Find the main entry JS – it's the file named index-<hash>.js
  const entryJs = files.find(
    (f) => f.startsWith("index-") && f.endsWith(".js")
  );
  if (!entryJs) throw new Error("Could not find client entry JS in dist/client/assets/");

  // Find CSS
  const cssFile = files.find((f) => f.endsWith(".css"));

  // Find route preload scripts (all the other JS chunks)
  const preloads = files
    .filter((f) => f.endsWith(".js") && f !== entryJs)
    .map((f) => `/assets/${f}`);

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>Ilaria Rubei — Thérapeute Transpersonnelle</title>
  <meta name="description" content="Thérapeute transpersonnelle et énergéticienne à Paris. Accompagnement holistique, soins énergétiques, cacao sacré." />
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🌿</text></svg>" />
  ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
  ${preloads.map((p) => `<link rel="modulepreload" href="${p}" />`).join("\n  ")}
</head>
<body>
  <div id="root"></div>
  <script type="module" async src="/assets/${entryJs}"></script>
</body>
</html>
`;

  const outPath = join(clientDir, "index.html");
  await writeFile(outPath, html, "utf-8");
  console.log(`✅ Generated ${outPath}`);
}

main().catch((err) => {
  console.error("Failed to generate index.html:", err);
  process.exit(1);
});
