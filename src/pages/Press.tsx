import { ExternalLink, Globe, Newspaper, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import PageHero from "@/components/motion/PageHero";
import Reveal from "@/components/motion/Reveal";
import SEOHead from "@/components/SEOHead";
import { pressReleases, allPressOutlets } from "@/lib/pressReleases";
import { premiumEase, staggerContainer, staggerItem } from "@/lib/motion";

const outletInitials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

const Press = () => {
  const canonical = "https://www.moaiveg.com/press";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Press & Media | MOAI Restaurant — PR Coverage & News Features"
        description="MOAI press coverage on ANI News, Business Standard, Tribune India, The Print, Latestly, Dailyhunt, and Devdiscourse."
        canonical={canonical}
        breadcrumbs={[
          { name: "Home", item: "https://www.moaiveg.com/" },
          { name: "Press", item: canonical },
        ]}
      />

      <header>
        <Navigation />
      </header>

      <main id="main-content">
        <PageHero
          badge={
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FED6AB]/40 bg-white/80 px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-accent" aria-hidden />
              PR &amp; Influencers
            </span>
          }
          title="Press Releases"
          description="MOAI in the headlines — discover how India's leading publications are covering our journey in redefining vegetarian fine dining."
        >
          <motion.div
            className="mx-auto grid max-w-2xl grid-cols-3 gap-4 sm:gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { value: String(pressReleases.length), label: "Stories" },
              { value: String(allPressOutlets.length), label: "Publications" },
              { value: "ANI", label: "Syndicated via" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={staggerItem}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.35, ease: premiumEase }}
                className="rounded-2xl border border-border/50 bg-white/70 px-4 py-5 backdrop-blur-sm"
              >
                <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </PageHero>

        <section className="py-20">
          <motion.div
            className="container mx-auto space-y-12 px-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {pressReleases.map((release) => (
              <motion.article
                key={release.id}
                variants={staggerItem}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: premiumEase }}
                className="overflow-hidden rounded-3xl border border-border/50 bg-white shadow-sm transition-smooth hover:shadow-elegant royal-border"
              >
                <div className="grid lg:grid-cols-[1fr_1.1fr]">
                  <div className="border-b border-border/40 bg-gradient-to-br from-primary/[0.04] to-accent/[0.06] p-8 lg:border-b-0 lg:border-r">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                        <Newspaper className="h-3.5 w-3.5" aria-hidden />
                        Press Release
                      </span>
                      <time dateTime="2026-04-01" className="text-sm text-muted-foreground">
                        {release.date}
                      </time>
                    </div>
                    <h2 className="text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                      {release.title}
                    </h2>
                    <p className="mt-4 leading-relaxed text-muted-foreground">{release.excerpt}</p>
                    <p className="mt-6 text-sm text-muted-foreground">
                      Syndicated across{" "}
                      <span className="font-semibold text-primary">{release.outlets.length}</span>{" "}
                      {release.outlets.length === 1 ? "publication" : "publications"}
                    </p>
                  </div>

                  <div className="p-6 sm:p-8">
                    <p className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      <Globe className="h-4 w-4" aria-hidden />
                      Read the coverage
                    </p>
                    <ul className="space-y-3">
                      {release.outlets.map((outlet, i) => (
                        <motion.li
                          key={outlet.url}
                          initial={{ opacity: 0, x: 16 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06, duration: 0.4, ease: premiumEase }}
                        >
                          <motion.a
                            href={outlet.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 rounded-xl border border-border/60 bg-muted/30 p-4 transition-smooth hover:border-accent/40 hover:bg-accent/5 hover:shadow-sm"
                            aria-label={`Read "${release.title}" on ${outlet.name}`}
                            whileHover={{ x: 4 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            <span
                              className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white transition-smooth group-hover:bg-accent group-hover:text-accent-foreground"
                              aria-hidden
                            >
                              {outletInitials(outlet.name)}
                            </span>
                            <span className="min-w-0 flex-1">
                              <span className="block font-semibold text-foreground transition-smooth group-hover:text-primary">
                                {outlet.name}
                              </span>
                              <span className="block truncate text-xs text-muted-foreground">
                                {new URL(outlet.url).hostname.replace("www.", "")}
                              </span>
                            </span>
                            <ExternalLink
                              className="h-4 w-4 flex-shrink-0 text-muted-foreground transition-smooth group-hover:text-primary"
                              aria-hidden
                            />
                          </motion.a>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <section className="border-t border-border/50 bg-muted/40 py-16">
          <div className="container mx-auto px-6 text-center">
            <Reveal className="mb-10">
              <h2 className="mb-3 text-2xl font-bold text-primary sm:text-3xl">As Featured In</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Every outlet where MOAI&apos;s press releases have been published.
              </p>
            </Reveal>

            <motion.div
              className="flex flex-wrap justify-center gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[...new Map(allPressOutlets.map((o) => [o.name, o])).values()].map((outlet) => (
                <motion.a
                  key={outlet.url}
                  href={outlet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={staggerItem}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-smooth hover:border-primary/30 hover:bg-primary hover:text-white hover:shadow-sm"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {outlet.name}
                  <ExternalLink className="h-3.5 w-3.5 opacity-70" aria-hidden />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
        <Credits />
      </footer>
    </div>
  );
};

export default Press;
