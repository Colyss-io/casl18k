import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import pulseira from "@/assets/cordao-cruz.webp"
import pulseira_feminina from "@/assets/pulseira-feminina-cadeado.jpg"
import cordao_grumet from "@/assets/cordao-grumet.webp"
import pulseira_grumet_laminado from "@/assets/pulseira-grumet-laminado.webp"

const products = [
  {
    id: 1,
    name: "Cordão Cruz Pingente",
    description: "Cordão masculino com pingente de cruz, banhado a ouro 18K. Estilo marcante e acabamento sofisticado para qualquer ocasião.",
    price: "R$ 215",
    image: pulseira,
  },
  {
    id: 2,
    name: "Cordão Grumet",
    description: "Cordão modelo grumet banhado a ouro 18K. Clássico, resistente e elegante, ideal para destacar seu estilo em qualquer ocasião.",
    price: "R$ 190",
    image: cordao_grumet,
  },
  {
    id: 3,
    name: "Pulseira Feminina",
    description: "Pulseira feminina modelo cadeado banhada a ouro 18K. Um toque delicado e moderno que realça sua beleza no dia a dia.",
    price: "R$ 140",
    image: pulseira_feminina,
  },
  {
    id: 4,
    name: "Pulseira Grumet",
    description: "Pulseira modelo grumet banhada a ouro 18K. Design clássico e versátil que combina com qualquer estilo.",
    price: "R$ 150",
    image: pulseira_grumet_laminado,
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
                    <a href="https://casl-18-k.rdi.store">Comprar</a>
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
            <a href="https://casl-18-k.rdi.store">Ver Coleção Completa</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
