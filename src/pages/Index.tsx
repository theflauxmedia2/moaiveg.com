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
        title="MOAI | Pure Veg Fine Dining Restaurant in Koramangala & Jayanagar, Bangalore"
        description="MOAI is a premium pure vegetarian fine dining restaurant in Koramangala and Jayanagar, Bangalore. Global vegetarian cuisine, pizzas and pastas, all cooked in cold-pressed oils. Koramangala open till 1 AM."
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
