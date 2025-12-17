import { useState } from 'react';
import { Send, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const grassOptions = [
  { value: '', label: 'Selecione o tipo de grama' },
  { value: 'esmeralda', label: 'Grama Esmeralda' },
  { value: 'saocarlos', label: 'Grama São Carlos' },
  { value: 'naosei', label: 'Não sei / Preciso de ajuda' },
];

const projectOptions = [
  { value: '', label: 'Selecione o tipo de projeto' },
  { value: 'residencial', label: 'Residencial' },
  { value: 'condominio', label: 'Condomínio' },
  { value: 'comercial', label: 'Comercial' },
  { value: 'esportivo', label: 'Esportivo' },
  { value: 'obra', label: 'Obra / Construção' },
  { value: 'outro', label: 'Outro' },
];

const whatsappLink = 'https://wa.me/5515997447930?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20fazer%20um%20or%C3%A7amento!';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mdkgeopp', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        toast({
          title: 'Orçamento enviado com sucesso!',
          description: 'Entraremos em contato em até 2 horas úteis.',
        });
      } else {
        throw new Error('Erro ao enviar');
      }
    } catch (error) {
      toast({
        title: 'Erro ao enviar',
        description: 'Por favor, tente novamente ou entre em contato pelo WhatsApp.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contato" className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-card rounded-3xl p-10 border border-border shadow-card animate-scale-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h2 className="heading-2 text-foreground mb-4">
                Orçamento Enviado!
              </h2>
              <p className="text-muted-foreground mb-6">
                Recebemos sua solicitação e entraremos em contato em até 2 horas úteis.
              </p>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                Falar agora no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contato" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Orçamento
          </span>
          <h2 className="heading-2 text-foreground mb-4">
            Solicite Seu Orçamento Grátis
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Resposta em até 2 horas úteis. Preencha o formulário abaixo ou fale conosco no WhatsApp.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-3xl p-6 md:p-10 border border-border shadow-card"
          >
            <div className="grid md:grid-cols-2 gap-5">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  required
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  required
                  placeholder="(00) 00000-0000"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Tipo de Grama */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Grama *
                </label>
                <select
                  name="tipo_grama"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer"
                >
                  {grassOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Área */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Área aproximada (m²) *
                </label>
                <input
                  type="text"
                  name="area"
                  required
                  placeholder="Ex: 100"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Cidade/CEP */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Cidade / CEP *
                </label>
                <input
                  type="text"
                  name="cidade"
                  required
                  placeholder="Ex: São Paulo ou 00000-000"
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                />
              </div>

              {/* Tipo de Projeto */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Projeto *
                </label>
                <select
                  name="tipo_projeto"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer"
                >
                  {projectOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensagem */}
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Mensagem (opcional)
                </label>
                <textarea
                  name="mensagem"
                  rows={4}
                  placeholder="Conte mais sobre seu projeto, dúvidas ou observações..."
                  className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="md:col-span-2">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="whatsapp_promo"
                    value="sim"
                    className="w-5 h-5 rounded border-input text-primary focus:ring-primary cursor-pointer"
                  />
                  <span className="text-sm text-muted-foreground">
                    Quero receber promoções e dicas pelo WhatsApp
                  </span>
                </label>
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-accent flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Enviar Pedido de Orçamento
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-6">
              Prefere rapidez?{' '}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] font-medium hover:underline"
              >
                Fale conosco direto no WhatsApp
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
