import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'São Paulo, SP',
    rating: 5,
    text: 'Excelente qualidade! A grama chegou fresca e o resultado ficou lindo. O atendimento foi impecável do início ao fim. Recomendo muito!',
    avatar: 'MS',
  },
  {
    name: 'João Santos',
    location: 'Sorocaba, SP',
    rating: 5,
    text: 'Atendimento rápido e preço justo. A grama São Carlos se adaptou perfeitamente à sombra do meu quintal. Superou as expectativas!',
    avatar: 'JS',
  },
  {
    name: 'Construtora ABC',
    location: 'Campinas, SP',
    rating: 5,
    text: 'Parceria de confiança para nossos projetos. Entrega sempre pontual e qualidade garantida. Já realizamos mais de 10 projetos juntos.',
    avatar: 'CA',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Depoimentos
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            O Que Nossos Clientes Dizem
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-3xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card rounded-3xl p-8 md:p-10 border border-border shadow-card text-center">
                    <Quote className="w-10 h-10 text-primary/30 mx-auto mb-6" />

                    {/* Stars */}
                    <div className="flex justify-center gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>

                    {/* Author */}
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {testimonial.avatar}
                      </div>
                      <div className="text-left">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 bg-card border border-border rounded-full shadow-soft hover:shadow-card transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5 text-foreground" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 bg-card border border-border rounded-full shadow-soft hover:shadow-card transition-all"
            aria-label="Próximo"
          >
            <ChevronRight className="w-5 h-5 text-foreground" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrent(index);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === current ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Ir para depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
