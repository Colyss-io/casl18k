import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import necklace from "@/assets/necklace.jpg";
import ring from "@/assets/ring.jpg";
import bracelet from "@/assets/bracelet.jpg";
import earrings from "@/assets/earrings.jpg";

const products = [
  {
    id: 1,
    name: "Colar Elegância Esmeralda",
    description: "Banhado a ouro 18K com pedras de esmeralda genuínas",
    price: "R$ 1.499",
    image: necklace,
  },
  {
    id: 2,
    name: "Anel Luxo Diamante",
    description: "Ouro 18K premium com diamantes de corte brilhante",
    price: "R$ 1.249",
    image: ring,
  },
  {
    id: 3,
    name: "Pulseira Corrente Real",
    description: "Pulseira artesanal em ouro 18K com detalhes em esmeralda",
    price: "R$ 999",
    image: bracelet,
  },
  {
    id: 4,
    name: "Brincos Cascata",
    description: "Elegantes brincos em ouro 18K com pingentes de esmeralda",
    price: "R$ 899",
    image: earrings,
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-4 gradient-luxury-text">
            Coleção em Destaque
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Descubra nossa seleção especial de acessórios premium em ouro 18K
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="bg-card border-border overflow-hidden hover-lift group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    {product.price}
                  </span>
                  <Button 
                    size="sm" 
                    className="bg-primary hover:bg-primary/90 hover-glow-green text-primary-foreground rounded-full"
                  >
                    Comprar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full px-8"
          >
            Ver Coleção Completa
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
