import { ClipboardList, MessageSquare, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Solicite',
    description: 'Preencha o formulário ou envie mensagem no WhatsApp com as informações do seu projeto.',
    cta: {
      form: { text: 'Formulário', href: '#contato' },
      whatsapp: { text: 'WhatsApp', href: 'https://wa.me/5515997447930' },
    },
  },
  {
    icon: MessageSquare,
    number: '02',
    title: 'Consultoria',
    description: 'Nossa equipe analisa, tira dúvidas e oferece a melhor solução para seu projeto.',
    cta: null,
  },
  {
    icon: CheckCircle,
    number: '03',
    title: 'Receba',
    description: 'Agendamos a entrega da sua grama fresca na data combinada, pronta para o plantio.',
    cta: null,
  },
];

export default function HowItWorks() {
  return (
    <section id="como-funciona" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Processo Simples
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Como Funciona? É Simples e Rápido
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Em apenas 3 passos, você tem a grama ideal entregue no seu projeto.
          </p>
        </div>

        {/* Steps */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-2/3 h-0.5 bg-border" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Icon */}
                <div className="relative z-10 w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
                  <step.icon className="w-9 h-9 text-primary-foreground" />
                </div>

                {/* Number Badge */}
                <span className="absolute top-0 left-1/2 translate-x-6 -translate-y-2 px-2 py-0.5 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                  {step.number}
                </span>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{step.description}</p>

                {/* CTAs */}
                {step.cta && (
                  <div className="flex justify-center gap-3">
                    <a
                      href={step.cta.form.href}
                      className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                    >
                      {step.cta.form.text}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <span className="text-muted-foreground">|</span>
                    <a
                      href={step.cta.whatsapp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium text-[#25D366] hover:underline"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      {step.cta.whatsapp.text}
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
