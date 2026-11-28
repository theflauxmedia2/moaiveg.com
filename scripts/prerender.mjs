// Runs after `vite build` (postbuild). Writes plain-HTML copies of every outlet page and every post, so search
// engines read the title, description, canonical, structured data and main text without running JavaScript
// (the React app replaces #root on load). .htaccess serves existing folders before the SPA fallback (D-27/D-28).
//   dist/locations/<outlet>/index.html                 outlet pages (src/data/outlets.json)
//   dist/locations/<outlet>/blog/<slug>/index.html     outlet posts ("outlet" field)
//   dist/blog/<slug>/index.html, dist/blog/index.html  brand posts and the journal list
// A bad outlet or post file fails the build, so nothing broken goes live.
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { SITE, factsFrom, outletJsonLd, outletUrl } from "../src/lib/outletCore.js";

const DIST = "dist";
const POSTS = "content/blog";
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const isText = (v) => typeof v === "string" && v.trim() !== "";
const ld = (obj) => `<script type="application/ld+json">${JSON.stringify(obj).replace(/</g, "\\u003c")}</script>`;

const { _note, ...outlets } = JSON.parse(readFileSync("src/data/outlets.json", "utf8"));
for (const [key, o] of Object.entries(outlets)) {
  for (const f of ["slug", "name", "area", "headline", "lede", "seoTitle", "seoDescription", "booking", "maps"]) {
    if (!isText(o[f])) throw new Error(`outlets.json ${key}: "${f}" is missing or empty`);
  }
  if (o.slug !== key) throw new Error(`outlets.json ${key}: slug must equal its key`);
  if (!o.phone?.tel || !o.geo?.lat || !o.hours?.length || !o.faqs?.length) throw new Error(`outlets.json ${key}: phone, geo, hours and faqs are required`);
  if (!existsSync(path.join("public", o.hero.src))) throw new Error(`outlets.json ${key}: hero image ${o.hero.src} not found in public/`);
}

const facts = factsFrom(outlets);
const fill = (t, file) => t.replace(/\{\{(\w+)\}\}/g, (_, n) => {
  if (!(n in facts)) throw new Error(`${file}: unknown placeholder {{${n}}} (known: ${Object.keys(facts).join(", ")})`);
  return facts[n];
});

function loadPost(file) {
  const p = JSON.parse(readFileSync(path.join(POSTS, file), "utf8"));
  for (const k of ["slug", "title", "description", "datePublished", "image", "imageAlt"]) if (!isText(p[k])) throw new Error(`${file}: "${k}" is missing or empty`);
  if (`${p.slug}.json` !== file) throw new Error(`${file}: slug must match the file name`);
  if (!/^\d{4}-\d{2}-\d{2}$/.test(p.datePublished)) throw new Error(`${file}: datePublished must be YYYY-MM-DD`);
  if (p.outlet != null && !outlets[p.outlet]) throw new Error(`${file}: unknown outlet "${p.outlet}" (known: ${Object.keys(outlets).join(", ")})`);
  if (!Array.isArray(p.keywords) || !Array.isArray(p.sections) || !p.sections.length) throw new Error(`${file}: needs keywords[] and sections[]`);
  for (const s of p.sections) if (!isText(s.heading) || !Array.isArray(s.paragraphs)) throw new Error(`${file}: every section needs a heading and paragraphs[]`);
  return { ...p, title: fill(p.title, file), description: fill(p.description, file),
    sections: p.sections.map((s) => ({ heading: fill(s.heading, file), paragraphs: s.paragraphs.map((t) => fill(t, file)), list: s.list?.map((t) => fill(t, file)) })) };
}
const posts = existsSync(POSTS) ? readdirSync(POSTS).filter((f) => f.endsWith(".json") && !f.startsWith("_")).map(loadPost) : [];
const postPath = (p) => (p.outlet ? `/locations/${p.outlet}/blog/${p.slug}/` : `/blog/${p.slug}/`);

const shell = readFileSync(path.join(DIST, "index.html"), "utf8");
if (!shell.includes('<div id="root"></div>')) throw new Error("dist/index.html: #root not found");

