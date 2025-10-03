import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    productsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-32 bg-background relative overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-6xl md:text-7xl font-bold mb-6 gradient-luxury-text animate-fade-in-up">
          Pronto para Brilhar com a Casl18k?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Junte-se a milhares de clientes satisfeitos que escolheram elegância e qualidade
        </p>
        <Button 
          size="lg"
          onClick={scrollToProducts}
          className="bg-primary hover:bg-primary/90 hover-glow-green text-primary-foreground font-semibold px-12 py-7 text-xl rounded-full group"
        >
          Explorar Coleções
          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTA;
