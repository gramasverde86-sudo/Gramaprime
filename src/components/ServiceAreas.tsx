import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Cobertura
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Regiões de Atendimento
          </h2>
        </div>

        {/* Main message */}
        <div className="text-center bg-card rounded-2xl p-8 md:p-12 max-w-2xl mx-auto border border-border shadow-soft">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <MapPin className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4">
            Atendemos todo o Estado de São Paulo!
          </h3>
          <p className="text-muted-foreground mb-6">
            Entre em contato para verificar a disponibilidade de entrega na sua região.
          </p>
          <a 
            href="#contato" 
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
