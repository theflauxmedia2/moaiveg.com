# Live vs refreshed — MOAI Restaurant

Compared 2026-09-27. Live: `https://www.moaiveg.com`. Local: production build served at `http://127.0.0.1:4175` (`vite preview` of `dist`).

Rendered values (after JavaScript). Local pages now have one description, one canonical, and one robots tag. Live still has the homepage shell duplicated in front of the Helmet tags; the live column below is the Helmet value from the baseline.

Titles and H1s are unchanged. Descriptions are the intended shorter copy. No refreshed sitemap page has `noindex`.

| Page | Status | Title (live = refreshed) | Description live → refreshed | Canonical | H1 | Result |
| --- | --- | --- | --- | --- | --- | --- |
| `/` | live 200 / local 200 | MOAI Restaurant \| Vegetarian Fine Dining in Jayanagar & Koramangala, Bangalore | Premium pure vegetarian fine dining in Jayanagar and Koramangala 5th Block, Bangalore. The live line continued with artisanal multi-cuisine, vegan-friendly dining for families, couples, birthdays, anniversaries, and corporate groups. Refreshed: Premium pure vegetarian fine dining in Jayanagar and Koramangala 5th Block, Bangalore. Vegan-friendly for families, couples, birthdays, and corporate groups. | `https://www.moaiveg.com/` | Where Artistry Meets Flavour | PASS |
| `/menu` | 200 / 200 | Menu \| MOAI Restaurant, Artisanal Vegetarian Fine Dining, Bangalore | Live: Discover MOAI's full vegetarian fine dining menu: artisanal chats, soups, mains, desserts, and beverages. Pure veg and vegan-friendly. Now serving Jayanagar and Koramangala 5th Block, Bangalore. Refreshed: MOAI's vegetarian fine dining menu in Jayanagar and Koramangala: artisanal chats, soups, mains, desserts, and drinks. Pure veg and vegan-friendly. | `https://www.moaiveg.com/menu` | Our Menu | PASS |
| `/gallery` | 200 / 200 | Gallery \| MOAI Restaurant Bangalore, Ambience & Food Photography | Live: Explore MOAI Restaurant's gallery of artisanal vegetarian dishes, serene green-themed interiors, and luxury dining ambiance in Jayanagar and Koramangala, Bangalore. Refreshed: Gallery of MOAI's vegetarian dishes and green-themed dining rooms in Jayanagar and Koramangala, Bangalore. | `https://www.moaiveg.com/gallery` | Gallery | PASS |
| `/contact` | 200 / 200 | Contact MOAI Restaurant \| Reservations in Jayanagar & Koramangala, Bangalore | Live: Contact MOAI Restaurant for reservations, group dining, corporate events, or birthday celebrations. Jayanagar: 790/43, 9th Main Rd — 08047363493. Koramangala 5th Block: 134, 17th Main Road — 080 472 82414. Refreshed: Contact MOAI for reservations in Jayanagar (08047363493) and Koramangala 5th Block (080 472 82414), Bangalore. | `https://www.moaiveg.com/contact` | Contact Us | PASS |
| `/press` | 200 / 200 | Press & Media \| MOAI Restaurant — PR Coverage & News Features | Live: Read MOAI Restaurant's press coverage across ANI News, Business Standard, Tribune India, The Print, Latestly, Dailyhunt, and Devdiscourse. Stories on vegetarian fine dining and culinary innovation in Bengaluru. Refreshed: MOAI press coverage on ANI News, Business Standard, Tribune India, The Print, Latestly, Dailyhunt, and Devdiscourse. | `https://www.moaiveg.com/press` | Press Releases | PASS |
| `/locations/jayanagar` | 200 / 200 | MOAI Restaurant Jayanagar \| Pure Veg Fine Dining in Bengaluru | Live: MOAI is a premium pure vegetarian fine dining restaurant in Jayanagar, Bengaluru. Ideal for families, couples, birthdays, anniversaries, and corporate group dining, with vegan-friendly options available. Refreshed: Pure vegetarian fine dining in Jayanagar, Bengaluru. For families, couples, birthdays, anniversaries, and corporate groups, with vegan-friendly options. | `https://www.moaiveg.com/locations/jayanagar` | MOAI Jayanagar | PASS |
| `/locations/koramangala` | 200 / 200 | MOAI Restaurant Koramangala \| Pure Veg Fine Dining in Bengaluru | Live: MOAI is a premium pure vegetarian fine dining restaurant at 134, 17th Main Road, Koramangala 5th Block, Bengaluru. North Indian, biryani & desserts. Open daily 12–4 PM & 6:30 PM–12 AM. Call 080 472 82414. Refreshed: Pure veg fine dining at 134, 17th Main Road, Koramangala 5th Block. North Indian, biryani, and desserts. Open 12–4 PM and 6:30 PM–12 AM. Call 080 472 82414. | `https://www.moaiveg.com/locations/koramangala` | MOAI Koramangala | PASS |

Unknown URLs still return HTTP 200 from the SPA fallback, then render the existing 404 (H1 "404") with the existing `noindex, nofollow`. That tag is not on any sitemap page.

Internal links and same-site image URLs checked from the rendered pages: 41 checks, 0 failures.

## What a visitor would notice

On-page wording, prices, hours, addresses, phones, menu, and photos are the same.

- Keyboard focus shows an accent outline on links and buttons.
- The optional phone field accepts Indian numbers such as `08047363493` and `+91-9087432781`. Those formats were rejected before. The form still does not send the message anywhere.
- After this branch is deployed, `https://moaiveg.com` redirects to `https://www.moaiveg.com`, and a trailing slash on a page (`/menu/`) redirects to the canonical path (`/menu`).
- Search and social descriptions are shorter. Page titles are unchanged.
