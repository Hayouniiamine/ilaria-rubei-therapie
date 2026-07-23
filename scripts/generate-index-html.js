/**
 * Post-build script: pre-renders the homepage using the SSR server bundle,
 * producing a fully-rendered index.html that TanStack Start can hydrate.
 *
 * TanStack Start is an SSR framework that does NOT emit index.html.
 * For static / SPA hosting on Vercel we pre-render the root "/" route
 * by invoking the built server's fetch() handler with a synthetic Request.
 */

import { writeFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const clientDir = join(root, "dist", "client");
const serverEntry = join(root, "dist", "server", "server.js");

async function main() {
  try {
    // Try to pre-render using the server bundle
    console.log("⏳ Pre-rendering homepage via server bundle...");
    const serverModule = await import(pathToFileURL(serverEntry).href);
    const server = serverModule.default;

    const request = new Request("http://localhost:3000/", {
      method: "GET",
      headers: { Accept: "text/html" },
    });

    const response = await server.fetch(request);

    if (!response.ok) {
      throw new Error(`Server returned ${response.status}: ${response.statusText}`);
    }

    let html = await response.text();

    // Verify it's actual HTML
    if (!html.includes("<!DOCTYPE") && !html.includes("<html")) {
      throw new Error("Server did not return HTML");
    }

    const outPath = join(clientDir, "index.html");
    await writeFile(outPath, html, "utf-8");
    console.log(`✅ Pre-rendered index.html (${(html.length / 1024).toFixed(1)} KB)`);
  } catch (err) {
    console.error("⚠️  Pre-render failed, falling back to minimal shell:", err.message);
    await generateFallbackHtml();
  }
}

async function generateFallbackHtml() {
  // Fallback: generate a minimal SPA shell from build output
  const assetsDir = join(clientDir, "assets");
  const files = await readdir(assetsDir);

  const entryJs = files.find((f) => f.startsWith("index-") && f.endsWith(".js"));
  if (!entryJs) throw new Error("Could not find client entry JS");

  const cssFile = files.find((f) => f.endsWith(".css"));

  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
  <title>Ilaria Rubei — Thérapeute Transpersonnelle</title>
  <meta name="description" content="Thérapeute transpersonnelle et énergéticienne à Paris. Accompagnement holistique, soins énergétiques, cacao sacré." />
  ${cssFile ? `<link rel="stylesheet" href="/assets/${cssFile}" />` : ""}
</head>
<body>
  <div id="root"></div>
  <script type="module" async src="/assets/${entryJs}"></script>
</body>
</html>
`;

  const outPath = join(clientDir, "index.html");
  await writeFile(outPath, html, "utf-8");
  console.log(`✅ Generated fallback index.html`);
}

main().catch((err) => {
  console.error("Failed to generate index.html:", err);
  process.exit(1);
});
