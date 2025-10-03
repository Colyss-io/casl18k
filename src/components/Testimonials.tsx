import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana M.",
    role: "Blogueira de Moda",
    content: "A Casl18k transformou meu estilo. O colar é premium e elegante. Recebo elogios onde quer que eu vá!",
    rating: 5,
  },
  {
    name: "Marcus R.",
    role: "Empresário",
    content: "Qualidade excepcional por um preço incrível. O anel é assunto em todas as reuniões.",
    rating: 5,
  },
  {
    name: "Sofia L.",
    role: "Professora",
    content: "Peças atemporais que elevam qualquer look. A atenção aos detalhes é notável. Vale cada centavo.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 gradient-text">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Junte-se a milhares de clientes satisfeitos que elevaram seu estilo com a Casl18k
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="bg-card border-border p-8 hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-primary">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
