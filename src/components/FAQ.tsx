import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O ouro é real?",
    answer: "Sim! Todas as nossas peças apresentam autêntico banho de ouro 18K sobre uma base metálica premium. Isso garante a aparência e sensação luxuosa do ouro maciço por uma fração do custo, com durabilidade excepcional.",
  },
  {
    question: "Vocês fazem entregas em todo o Brasil?",
    answer: "Com certeza! Oferecemos entrega para todo o Brasil em todos os pedidos. Frete grátis para compras acima de R$ 500, e também oferecemos opções de entrega expressa para recebimento mais rápido.",
  },
  {
    question: "Qual é a política de devolução?",
    answer: "Queremos que você ame suas joias Casl18k. Oferecemos política de devolução de 30 dias em todos os itens. Se você não estiver completamente satisfeito, pode devolver sua compra para reembolso total ou troca.",
  },
  {
    question: "Como devo cuidar das minhas joias?",
    answer: "Para manter a beleza de suas joias banhadas a ouro 18K, evite contato com produtos químicos, perfumes e loções. Guarde as peças na caixa de joias fornecida quando não estiver usando, e limpe delicadamente com um pano macio.",
  },
  {
    question: "Vocês oferecem embalagem para presente?",
    answer: "Sim! Todas as nossas joias vêm em embalagem elegante pronta para presente sem custo adicional. Para ocasiões especiais, também oferecemos caixas de presente de luxo premium com mensagens personalizadas.",
  },
  {
    question: "Quais métodos de pagamento vocês aceitam?",
    answer: "Aceitamos todos os principais cartões de crédito (Visa, Mastercard, American Express), PIX, PayPal e carteiras digitais. Todas as transações são protegidas com criptografia padrão da indústria.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 gradient-luxury-text">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg">
            Tudo o que você precisa saber sobre a Casl18k
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6 hover-lift"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
