import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import projetoEsmeralda from '@/assets/projeto-esmeralda.jpg';
import chacaraEsmeralda from '@/assets/chacara-esmeralda.jpg';
import projetoSaoCarlos from '@/assets/projeto-sao-carlos.jpg';

const projects = [
  {
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=800&q=80',
    title: 'Jardim Residencial',
    grass: 'Esmeralda',
  },
  {
    image: projetoEsmeralda,
    title: 'Pallete de Esmeralda',
    grass: 'Esmeralda',
  },
  {
    image: 'https://images.unsplash.com/photo-1459865264687-595d652de67e?w=800&q=80',
    title: 'Campo de Futebol',
    grass: 'Esmeralda',
  },
  {
    image: 'https://images.unsplash.com/photo-1560749003-f4b1e17e2dff?w=800&q=80',
    title: 'Playground',
    grass: 'Esmeralda',
  },
  {
    image: projetoSaoCarlos,
    title: 'Área Residencial',
    grass: 'Esmeralda',
  },
  {
    image: chacaraEsmeralda,
    title: 'Chácara',
    grass: 'Esmeralda',
  },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const nextImage = () => setLightboxIndex((prev) => (prev !== null ? (prev + 1) % projects.length : null));
  const prevImage = () => setLightboxIndex((prev) => (prev !== null ? (prev - 1 + projects.length) % projects.length : null));

  return (
    <section id="galeria" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Portfólio
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Projetos Realizados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja alguns dos projetos que transformamos com nossas gramas de qualidade.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-semibold">{project.title}</p>
                <span className="inline-block mt-1 px-2 py-0.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                  {project.grass}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 p-2 text-primary-foreground hover:bg-primary-foreground/10 rounded-full transition-colors"
            aria-label="Próximo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[80vh]">
            <img
              src={projects[lightboxIndex].image}
              alt={projects[lightboxIndex].title}
              className="max-w-full max-h-[70vh] object-contain rounded-xl"
            />
            <div className="text-center mt-4">
              <p className="text-primary-foreground text-lg font-semibold">
                {projects[lightboxIndex].title}
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full">
                Grama {projects[lightboxIndex].grass}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
