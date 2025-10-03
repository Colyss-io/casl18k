const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-5xl font-bold mb-6 gradient-text">
            Nossa História
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Na Casl18k, acreditamos que o luxo deve ser acessível a todos. 
              Fundada no princípio de que artesanato excepcional não precisa vir 
              com um preço exorbitante, nos dedicamos a criar acessórios premium banhados 
              a ouro 18K que rivalizam com as marcas mais prestigiadas do mundo.
            </p>
            <p>
              Cada peça em nossa coleção é meticulosamente desenhada por mestres artesãos que 
              entendem que a verdadeira elegância está nos detalhes. Do corte preciso de nossas 
              pedras de esmeralda ao acabamento suave do nosso banho de ouro, cada elemento é 
              criado com perfeição.
            </p>
            <p className="text-xl font-semibold text-foreground italic">
              "O luxo deve ser acessível a todos."
            </p>
            <p>
              Não estamos apenas vendendo joias—estamos oferecendo um estilo de vida. Uma declaração. 
              Um compromisso com a qualidade que você pode ver, sentir e usar com orgulho todos os dias.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
