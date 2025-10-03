import { Award, DollarSign, Clock } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Banhado a ouro 18K, feito para durar uma vida inteira",
  },
  {
    icon: DollarSign,
    title: "Luxo Acessível",
    description: "Luxo sem o preço exorbitante",
  },
  {
    icon: Clock,
    title: "Design Atemporal",
    description: "Peças que nunca saem de moda",
  },
];

const ValueProps = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={value.title} 
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-primary/10 hover-glow-green transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-foreground">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-lg">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
