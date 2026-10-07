import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import SEOHead from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import {
  blurUp,
  hoverScale,
  softSpring,
  staggerContainer,
  tapPress,
} from "@/lib/motion";
import { RESERVATION_LINKS } from "@/lib/reservations";

const LocationKoramangala = () => {
  const canonical = "https://www.moaiveg.com/locations/koramangala";

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="MOAI Koramangala | Pure Veg Fine Dining Restaurant, Open Till 1 AM"
        description="MOAI Koramangala is a premium pure veg fine dining restaurant in Koramangala 5th Block. Global vegetarian cuisine, pizzas and pastas, cooked in cold-pressed oils. Open daily till 1 AM. Call 080 472 82414."
        canonical={canonical}
        ogType="restaurant"
        breadcrumbs={[
          { name: "Home", item: "https://www.moaiveg.com/" },
          { name: "Locations", item: "https://www.moaiveg.com/locations/koramangala" },
          { name: "Koramangala", item: canonical },
        ]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "MOAI Restaurant Koramangala",
          alternateName: "MOAI Koramangala 5th Block",
          url: canonical,
          image: ["https://www.moaiveg.com/og-image.jpg"],
          telephone: "+918047282414",
          priceRange: "₹₹₹",
          servesCuisine: [
            "Vegetarian",
            "Vegan",
            "Global",
            "Italian",
            "Pizza",
            "Pasta",
            "North Indian",
            "Biryani",
            "Desserts",
            "Fine Dining",
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress: "134, 17th Main Road, Koramangala 5th Block",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560095",
            addressCountry: "IN",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: 12.9352107,
            longitude: 77.6170736,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "12:00",
              closes: "16:00",
            },
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "18:30",
              closes: "01:00",
            },
          ],
          acceptsReservations: true,
          hasMenu: "https://www.moaiveg.com/menu",
          amenityFeature: [
            { "@type": "LocationFeatureSpecification", name: "Indoor Seating", value: true },
            { "@type": "LocationFeatureSpecification", name: "Vegetarian Only", value: true },
            { "@type": "LocationFeatureSpecification", name: "Takeaway", value: true },
            { "@type": "LocationFeatureSpecification", name: "Home Delivery", value: true },
            { "@type": "LocationFeatureSpecification", name: "Lunch", value: true },
            { "@type": "LocationFeatureSpecification", name: "Dinner", value: true },
          ],
          paymentAccepted: "Cash, Credit Card, UPI, Digital payments",
          currenciesAccepted: "INR",
          areaServed: [
            { "@type": "AdministrativeArea", name: "Koramangala" },
            { "@type": "AdministrativeArea", name: "Koramangala 5th Block" },
            { "@type": "City", name: "Bengaluru" },
          ],
        }}
      />

      <header>
        <Navigation />
      </header>

      <main id="main-content">
        <section className="pt-24 pb-12 bg-gradient-to-b from-primary/20 to-background">
          <motion.div
            className="container mx-auto px-6 text-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-primary mb-6 shimmer-text"
              variants={blurUp}
            >
              MOAI Koramangala
              <span className="block text-2xl md:text-3xl font-medium text-muted-foreground mt-4">
                Pure Veg Fine Dining Restaurant in Koramangala
              </span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              variants={blurUp}
            >
              Premium vegetarian fine dining in Koramangala 5th Block, open till 1 AM. Global
              vegetarian cuisine, pizzas, pastas, and North Indian favourites, all cooked in
              cold-pressed oils, for date nights, birthdays, and memorable family dining.
            </motion.p>
          </motion.div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8">
            <Card className="gradient-card border-border/50">
              <CardContent className="p-8 space-y-4">
                <h2 className="text-3xl font-bold text-primary">Address</h2>
                <p className="text-muted-foreground">
                  134, 17th Main Road, Koramangala 5th Block, Bengaluru, Karnataka 560095
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <motion.a
                    href={RESERVATION_LINKS.koramangala}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 rounded-lg font-medium"
                    whileHover={hoverScale}
                    whileTap={tapPress}
                    transition={softSpring}
                  >
                    Reserve a Table
                  </motion.a>
                  <motion.a
                    href="tel:08047282414"
                    className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-smooth"
                    whileHover={hoverScale}
                    whileTap={tapPress}
                    transition={softSpring}
                  >
                    Call: 080 472 82414
                  </motion.a>
                  <motion.a
                    href="https://maps.google.com/?q=134,+17th+Main+Road,+Koramangala+5th+Block,+Bengaluru+560095"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-primary text-primary px-5 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-smooth"
                    whileHover={hoverScale}
                    whileTap={tapPress}
                    transition={softSpring}
                  >
                    Get Directions
                  </motion.a>
                </div>
                <p className="text-sm text-muted-foreground pt-4">
                  Open daily: 12–4 PM and 6:30 PM–1 AM.
                </p>
                <p className="text-sm text-muted-foreground">
                  Approx. ₹2,000 for two · Lunch & dinner · Indoor seating · Takeaway & delivery
                </p>
              </CardContent>
            </Card>

            <Card className="gradient-card border-border/50 overflow-hidden">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps?q=134,+17th+Main+Road,+Koramangala+5th+Block,+Bengaluru+560095&z=17&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MOAI Restaurant Koramangala Location"
                />
              </div>
            </Card>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-r from-primary/5 to-[#FED6AB]/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center space-y-4">
              <h2 className="text-4xl font-bold text-primary">Best veg restaurant in Koramangala</h2>
              <p className="text-lg text-muted-foreground">
                Looking for the best places to eat in Koramangala? MOAI is a premium pure veg
                restaurant on 17th Main Road,{" "}
                <span className="font-medium text-foreground">Koramangala 5th Block</span>, serving
                gourmet vegetarian food in a serene, aesthetic setting. Also visit our flagship in{" "}
                <a href="/locations/jayanagar" className="font-medium text-primary underline-offset-2 hover:underline">
                  Jayanagar
                </a>
                .
              </p>
            </div>
            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 mt-12 text-left">
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Late night dining, open till 1 AM</h3>
                <p className="text-muted-foreground">
                  One of the few late night veg restaurants in Koramangala, MOAI serves dinner
                  every day until 1 AM, so a late meal never has to mean compromising on quality.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Global vegetarian cuisine</h3>
                <p className="text-muted-foreground">
                  From vegetarian pizza and pasta to veg starters, North Indian mains, and desserts,
                  every dish is cooked in cold-pressed oils.{" "}
                  <a href="/menu" className="font-medium text-primary underline-offset-2 hover:underline">
                    Explore our vegetarian menu
                  </a>
                  .
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-primary">Date nights, birthdays &amp; groups</h3>
                <p className="text-muted-foreground">
                  A romantic restaurant in Koramangala for couples, with room for family dinners,
                  birthday celebrations, and group dining on weekends and weeknights alike.
                </p>
              </div>
            </div>
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

export default LocationKoramangala;
