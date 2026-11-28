// Posts from content/blog/<slug>.json (D-27/D-28 in flaux-surface). Optional "outlet": "jayanagar" puts a post under
// /locations/<outlet>/blog/<slug>/ and on that outlet's page; without it the post is brand-wide at /blog/<slug>/.
// Checks and the plain-HTML copies for search engines happen at build time in scripts/prerender.mjs.
import data from "@/data/outlets.json";
import { factsFrom } from "./outletCore.js";

export type Section = { heading: string; paragraphs: string[]; list?: string[] };
export type Post = {
  slug: string; title: string; description: string; datePublished: string; image: string; imageAlt: string;
  keywords: string[]; sections: Section[]; outlet?: string; author?: string;
};

const { _note, ...outletData } = data as Record<string, unknown>;
const FACTS: Record<string, string> = factsFrom(outletData);
const fill = (t: string) => t.replace(/\{\{(\w+)\}\}/g, (_, n: string) => FACTS[n] ?? `{{${n}}}`);

const files = import.meta.glob<Post>("../../content/blog/[!_]*.json", { eager: true, import: "default" });

export const posts: Post[] = Object.values(files)
  .map((p) => ({
    ...p,
    title: fill(p.title),
    description: fill(p.description),
    sections: p.sections.map((s) => ({ heading: fill(s.heading), paragraphs: s.paragraphs.map(fill), list: s.list?.map(fill) })),
  }))
  .sort((a, b) => b.datePublished.localeCompare(a.datePublished) || a.title.localeCompare(b.title));

export const postUrl = (p: Post) => (p.outlet ? `/locations/${p.outlet}/blog/${p.slug}/` : `/blog/${p.slug}/`);
export const postsFor = (outlet: string) => posts.filter((p) => p.outlet === outlet);
export const findPost = (slug: string, outlet?: string) => posts.find((p) => p.slug === slug && (p.outlet ?? undefined) === outlet);
