import { Star, TreeDeciduous, Sun, Footprints, Wrench, ArrowRight } from 'lucide-react';
import gramaEsmeralda from '@/assets/grama-esmeralda.jpg';
import gramaSaoCarlos from '@/assets/grama-sao-carlos.jpg';

const grassTypes = [
  {
    name: 'Grama Esmeralda',
    badge: { icon: Star, text: 'Mais Popular', color: 'bg-yellow-500' },
    image: gramaEsmeralda,
    description: 'Ideal para jardins residenciais, condomínios e playgrounds. Folhas finas, cor verde intenso, alta resistência ao sol e pisoteio.',
    characteristics: [
      { icon: Sun, text: 'Sol pleno' },
      { icon: Footprints, text: 'Pisoteio médio/alto' },
      { icon: Wrench, text: 'Baixa manutenção' },
    ],
  },
  {
    name: 'Grama São Carlos',
    badge: { icon: TreeDeciduous, text: 'Ideal para Sombra', color: 'bg-grass-700' },
    image: gramaSaoCarlos,
    description: 'Perfeita para áreas sombreadas sob árvores e muros. Folhas largas, cor verde vibrante, adaptação a meia-sombra.',
    characteristics: [
      { icon: TreeDeciduous, text: 'Meia-sombra' },
      { icon: Footprints, text: 'Pisoteio médio' },
      { icon: Wrench, text: 'Folhas largas' },
    ],
  },
];

export default function GrassTypes() {
  return (
    <section id="tipos" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Nossos Produtos
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Conheça Nossos Tipos de Grama
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos com as melhores variedades de grama para atender qualquer projeto, 
            do pequeno jardim ao grande empreendimento.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {grassTypes.map((grass, index) => (
            <article
              key={grass.name}
              className="group bg-card rounded-2xl overflow-hidden border border-border card-hover animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={grass.image}
                  alt={grass.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 ${grass.badge.color} text-primary-foreground rounded-full text-xs font-semibold`}>
                    <grass.badge.icon className="w-3.5 h-3.5" />
                    {grass.badge.text}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="heading-3 text-foreground mb-3">{grass.name}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {grass.description}
                </p>

                {/* Characteristics */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {grass.characteristics.map((char, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-muted text-muted-foreground rounded-lg text-xs font-medium"
                    >
                      <char.icon className="w-3.5 h-3.5" />
                      {char.text}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2 text-primary font-semibold text-sm group/link"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
