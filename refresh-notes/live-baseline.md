# Live baseline — MOAI Restaurant

Recorded: 2026-09-27, from the live site (not from a local build).
Branch point: `main` @ `ed9e88ed0ca174428b32da0bd2e5d8f5d5466606` ("Add ReserveGo booking links for Jayanagar and Koramangala.")

## Stack

| Item | Value |
| --- | --- |
| Framework | Vite 5 + React 18 + TypeScript + React Router 6 (SPA) |
| UI | Tailwind CSS 3 + shadcn/ui + Framer Motion |
| Package manager | npm (`packageManager`: npm@11.6.3, lockfile `package-lock.json`). `bun.lockb` is stale and already gitignored. |
| Node (local, this machine) | v24.17.0 / npm 11.13.0 |
| `engines.node` | `>=22.0.0` (already in package.json). Live hosting does not run Node. |
| Production domain | `https://www.moaiveg.com` (canonical, sitemap, `SITE_URL`) |
| Hosting | Hostinger (`platform: hostinger`, `panel: hpanel`, server `hcdn`). Static files. `public/.htaccess` is an SPA fallback to `index.html`. `vercel.json` is present but is not what is serving production. Deploy script: `npm run build:deploy` zips `dist`. |
| Public routes | `/`, `/menu`, `/gallery`, `/contact`, `/press`, `/locations/jayanagar`, `/locations/koramangala`, plus client-side `*` → 404 |
| Env vars required | None. No `import.meta.env` / `process.env` usage in app code. |

## Redirects

Fetched 2026-09-27.

| Request | Result |
| --- | --- |
| `http://moaiveg.com/` | 301 → `https://moaiveg.com/` (200) |
| `http://www.moaiveg.com/` | 301 → `https://www.moaiveg.com/` (200) |
| `https://moaiveg.com/` | 200, no redirect to www |
| `https://www.moaiveg.com/` | 200, no redirect to apex |
| `https://www.moaiveg.com/menu` | 200 |
| `https://www.moaiveg.com/menu/` | 200 (trailing slash is not redirected; SPA serves `index.html`) |
| `http://www.moaiveg.com/menu` | 301 → `https://www.moaiveg.com/menu` |

Canonical style on the live site: `https://www.moaiveg.com` + path, homepage with a trailing slash (`https://www.moaiveg.com/`), other pages without a trailing slash.

Both hosts serve the same site. Canonicals point at www. Apex is not redirected.

## robots.txt

`GET https://www.moaiveg.com/robots.txt` → 200

```
User-agent: *
Allow: /

Sitemap: https://www.moaiveg.com/sitemap.xml

User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: WhatsApp
Allow: /

Disallow: /admin/
Disallow: /private/
```

`/admin/` and `/private/` are not real routes. No live page is disallowed.

## sitemap.xml

`GET https://www.moaiveg.com/sitemap.xml` → 200. URLs:

- `https://www.moaiveg.com/`
- `https://www.moaiveg.com/menu`
- `https://www.moaiveg.com/gallery`
- `https://www.moaiveg.com/contact`
- `https://www.moaiveg.com/press`
- `https://www.moaiveg.com/locations/jayanagar`
- `https://www.moaiveg.com/locations/koramangala`

## Pages

HTTP status is the raw response (Hostinger serves `index.html` for every path, including unknown URLs, so unknown paths are HTTP 200). Title, description, canonical, H1, and robots below are the **rendered** values after JavaScript (react-helmet-async). That is what the browser and Google see.

The static `index.html` shell also stays in the DOM, so each page has **two** description, canonical, and robots tags. The first is always the homepage shell. The rendered column is the last (Helmet) tag. No sitemap page has `noindex`.

