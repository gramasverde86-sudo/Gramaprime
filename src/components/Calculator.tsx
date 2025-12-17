import { useState, useMemo } from 'react';
import { Calculator as CalcIcon, ArrowRight, Info } from 'lucide-react';

export default function Calculator() {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [grassType, setGrassType] = useState('esmeralda');

  const calculation = useMemo(() => {
    const l = parseFloat(length) || 0;
    const w = parseFloat(width) || 0;
    const area = l * w;
    const areaWithMargin = area * 1.1;
    
    return {
      area: area.toFixed(2),
      areaWithMargin: areaWithMargin.toFixed(2),
      isValid: area > 0,
      grassName: grassType === 'esmeralda' ? 'Esmeralda' : 'São Carlos',
    };
  }, [length, width, grassType]);

  return (
    <section className="section-padding bg-gradient-hero">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              <CalcIcon className="w-4 h-4" />
              Ferramenta Gratuita
            </span>
            <h2 className="heading-2 text-foreground mb-4">
              Calcule Quanto Você Precisa
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Descubra a quantidade ideal de grama e tenha uma estimativa de investimento.
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-card rounded-3xl p-6 md:p-10 border border-border shadow-card">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Comprimento (m)
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="Ex: 10"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Largura (m)
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="0.1"
                      placeholder="Ex: 8"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Tipo de Grama
                  </label>
                  <select
                    value={grassType}
                    onChange={(e) => setGrassType(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all appearance-none cursor-pointer"
                  >
                    <option value="esmeralda">🌟 Grama Esmeralda</option>
                    <option value="saocarlos">🌳 Grama São Carlos</option>
                  </select>
                </div>

                <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-xl">
                  <Info className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    Recomendamos adicionar 10% de margem para recortes e ajustes durante a instalação.
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="bg-muted/50 rounded-2xl p-6 space-y-4">
                <h3 className="font-semibold text-foreground mb-4">Resultado</h3>

                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Tipo selecionado</span>
                    <span className="font-semibold text-foreground">Grama {calculation.grassName}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border">
                    <span className="text-muted-foreground">Área total</span>
                    <span className="font-semibold text-foreground">{calculation.area} m²</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-muted-foreground">Área recomendada (+10%)</span>
                    <span className="font-bold text-primary text-lg">{calculation.areaWithMargin} m²</span>
                  </div>
                </div>

                <a
                  href="#contato"
                  className="btn-accent w-full mt-4"
                >
                  Solicitar Orçamento Detalhado
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
