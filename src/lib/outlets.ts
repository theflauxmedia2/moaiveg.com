// Typed access to src/data/outlets.json for the React app. Structured data and URLs come from outletCore.js,
// which the build's prerender script shares.
import data from "@/data/outlets.json";
import { outletJsonLd as buildJsonLd, outletUrl as buildUrl } from "./outletCore.js";

type Img = { src: string; width: number; height: number; alt: string };
export type Outlet = {
  slug: string; name: string; area: string; mood: "day" | "night"; headline: string; lede: string;
  seoTitle: string; seoDescription: string;
  address: { street: string; locality: string; region: string; postalCode: string };
  geo: { lat: number; lng: number }; phone: { display: string; tel: string };
  hours: { label: string; opens: string; closes: string; display: string }[]; hoursNote: string;
  priceForTwo?: string; booking: string; maps: string; mapEmbed: string; hero: Img; gallery: Img[];
  particulars: { title: string; text: string }[]; faqs: { q: string; a: string }[];
};

const { _note, ...rest } = data as Record<string, unknown>;
export const outlets = rest as Record<string, Outlet>;
export const outletUrl = (slug: string): string => buildUrl(slug);
export const outletJsonLd = (o: Outlet): Record<string, unknown>[] => buildJsonLd(o);
export const otherOutlet = (slug: string): Outlet | undefined => Object.values(outlets).find((o) => o.slug !== slug);
