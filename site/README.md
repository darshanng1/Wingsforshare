# WingsForShare — website build

Static, dependency-free marketing site for **wingsforshare.com**: 39 pages, dark/light themes,
self-hosted fonts, no external requests, full structured data.

Built to replace the current React site. Every page is plain HTML served by nginx, so there is
no client-side rendering to index and no JavaScript required to read the content.

---

## What is in the build

| Area | Pages | Notes |
|---|---|---|
| Home | 1 | Hero "growth console" (pure CSS/SVG), services, work, standards, process, sectors, insights, FAQ |
| Services hub | 1 | Nine disciplines, one index |
| Service detail | 9 | Web development, SEO, ecommerce, app development, custom software, SaaS, business analytics, digital transformation, social media |
| Work index | 1 | Filterable by discipline |
| Case studies | 9 | 7 live builds with demo links, 2 marked "in build" |
| Insights index | 1 | Filterable by category |
| Articles | 9 | Long-form, with auto table of contents |
| Company | 3 | About, pricing bands, process |
| Conversion | 2 | Contact (brief composer), FAQ hub |
| Local SEO | 1 | `/digital-agency-bangalore/` |
| Legal | 2 | Privacy notice, terms of service |
| System | 5 | `sitemap.xml`, `robots.txt`, `llms.txt`, `site.webmanifest`, `404.html` |

## Design system

- **Type:** Satoshi (self-hosted woff2, 400/500/700/900) for UI and display, Georgia italic for editorial accents, system monospace for labels. No webfont requests leave the origin.
- **Colour:** near-black green-tinted ink (`#050F0A`) with signal green (`#3BE38A`) on dark; warm paper (`#F7F5EF`) with deep green (`#0A7A4A`) on light. Both themes are first-class — toggle in the header, remembered in `localStorage`, falls back to the OS preference.
- **Layout:** 1220px max grid, hairline rules, numbered sections, sticky reading progress, procedural SVG "poster" covers so no stock imagery is needed for new case studies.
- **Motion:** scroll reveals, marquee, rotating stamp — all disabled under `prefers-reduced-motion`.

## File map

```
index.html                      Home
services/index.html             Services hub
services/<slug>/index.html      9 service pages
work/index.html                 Portfolio index
work/<slug>/index.html          9 case studies
insights/index.html             Article index
insights/<slug>/index.html      9 articles
about/ pricing/ process/ faq/ contact/ privacy/ terms/ digital-agency-bangalore/
404.html                        Not-found page
sitemap.xml robots.txt llms.txt site.webmanifest og-image.jpg
assets/css/site.css             Entire design system (~48 KB, one request)
assets/js/site.js               Theme, nav, accordions, filters, TOC, form (~10 KB)
assets/fonts/                   Satoshi woff2
assets/work/                    Case-study imagery (WebP)
favicon*/ apple-touch-icon.png  Icons
```

## Editing

- **Copy:** edit the relevant `index.html`. Every page is self-contained — no build step to preview.
- **Colours, spacing, type scale:** `assets/css/site.css`, tokens at the top (`:root` and `[data-theme="light"]`).
- **Theme, menu, accordion, filter, form behaviour:** `assets/js/site.js`.
- **Pricing, FAQ, service copy in bulk:** regenerate from the source data (see "Rebuilding" below) rather than editing nine pages by hand.

## Local preview

```bash
python -m http.server 8080
# open http://localhost:8080/
```

No build, no npm install, no server runtime — nginx serves these files as-is.

## Analytics

Every page includes Ahrefs Web Analytics in `<head>`:

```html
<script src="https://analytics.ahrefs.com/analytics.js" data-key="H4jlYrcz26FIZgDhDxKNmQ" async></script>
```

It is a cookieless, aggregate-only script — no consent banner needed, and the page renders normally if it is blocked.

**Important:** the AutoClaw preview domain serves a strict `Content-Security-Policy` that blocks third-party
scripts, so this tag will not fire on the preview URL and Ahrefs' "Recheck installation" will report it as
missing there. That is a preview-environment limitation, not a fault in the page. Verify installation against
`https://wingsforshare.com` once the site is deployed to your own nginx box (which sets no such CSP).
To confirm the tag is present in the build at any time:

```bash
grep -rl "analytics.ahrefs.com/analytics.js" . --include="*.html" | wc -l   # expect 40
```

## SEO implementation

- Unique `<title>` and meta description per page; canonical to `https://wingsforshare.com/...`.
- Open Graph + Twitter cards, with a generated 1200×630 `og-image.jpg`.
- JSON-LD per page: `Organization` + `ProfessionalService`, `WebSite`, `BreadcrumbList`, `Service`,
  `FAQPage`, `BlogPosting`, `CollectionPage`, `ItemList`, `HowTo`, `CreativeWork`, `ContactPage`.
