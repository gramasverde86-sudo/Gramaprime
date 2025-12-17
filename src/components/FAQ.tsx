import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Qual a diferença entre os tipos de grama?',
    answer: 'A Esmeralda tem folhas finas e cor vibrante, ideal para jardins residenciais. A Batatais é mais rústica e econômica, perfeita para grandes áreas. Já a São Carlos adapta-se bem à sombra, indicada para locais com menos incidência de sol.',
  },
  {
    question: 'Como calcular a quantidade necessária?',
    answer: 'Meça o comprimento x largura da área para obter os metros quadrados. Recomendamos adicionar 10% de margem para recortes. Use nossa calculadora acima ou envie as medidas e calculamos para você.',
  },
  {
    question: 'Vocês entregam na minha cidade?',
    answer: 'Atendemos toda a região de São Paulo, incluindo capital, grande SP e interior (Sorocaba, Campinas, Jundiaí, Itu e região). Consulte-nos para outras localidades.',
  },
  {
    question: 'Qual o custo do frete?',
    answer: 'O frete varia conforme a distância e quantidade. Solicite um orçamento personalizado para saber o valor exato.',
  },
  {
    question: 'Vocês fazem instalação/plantio?',
    answer: 'Nosso foco é a produção e entrega da grama. Porém, podemos indicar profissionais parceiros para a instalação. A grama chega em placas/tapetes prontos para plantar.',
  },
  {
    question: 'Quais cuidados após o plantio?',
    answer: 'Irrigação abundante nos primeiros 15 dias (2-3x ao dia), evitar pisoteio no primeiro mês, e primeira poda após 30 dias. Enviamos um guia completo de cuidados junto com o pedido.',
  },
  {
    question: 'Quanto tempo leva para a grama "pegar"?',
    answer: 'Com os cuidados corretos, a grama inicia o enraizamento em 7-10 dias. O fechamento completo ocorre em 30-45 dias, dependendo das condições climáticas e irrigação.',
  },
  {
    question: 'Tem garantia?',
    answer: 'Garantimos a qualidade da grama no momento da entrega. Se houver qualquer problema, entre em contato imediatamente. Após o plantio, o sucesso depende dos cuidados seguindo nossas orientações.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Dúvidas
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos produtos e serviços.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-4 h-4 text-primary" />
                  ) : (
                    <Plus className="w-4 h-4 text-primary" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
