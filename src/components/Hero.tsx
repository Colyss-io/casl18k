import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    productsSection?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{
    backgroundImage: `url(${heroBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text tracking-tight">Eleve Seu Estilo com  Casl18k</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Acessórios exclusivos criados para quem valoriza elegância.
          </p>
          <Button size="lg" onClick={scrollToProducts} className="bg-primary hover:bg-primary/90 hover-glow-green text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full group">
            Compre Agora
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Floating particles animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-float" style={{
        animationDelay: "0s"
      }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{
        animationDelay: "2s"
      }} />
        <div className="absolute bottom-1/3 left-1/2 w-2 h-2 bg-accent/40 rounded-full animate-float" style={{
        animationDelay: "4s"
      }} />
      </div>
    </section>;
};
export default Hero;