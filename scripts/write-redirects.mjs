// Writes an HTML redirect stub into out/ for every legacy URL (see lib/redirects.mjs).
// GitHub Pages can't send 301s, so each stub uses <meta refresh> + canonical, which
// search engines treat as a permanent redirect. Runs as part of `pnpm build`.
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { legacyRedirects } from '../lib/redirects.mjs'

const OUT = 'out'
const SITE_URL = 'https://connectpath.cx'

if (!existsSync(OUT)) {
  console.error(`No ${OUT}/ folder. Run next build first.`)
  process.exit(1)
}

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

let written = 0
for (const { source, destination } of legacyRedirects) {
  const dir = join(OUT, source)
  const file = join(dir, 'index.html')
  if (existsSync(file)) {
    console.error(`Refusing to overwrite a real page with a redirect: ${source}`)
    process.exit(1)
  }
  // Internal targets stay root-relative so the stub works on any host; canonical is absolute.
  const target = destination.startsWith('/') && destination !== '/' ? `${destination}/` : destination
  const canonical = esc(destination.startsWith('/') ? `${SITE_URL}${target}` : target)
  const url = esc(target)
  mkdirSync(dir, { recursive: true })
  writeFileSync(
    file,
    `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Redirecting…</title>
<meta name="robots" content="noindex">
<link rel="canonical" href="${canonical}">
<meta http-equiv="refresh" content="0; url=${url}">
<script>location.replace(${JSON.stringify(target)})</script>
</head>
<body><p>Redirecting to <a href="${url}">${url}</a>…</p></body>
</html>
`,
  )
  written++
}
console.log(`Wrote ${written} redirect pages to ${OUT}/`)
