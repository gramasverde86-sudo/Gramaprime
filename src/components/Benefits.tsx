import { Trophy, Tractor, Truck, UserCheck, Gift } from 'lucide-react';

const benefits = [
  {
    icon: Trophy,
    title: 'Qualidade Superior',
    description: 'Produção própria com controle rigoroso. Grama densa, saudável e livre de pragas.',
  },
  {
    icon: Tractor,
    title: 'Direto do Produtor',
    description: 'Sem intermediários = preços justos. Grama fresca e recém-colhida na entrega.',
  },
  {
    icon: Truck,
    title: 'Entrega Rápida',
    description: 'Logística eficiente. Sua grama chega no prazo e em perfeitas condições.',
  },
  {
    icon: UserCheck,
    title: 'Atendimento Especializado',
    description: 'Consultoria completa para escolher a grama ideal. Suporte antes, durante e após.',
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Diferenciais
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Por Que Escolher a Grama Prime?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Somos produtores apaixonados por qualidade. Cada metro de grama é cultivado 
            com cuidado para entregar o melhor para seu projeto.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="group text-center p-6 rounded-2xl bg-card border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-gradient-primary flex items-center justify-center transition-transform group-hover:scale-110">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Bonus - Guia de Plantio */}
        <div className="max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-accent p-6 md:p-8 text-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium text-accent-foreground mb-4">
                <Gift className="w-4 h-4" />
                Bônus Exclusivo
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-accent-foreground mb-2">
                Guia de Plantio Gratuito
              </h3>
              <p className="text-accent-foreground/90 max-w-md mx-auto">
                Em toda compra, você recebe nosso guia completo com dicas de plantio, cuidados e manutenção para sua grama ficar sempre perfeita!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
