import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import ValueProps from "@/components/ValueProps";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductGrid />
      <ValueProps />
      <Testimonials />
      <div id="about">
        <About />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
