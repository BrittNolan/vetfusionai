// Generates a single self-contained index.html (CSS + fonts + icon inlined)
// from the running production server, so the site can be opened by
// double-clicking the file — no dev server needed.
//
// Usage: npm run start  (in another terminal), then: node scripts/make-static-preview.mjs

import { writeFile } from "node:fs/promises";

const BASE = "http://localhost:3000";

const mime = (path) => {
  if (path.endsWith(".woff2")) return "font/woff2";
  if (path.endsWith(".woff")) return "font/woff";
  if (path.endsWith(".ttf")) return "font/ttf";
  if (path.endsWith(".svg")) return "image/svg+xml";
  if (path.endsWith(".png")) return "image/png";
  return "application/octet-stream";
};

const fetchText = async (path) => (await fetch(BASE + path)).text();
const fetchDataUri = async (path) => {
  const buf = Buffer.from(await (await fetch(BASE + path)).arrayBuffer());
  return `data:${mime(path)};base64,${buf.toString("base64")}`;
};

let html = await fetchText("/");

// Inline every stylesheet, with its font/asset url() refs embedded as data URIs.
const cssLinks = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]*>/g)].map(
  (m) => m[0]
);
for (const tag of cssLinks) {
  const href = tag.match(/href="([^"]+)"/)?.[1];
  if (!href) continue;
  const cssPath = href.split("?")[0];
  const cssDir = cssPath.slice(0, cssPath.lastIndexOf("/") + 1);
  let css = await fetchText(cssPath);
  // Match url(...) refs — absolute (/_next/...) or relative (../media/...),
  // optionally quoted — and inline each as a data URI.
  const assetRefs = [
    ...new Set(
      [...css.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g)]
        .map((m) => m[1])
        .filter((u) => !u.startsWith("data:") && !u.startsWith("http"))
    ),
  ];
  for (const ref of assetRefs) {
    const resolved = ref.startsWith("/")
      ? ref
      : new URL(ref, BASE + cssDir).pathname;
    const dataUri = await fetchDataUri(resolved.split("?")[0]);
    css = css.replaceAll(ref, dataUri);
  }
  html = html.replace(tag, `<style>${css}</style>`);
}

// Inline the favicon.
const iconTag = html.match(/<link[^>]+rel="icon"[^>]*>/)?.[0];
if (iconTag) {
  const href = iconTag.match(/href="([^"]+)"/)?.[1];
  if (href) {
    html = html.replace(
      iconTag,
      `<link rel="icon" href="${await fetchDataUri(href.split("?")[0])}"/>`
    );
  }
}

// Drop all JS (scripts, preloads) — the page is CSS-only except the nav.
html = html
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<link[^>]+rel="preload"[^>]*>/g, "")
  .replace(/<link[^>]+rel="modulepreload"[^>]*>/g, "");

// file:// friendliness: same-page anchors, and platform routes -> #platform.
html = html
  .replaceAll('href="/#', 'href="#')
  .replace(/href="\/(soap|tracker|import|timeline|dashboard)"/g, 'href="#platform"')
  .replaceAll('href="/"', 'href="#"');

// Tiny vanilla replacement for the React nav scroll state (header backdrop).
html = html.replace(
  "</body>",
  `<script>
(() => {
  const header = document.querySelector("header");
  if (!header) return;
  const on = () => {
    const s = window.scrollY > 12;
    header.style.background = s ? "rgba(250,247,241,.92)" : "";
    header.style.backdropFilter = s ? "blur(12px)" : "";
    header.style.borderBottom = s ? "1px solid #e4ddcb" : "";
  };
  on();
  window.addEventListener("scroll", on, { passive: true });
})();
</script></body>`
);

await writeFile(new URL("../index.html", import.meta.url), html);
console.log("Wrote index.html (" + Math.round(html.length / 1024) + " KB)");
