// Shared by the React app (src/lib/outlets.ts) and the build's prerender script (scripts/prerender.mjs), so the
// structured data in the plain-HTML copy and in the live app can never disagree. Plain JS on purpose: Node runs it
// without a TypeScript step.
export const SITE = "https://www.moaiveg.com";

// Canonical outlet URL. Trailing slash: the prerendered copy is a folder (locations/<slug>/index.html), and outlet
// posts live under it (D-28).
export const outletUrl = (slug) => `${SITE}/locations/${slug}/`;

const ALL_DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Google LocalBusiness docs: one entry per location, `url` = that location's page, geo to 5+ decimals.
export function outletJsonLd(o) {
  const restaurant = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${outletUrl(o.slug)}#restaurant`,
    name: o.name,
    url: outletUrl(o.slug),
    image: [`${SITE}${o.hero.src}`],
    telephone: o.phone.tel,
    servesCuisine: ["Vegetarian", "Global", "Italian", "North Indian"],
    menu: `${SITE}/menu`,
    acceptsReservations: true,
    address: {
      "@type": "PostalAddress",
      streetAddress: o.address.street,
      addressLocality: o.address.locality,
      addressRegion: o.address.region,
      postalCode: o.address.postalCode,
      addressCountry: "IN",
    },
    geo: { "@type": "GeoCoordinates", latitude: o.geo.lat, longitude: o.geo.lng },
    openingHoursSpecification: o.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ALL_DAYS,
      opens: h.opens,
      closes: h.closes,
    })),
    parentOrganization: { "@type": "Organization", name: "MOAI", url: `${SITE}/` },
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: o.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return [restaurant, faq];
}

// Placeholders posts may use, e.g. {{jayanagarPhone}}, filled from the outlet data (one place for facts).
export function factsFrom(outlets) {
  const facts = {};
  for (const o of Object.values(outlets)) {
    facts[`${o.slug}Phone`] = o.phone.display;
    facts[`${o.slug}Address`] = `${o.address.street}, ${o.address.locality} ${o.address.postalCode}`;
    facts[`${o.slug}Hours`] = o.hours.map((h) => `${h.label.toLowerCase()} ${h.display}`).join(", ");
  }
  return facts;
}