- Semantic heading order (one `h1` per page, `h2` for sections), descriptive `alt` text, breadcrumbs on every inner page.
- `sitemap.xml` with real routes and priorities; `robots.txt` allows crawling and points at the sitemap.
- `llms.txt` summarising entity facts, services, work and articles for AI answer engines.
- Internal linking: services ↔ case studies ↔ articles, related-service blocks, related-reading blocks.

### Turning the preview into production

The build ships as a **staging** artifact. Every page carries:

```html
<meta name="robots" content="noindex, nofollow">
```

Single command to flip it (run from this folder). It writes UTF-8 **without a BOM**, so the ₹ signs,
em dashes and arrows in the copy stay intact:

```powershell
Get-ChildItem -Recurse -Filter *.html | ForEach-Object {
  $c = [System.IO.File]::ReadAllText($_.FullName)
  $c = $c -replace [regex]::Escape('<meta name="robots" content="noindex, nofollow">'), '<meta name="robots" content="index, follow, max-image-preview:large">'
  [System.IO.File]::WriteAllText($_.FullName, $c, (New-Object System.Text.UTF8Encoding($false)))
}
Get-ChildItem -Recurse -Filter *.html | Select-String 'noindex'   # expect no output
```

Do **not** use plain `Set-Content` without `-Encoding` — on PowerShell 5.1 it writes ANSI and would corrupt
the non-ASCII characters on every page.

On Linux you can instead run `sed` on the server (byte-safe):

```bash
grep -rl 'noindex, nofollow' --include='*.html' . | xargs sed -i 's|<meta name="robots" content="noindex, nofollow">|<meta name="robots" content="index, follow, max-image-preview:large">|g'
```

Then submit `https://wingsforshare.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.

### URL map and redirects

The live React site currently uses `/services/:slug` without a trailing slash. This build serves
directory URLs with a trailing slash. nginx should redirect the old form:

```nginx
location ~ ^/services/([a-z-]+)$ { return 301 /services/$1/; }
location ~ ^/work/([a-z-]+)$     { return 301 /work/$1/; }
location ~ ^/insights/([a-z-]+)$ { return 301 /insights/$1/; }
```

The one URL that genuinely changed shape is the pest-control case study: the old path is
`/product/pest-management-app`, the new one is `/work/pest-management-bi/`. Keep a permanent
redirect for it, and for any other `/product/*` URL, so existing rankings transfer:

```nginx
location ~ ^/product/pest-management-app$ { return 301 /work/pest-management-bi/; }
location ~ ^/product/architect-portfolio$  { return 301 /work/architect-portfolio/; }
location ~ ^/product/garment-ecommerce$    { return 301 /work/garment-ecommerce/; }
```

## Rebuilding

The site was generated from a Node build script kept outside this folder
(`.openclaw/tmp/wfs/`, files `data-services.js`, `data-work.js`, `data-pages.js`, `render.js`, `build.js`).
It needs no dependencies:

```bash
node .openclaw/tmp/wfs/build.js "C:\path\to\this\folder"
```

Edit the data files, re-run, and every page, sitemap and schema block regenerates consistently.

## Quality checks run on this build

- **Links:** 0 broken local links across all 40 HTML documents (every `href`/`src` resolved).
- **External requests:** every stylesheet, script, font, icon and image is same-origin. The single third-party
  request is the Ahrefs analytics beacon (cookieless, async, non-blocking); the only other external strings are
  user-initiated links (WhatsApp, LinkedIn, Maps, live demos) and canonical/schema URLs.
- **Responsive:** verified at 1440, 1200, 900, 640 and 390 CSS pixels. Grids collapse to
  `minmax(0, 1fr)` so nothing overflows; buttons go full-width under 640px.
- **Accessibility:** skip link, focus-visible rings, `aria-current` navigation, labelled form fields
  with inline errors, `aria-expanded` menu and dropdown, accordions as native `<details>`,
  reduced-motion support, AA-targeted contrast in both themes.
- **No-JS:** content is fully readable — reveals only hide when JavaScript is present.
- **Forms:** the contact form composes a `mailto:` brief with validation and an explicit status
  message. There is no backend, so nothing is stored or transmitted by the site.

## Known leftovers

`app.js`, `style.css` and `theme-init.js` are from the previous one-page build and are no longer
referenced by any page. Safe to delete. `__frame390*.html` are preview harness stubs that redirect
home; also safe to delete.
