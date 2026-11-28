import { createPortal } from "react-dom";
import { Link, useParams } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import SEOHead from "@/components/SEOHead";
import NotFound from "@/pages/NotFound";
import { blurUp, staggerContainer } from "@/lib/motion";
import { outlets, outletJsonLd, outletUrl, otherOutlet, type Outlet } from "@/lib/outlets";
import { postsFor, postUrl } from "@/lib/blogFiles";

// One page for every MOAI outlet (D-28). All copy and facts come from src/data/outlets.json, so the two pages
// differ by real details, never by a swapped name. Mood: "day" = light, sunlit hero; "night" = forest-dark hero.
// Bronze buttons use #80664d, not the brand #947352: white text needs 4.5:1 (AA); the brand shade gives 4.2:1.
const press = "transition-transform duration-150 ease-out active:scale-[0.97]";

const VisitAction = ({ outlet, compact = false }: { outlet: Outlet; compact?: boolean }) => (
  <a
    href={outlet.booking}
    target="_blank"
    rel="noopener noreferrer"
    className={`${press} inline-flex items-center justify-center rounded-full bg-[#80664d] font-medium text-white hover:bg-[#735c45] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${compact ? "flex-1 whitespace-nowrap px-3 py-3 text-sm" : "px-7 py-3.5"}`}
  >
    {compact ? "Reserve" : "Reserve a table"}
  </a>
);

