# Open ends — MOAI Restaurant

<!--
Tracked by Flaux HQ. Rules:
- One item per line: "- [ ] text #tags"
- Priority tags: #high #medium #low (default medium)
- Other tags allowed: #mobile #blog #homepage etc.
- When fixed: tick it "- [x]" or delete the line, in the same commit as the fix.
- Or write "closes OE: <item text>" in the commit message.
- Keep the section headings exactly as they are.
-->

## Bugs
- [ ] Contact form on `/contact` validates and shows "Message Sent!" but never emails or posts anywhere — wire a real endpoint without changing recipient until approved #high #contact
- [ ] SPA unknown paths return HTTP 200 instead of 404 on Hostinger (`.htaccess` serves `index.html`); SEO soft-404 risk #medium #seo

## SEO
- [ ] Expand `/locations/jayanagar` body copy above ~300 words while keeping existing H1 and facts #medium #seo
- [ ] Add more Koramangala-local internal links from homepage FAQ and footer occasion links where natural #low #seo
- [ ] Confirm Google Search Console property uses `https://www.moaiveg.com` and submit `sitemap.xml` after go-live #high #seo
- [ ] Decide whether apex `moaiveg.com` → www redirect (already on `refresh-2026` `.htaccess`) is approved for production #medium #seo

## Client inputs needed
- [ ] Privacy policy and terms of use pages or copy for footer links #medium #legal
- [ ] Logo in SVG (current assets are PNG under `/lovable-uploads` and `/logo.png`) #low
- [ ] Confirm Koramangala hours, phone `080 472 82414`, and address still match Google Business Profile #medium
- [ ] Domain/DNS and Hostinger access for repo relink and redirect testing #high #launch
- [ ] Google Business Profile access for both Jayanagar and Koramangala #medium
- [ ] Preferred contact-form destination (email address or booking CRM) #high #contact
- [ ] Updated menu prices or PDF if the on-site menu should match current print menu #low

## Features to build
- [ ] Real contact-form delivery (email/API) after client chooses the destination #high #contact
- [ ] Optional: remove or update unused `OutletBanner` "Koramangala Coming Soon" poster (`src/components/ui/OutletBanner.tsx`) — Koramangala is live #low

## Content
- [ ] Strengthen Jayanagar location page with unique local copy (parking, nearby landmarks already known to client only) #medium #seo
- [ ] Add privacy/terms links in footer once copy exists #medium #legal

## Performance & accessibility
- [ ] Convert large JPG/PNG under `public/food`, `public/ambinace`, and banners to WebP/AVIF while keeping original URLs working #medium #performance
- [ ] Preload critical logo/hero assets and audit LCP on mobile homepage #medium #mobile #performance
- [ ] Replace Inter with a non-default body font if brand wants a more distinctive look (current stack uses Inter + Playfair) #low

## Launch & infra
- [ ] Merge `refresh-2026` → `main` and deploy only after preview review #high #launch
- [ ] Relink Hostinger deploy source to new GitHub repo `theflauxmedia2/moaiveg.com`, production branch = `main` #high #launch
- [ ] Open a Hostinger/preview deploy of `refresh-2026` and check phone + desktop before merge #high #launch
- [ ] Submit sitemap in Search Console and verify ownership for www #high #seo
- [ ] Check analytics: live site has Google Ads `AW-17708530950` only — confirm if GA4/GTM should be added (do not invent IDs) #medium
- [ ] Test form email delivery on production after endpoint is wired #high #contact
- [ ] Set up uptime monitoring for `https://www.moaiveg.com` #medium #launch
- [ ] ASK approved: major upgrade React 18 → 19 + matching types #medium #deps
- [ ] ASK approved: major upgrade Vite 5 → 8 (fixes remaining esbuild/vite audit via breaking change) #medium #deps
- [ ] ASK approved: major upgrade react-router-dom 6 → 7 (fixes remaining router audit via breaking change) #medium #deps
- [ ] ASK approved: major upgrade Tailwind CSS 3 → 4 #medium #deps
- [ ] ASK deferred: ESLint 10 blocked by peer conflict with installed eslint utils — retry when toolchain supports it #low #deps
