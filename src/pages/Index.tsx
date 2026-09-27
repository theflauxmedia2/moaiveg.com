import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Menu from "@/components/Menu";
import Experience from "@/components/Experience";
import Testimonials from "@/components/Testimonials";
import PressReleases from "@/components/PressReleases";
import Reservation from "@/components/Reservation";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Credits from "@/components/Credits";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="MOAI Restaurant | Vegetarian Fine Dining in Jayanagar & Koramangala, Bangalore"
        description="Premium pure vegetarian fine dining in Jayanagar and Koramangala 5th Block, Bangalore. Vegan-friendly for families, couples, birthdays, and corporate groups."
        canonical="https://www.moaiveg.com/"
        ogType="restaurant"
      />
      <header>
        <Navigation />
      </header>
      <main id="main-content">
        <Hero />
        <Philosophy />
        <Menu />
        <Experience />
        <Testimonials />
        <PressReleases />
        <Reservation />
        <FAQ />
      </main>
      <footer>
        <Footer />
        <Credits />
      </footer>
    </div>
  );
};

export default Index;