const OutletPage = () => {
  const { outlet: slug = "" } = useParams();
  const outlet = outlets[slug];
  const reduce = useReducedMotion();
  if (!outlet) return <NotFound />;

  const night = outlet.mood === "night";
  const other = otherOutlet(outlet.slug);
  const posts = postsFor(outlet.slug);
  const fullAddress = `${outlet.address.street}, ${outlet.address.locality} ${outlet.address.postalCode}`;

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <SEOHead
        title={outlet.seoTitle}
        description={outlet.seoDescription}
        canonical={outletUrl(outlet.slug)}
        ogImage={`https://www.moaiveg.com${outlet.hero.src}`}
        ogType="restaurant"
        breadcrumbs={[
          { name: "Home", item: "https://www.moaiveg.com/" },
          { name: "Locations", item: "https://www.moaiveg.com/contact" },
          { name: outlet.area, item: outletUrl(outlet.slug) },
        ]}
        jsonLd={outletJsonLd(outlet)}
      />

      <header>
        <Navigation />
      </header>

      <main id="main-content">
        {/* Hero: the outlet name is the headline; the photo carries the outlet's character. */}
        <section className="relative isolate flex min-h-[78svh] items-end overflow-hidden">
          <img
            src={outlet.hero.src}
            width={outlet.hero.width}
            height={outlet.hero.height}
            alt={outlet.hero.alt}
            fetchPriority="high"
            decoding="async"
            className="absolute inset-0 -z-10 h-full w-full object-cover"
          />
          <div
            aria-hidden="true"
            className={`absolute inset-0 -z-10 ${night ? "bg-gradient-to-t from-[#16241a] via-[#16241a]/80 to-[#16241a]/30" : "bg-gradient-to-t from-black/80 via-black/40 to-black/5"}`}
          />
          {/* Keeps the site navigation readable over any photo. */}
          <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-black/60 to-transparent" />
          <motion.div
            className="container mx-auto px-6 pb-14 pt-32 md:pb-20"
            variants={reduce ? undefined : staggerContainer}
            initial={reduce ? false : "hidden"}
            animate="visible"
          >
            <motion.h1 variants={reduce ? undefined : blurUp} className="text-white">
              <span className="block text-2xl font-normal lowercase tracking-wide text-[#F1D8B8] md:text-3xl">moai</span>
              <span className="block text-6xl font-bold leading-[0.95] md:text-8xl lg:text-9xl">{outlet.area}</span>
            </motion.h1>
            <motion.p variants={reduce ? undefined : blurUp} className="mt-6 max-w-xl text-2xl italic text-white/95 md:text-3xl" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              {outlet.headline}
            </motion.p>
            <motion.p variants={reduce ? undefined : blurUp} className="mt-4 max-w-xl text-lg leading-relaxed text-white/85">
              {outlet.lede}
            </motion.p>
            <motion.div variants={reduce ? undefined : blurUp} className="mt-8 hidden gap-3 md:flex">
              <VisitAction outlet={outlet} />
              <a href={`tel:${outlet.phone.tel}`} className={`${press} inline-flex items-center rounded-full border border-white/60 px-7 py-3.5 font-medium text-white hover:bg-white/10`}>
                Call {outlet.phone.display}
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* Visit band: everything needed to come in, in one row. */}
        <section aria-label={`Visit ${outlet.name}`} className={night ? "bg-[#16241a] text-white" : "bg-[#F1D8B8]/40"}>
          <div className="container mx-auto grid gap-8 px-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h2 className={`text-sm font-semibold ${night ? "text-[#F1D8B8]" : "text-primary"}`} style={{ fontFamily: "Inter, sans-serif" }}>Address</h2>
              <p className="mt-2 leading-relaxed">{fullAddress}</p>
              <a href={outlet.maps} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block font-medium underline underline-offset-4">Get directions</a>
            </div>
            <div>
              <h2 className={`text-sm font-semibold ${night ? "text-[#F1D8B8]" : "text-primary"}`} style={{ fontFamily: "Inter, sans-serif" }}>Open {outlet.hoursNote.toLowerCase()}</h2>
              <dl className="mt-2 space-y-1">
                {outlet.hours.map((h) => (
                  <div key={h.label} className="flex gap-3"><dt className="w-16 opacity-75">{h.label}</dt><dd>{h.display}</dd></div>
                ))}
              </dl>
              {outlet.priceForTwo && <p className="mt-2 opacity-75">{outlet.priceForTwo}</p>}
            </div>
            <div>
              <h2 className={`text-sm font-semibold ${night ? "text-[#F1D8B8]" : "text-primary"}`} style={{ fontFamily: "Inter, sans-serif" }}>Call</h2>
              <a href={`tel:${outlet.phone.tel}`} className="mt-2 inline-block text-xl font-medium">{outlet.phone.display}</a>
            </div>
            <div className="flex items-start lg:justify-end">
              <VisitAction outlet={outlet} />
            </div>
          </div>
        </section>

        {/* What is particular to this outlet: the content that makes this page its own. */}
        <section className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <h2 className="text-4xl font-bold leading-tight text-primary md:text-5xl">What to expect at {outlet.name}</h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-muted-foreground">
              Global vegetarian cuisine, from pizzas and pastas to North Indian favourites, every dish cooked in cold-pressed oils.{" "}
              <Link to="/menu" className="font-medium text-primary underline underline-offset-4">See the full menu</Link>
            </p>
          </div>
          <ul className="divide-y divide-border">
            {outlet.particulars.map((p) => (
              <li key={p.title} className="py-7 first:pt-0">
                <h3 className="text-2xl font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 max-w-prose text-lg leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery: one large image, two beside it. */}
        <section aria-label={`Photos of ${outlet.name}`} className="container mx-auto px-6 pb-20">
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {outlet.gallery.map((g, i) => (
              <img
                key={g.src}
                src={g.src}
                width={g.width}
                height={g.height}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                className={`h-full w-full rounded-2xl object-cover ${i === 0 ? "aspect-[4/3] md:col-span-2 md:row-span-2" : "aspect-[4/3] md:aspect-auto"}`}
              />
            ))}
          </div>
        </section>

        {/* Find us */}
        <section className="bg-secondary/40">
          <div className="container mx-auto grid gap-10 px-6 py-20 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold text-primary">Find {outlet.name}</h2>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{fullAddress}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={outlet.maps} target="_blank" rel="noopener noreferrer" className={`${press} inline-flex items-center rounded-full border border-primary px-6 py-3 font-medium text-primary hover:bg-primary hover:text-primary-foreground`}>Get directions</a>
                <a href={`tel:${outlet.phone.tel}`} className={`${press} inline-flex items-center rounded-full border border-primary px-6 py-3 font-medium text-primary hover:bg-primary hover:text-primary-foreground`}>Call {outlet.phone.display}</a>
              </div>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <iframe src={outlet.mapEmbed} title={`Map showing ${outlet.name}`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" className="h-full w-full border-0" />
            </div>
          </div>
        </section>

        {/* FAQs (native disclosure: works without JavaScript and with the keyboard). */}
        <section className="container mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-4xl font-bold text-primary">Questions about {outlet.name}</h2>
          <div className="mt-8 divide-y divide-border border-y border-border">
            {outlet.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium text-foreground marker:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
                  {f.q}
                  <span aria-hidden="true" className="text-2xl text-accent transition-transform duration-200 ease-out group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 max-w-prose leading-relaxed text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {posts.length > 0 && (
          <section className="container mx-auto px-6 pb-20">
            <h2 className="text-4xl font-bold text-primary">From the {outlet.area} journal</h2>
            <ul className="mt-8 grid gap-8 md:grid-cols-3">
              {posts.slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <Link to={postUrl(p)} className="group block">
                    <img src={p.image} alt={p.imageAlt} loading="lazy" decoding="async" className="aspect-[4/3] w-full rounded-2xl object-cover" />
                    <h3 className="mt-4 text-xl font-semibold text-primary group-hover:underline group-hover:underline-offset-4">{p.title}</h3>
                    <p className="mt-2 text-muted-foreground">{p.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {other && (
          <section className="border-t border-border">
            <div className="container mx-auto flex flex-col gap-4 px-6 py-14 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-muted-foreground">Our other restaurant</p>
                <p className="mt-1 text-3xl font-semibold text-primary" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{other.name}</p>
                <p className="mt-1 italic text-muted-foreground" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{other.headline}</p>
              </div>
              <Link to={`/locations/${other.slug}/`} className="font-medium text-primary underline underline-offset-4">Visit {other.name}</Link>
            </div>
          </section>
        )}
      </main>

      {/* Phones: call, directions and booking stay one tap away. Portalled to <body>: the route-transition wrapper
          is transformed, and a transformed ancestor would pin "fixed" to the page instead of the screen. */}
      {createPortal(<div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background/95 p-3 backdrop-blur md:hidden">
        <a href={`tel:${outlet.phone.tel}`} className={`${press} flex-1 rounded-full border border-primary px-4 py-3 text-center text-sm font-medium text-primary`}>Call</a>
        <a href={outlet.maps} target="_blank" rel="noopener noreferrer" className={`${press} flex-1 rounded-full border border-primary px-4 py-3 text-center text-sm font-medium text-primary`}>Directions</a>
        <VisitAction outlet={outlet} compact />
      </div>, document.body)}

      <footer>
        <Footer />
        <Credits />
      </footer>
    </div>
  );
};

export default OutletPage;