function page(urlPath, { title, description, image, jsonLd, body, noindex = false }) {
  const url = `${SITE}${urlPath}`;
  const set = (re, tag) => { if (!re.test(html)) throw new Error(`shell is missing ${re}`); html = html.replace(re, tag); };
  let html = shell;
  set(/<title>[\s\S]*?<\/title>/, `<title>${esc(title)}</title>`);
  set(/<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${esc(description)}" />`);
  set(/<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${url}" />`);
  set(/<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${url}" />`);
  set(/<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${esc(title)}" />`);
  set(/<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${esc(description)}" />`);
  if (image) set(/<meta property="og:image" content="[^"]*"\s*\/?>/, `<meta property="og:image" content="${SITE}${esc(image)}" />`);
  // The shell carries the homepage's structured data (both outlets + brand); a page keeps only its own.
  html = html.replace(/<script\s+type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>\s*/g, "");
  html = html.replace("</head>", `${noindex ? '<meta name="robots" content="noindex, follow" />' : ""}${[jsonLd].flat().filter(Boolean).map(ld).join("")}</head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  const dir = path.join(DIST, ...urlPath.split("/").filter(Boolean));
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "index.html"), html);
}

for (const o of Object.values(outlets)) {
  const addr = `${o.address.street}, ${o.address.locality} ${o.address.postalCode}`;
  const own = posts.filter((p) => p.outlet === o.slug);
  const body = `<main><h1>${esc(o.name)}</h1><p>${esc(o.headline)}</p><p>${esc(o.lede)}</p>` +
    `<h2>Address</h2><p>${esc(addr)}</p><p><a href="${esc(o.maps)}">Get directions</a></p>` +
    `<h2>Hours (${esc(o.hoursNote.toLowerCase())})</h2><ul>${o.hours.map((h) => `<li>${esc(h.label)}: ${esc(h.display)}</li>`).join("")}</ul>` +
    `<p><a href="tel:${esc(o.phone.tel)}">Call ${esc(o.phone.display)}</a> · <a href="${esc(o.booking)}">Reserve a table</a></p>` +
    `<h2>What to expect at ${esc(o.name)}</h2>${o.particulars.map((p) => `<h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>`).join("")}` +
    `<h2>Questions about ${esc(o.name)}</h2>${o.faqs.map((f) => `<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`).join("")}` +
    (own.length ? `<h2>From the ${esc(o.area)} journal</h2><ul>${own.map((p) => `<li><a href="${postPath(p)}">${esc(p.title)}</a></li>`).join("")}</ul>` : "") +
    `<p><a href="/menu">See the full menu</a></p></main>`;
  const crumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
    { "@type": "ListItem", position: 2, name: o.area, item: outletUrl(o.slug) } ] };
  page(`/locations/${o.slug}/`, { title: o.seoTitle, description: o.seoDescription, image: o.hero.src, jsonLd: [...outletJsonLd(o), crumbs], body });
}

for (const p of posts) {
  const o = p.outlet ? outlets[p.outlet] : null;
  const url = `${SITE}${postPath(p)}`;
  const body = `<main><article><h1>${esc(p.title)}</h1><p><time datetime="${p.datePublished}">${p.datePublished}</time>${o ? ` · <a href="/locations/${o.slug}/">${esc(o.name)}</a>` : ""}</p>` +
    `<img src="${esc(p.image)}" alt="${esc(p.imageAlt)}">` +
    p.sections.map((s) => `<h2>${esc(s.heading)}</h2>${s.paragraphs.map((t) => `<p>${esc(t)}</p>`).join("")}${s.list ? `<ul>${s.list.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}`).join("") +
    `</article></main>`;
  page(postPath(p), { title: `${p.title} | MOAI${o ? ` ${o.area}` : ""}`, description: p.description, image: p.image, body, jsonLd: {
    "@context": "https://schema.org", "@type": "BlogPosting", headline: p.title, description: p.description, datePublished: p.datePublished,
    image: `${SITE}${p.image}`, mainEntityOfPage: url, keywords: p.keywords.join(", "),
    author: { "@type": "Organization", name: p.author || "MOAI" }, publisher: { "@type": "Organization", name: "MOAI", url: `${SITE}/` },
    ...(o ? { about: { "@id": `${outletUrl(o.slug)}#restaurant` } } : {}) } });
}

page("/blog/", { title: "Journal | MOAI, Pure Veg Fine Dining in Bengaluru", noindex: posts.length === 0,
  description: "Notes from MOAI's kitchens in Jayanagar and Koramangala: vegetarian food, occasions and evenings in Bengaluru.",
  body: `<main><h1>Journal</h1><ul>${posts.map((p) => `<li><a href="${postPath(p)}">${esc(p.title)}</a></li>`).join("")}</ul></main>` });

if (posts.length) {
  const sm = path.join(DIST, "sitemap.xml");
  const urls = [{ loc: `${SITE}/blog/`, lastmod: posts[0].datePublished }, ...posts.map((p) => ({ loc: `${SITE}${postPath(p)}`, lastmod: p.datePublished }))]
    .map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n`).join("");
  writeFileSync(sm, readFileSync(sm, "utf8").replace("</urlset>", `${urls}</urlset>`));
}
console.log(`prerender: ${Object.keys(outlets).length} outlet page(s), ${posts.length} post(s)`);
