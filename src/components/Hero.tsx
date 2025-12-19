import { MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const badges = [
  { icon: CheckCircle, text: 'Entrega Rápida' },
  { icon: CheckCircle, text: 'Melhor Preço' },
  { icon: CheckCircle, text: 'Qualidade Garantida' },
];

const whatsappLink = 'https://wa.me/5515997447930?text=Olá! Visitei o site e gostaria de um orçamento.';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/50" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-3 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {badges.map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm"
              >
                <badge.icon className="w-4 h-4" />
                {badge.text}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1
            className="heading-1 text-white mb-6 animate-fade-in drop-shadow-lg"
            style={{ animationDelay: '0.2s' }}
          >
            Grama{' '}
            <span className="text-primary-400">Direto do Produtor</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl animate-fade-in drop-shadow"
            style={{ animationDelay: '0.3s' }}
          >
            Qualidade superior em Grama Esmeralda e São Carlos para seu projeto.
            Entrega rápida, preço justo e atendimento especializado.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            <a href="#contato" className="btn-accent text-base">
              Solicitar Orçamento Grátis
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-12 flex items-center gap-6 text-sm text-white/80 animate-fade-in"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-400">+5000</span>
              <span>Clientes<br />Satisfeitos</span>
            </div>
            <div className="w-px h-10 bg-white/30" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-400">15+</span>
              <span>Anos de<br />Experiência</span>
            </div>
            <div className="w-px h-10 bg-white/30 hidden sm:block" />
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-400">SP</span>
              <span>Entrega em<br />todo Estado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