| Page | HTTP | Title | Meta description | Canonical | H1 | Robots |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | 200 | MOAI Restaurant \| Vegetarian Fine Dining in Jayanagar & Koramangala, Bangalore | MOAI is a premium pure vegetarian fine dining restaurant in Jayanagar and Koramangala 5th Block, Bangalore. Artisanal multi-cuisine, vegan-friendly dining for families, couples, birthdays, anniversaries, and corporate groups. | `https://www.moaiveg.com/` | Where Artistry Meets Flavour | index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1 |
| `/menu` | 200 | Menu \| MOAI Restaurant, Artisanal Vegetarian Fine Dining, Bangalore | Discover MOAI's full vegetarian fine dining menu: artisanal chats, soups, mains, desserts, and beverages. Pure veg and vegan-friendly. Now serving Jayanagar and Koramangala 5th Block, Bangalore. | `https://www.moaiveg.com/menu` | Our Menu | index, follow (same snippet rules) |
| `/gallery` | 200 | Gallery \| MOAI Restaurant Bangalore, Ambience & Food Photography | Explore MOAI Restaurant's gallery of artisanal vegetarian dishes, serene green-themed interiors, and luxury dining ambiance in Jayanagar and Koramangala, Bangalore. | `https://www.moaiveg.com/gallery` | Gallery | index, follow (same snippet rules) |
| `/contact` | 200 | Contact MOAI Restaurant \| Reservations in Jayanagar & Koramangala, Bangalore | Contact MOAI Restaurant for reservations, group dining, corporate events, or birthday celebrations. Jayanagar: 790/43, 9th Main Rd — 08047363493. Koramangala 5th Block: 134, 17th Main Road — 080 472 82414. | `https://www.moaiveg.com/contact` | Contact Us | index, follow (same snippet rules) |
| `/press` | 200 | Press & Media \| MOAI Restaurant — PR Coverage & News Features | Read MOAI Restaurant's press coverage across ANI News, Business Standard, Tribune India, The Print, Latestly, Dailyhunt, and Devdiscourse. Stories on vegetarian fine dining and culinary innovation in Bengaluru. | `https://www.moaiveg.com/press` | Press Releases | index, follow (same snippet rules) |
| `/locations/jayanagar` | 200 | MOAI Restaurant Jayanagar \| Pure Veg Fine Dining in Bengaluru | MOAI is a premium pure vegetarian fine dining restaurant in Jayanagar, Bengaluru. Ideal for families, couples, birthdays, anniversaries, and corporate group dining, with vegan-friendly options available. | `https://www.moaiveg.com/locations/jayanagar` | MOAI Jayanagar | index, follow (same snippet rules) |
| `/locations/koramangala` | 200 | MOAI Restaurant Koramangala \| Pure Veg Fine Dining in Bengaluru | MOAI is a premium pure vegetarian fine dining restaurant at 134, 17th Main Road, Koramangala 5th Block, Bengaluru. North Indian, biryani & desserts. Open daily 12–4 PM & 6:30 PM–12 AM. Call 080 472 82414. | `https://www.moaiveg.com/locations/koramangala` | MOAI Koramangala | index, follow (same snippet rules) |

### Homepage shell (first tag, also what non-JS fetchers see on every URL)

Because this is one `index.html` for every route, a non-JS fetch of `/menu` still returns the homepage head:

- Title: MOAI Restaurant \| Vegetarian Fine Dining in Jayanagar & Koramangala, Bangalore
- Description: MOAI is a premium pure vegetarian fine dining restaurant in Jayanagar and Koramangala 5th Block, Bangalore. Vegan-friendly, multi-cuisine artisanal dining for families, couples, birthdays, anniversaries, and corporate group dining.
- Canonical: `https://www.moaiveg.com/`
- Robots: index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1
- H1: none in the raw HTML (`<div id="root">` only)

### Unknown URL (not in the sitemap)

`GET https://www.moaiveg.com/this-page-does-not-exist` → HTTP 200 (SPA fallback). After JS: title "Page Not Found | MOAI Restaurant", H1 "404", Helmet robots `noindex, nofollow`, canonical `https://www.moaiveg.com/404`. The static shell robots tag (`index, follow`) is still present as the first robots meta. **No sitemap page is noindex.**

## Code baseline (this commit's tree, before dependency changes)

- `npm ci`: exit 0 (338 packages). `npm audit` reported 13 vulnerabilities (1 low, 6 moderate, 6 high) — handled in Stage 1, not changed here.
- `npm run lint`: exit 0, 0 errors, 11 warnings (unused eslint-disable in scripts; `react-refresh/only-export-components` in shadcn ui files).
- `npm run build` (`vite build`): exit 0.
- No test script in `package.json`.

## Secrets scan

Working tree and full git history (18 commits): no `.env` with secrets, no private keys, no AWS/Stripe/GitHub/Slack/Firebase/Supabase/SMTP credentials. The only env-like tracked file is an empty `.env.example`.

Public measurement id in `index.html` (already on the live site, not a secret, do not change): Google Ads `AW-17708530950`.

## Not committed

Untracked local files left out of this branch on purpose: `ogdist/` (a previous deploy folder) and `scripts/prepare-deploy.js`.
