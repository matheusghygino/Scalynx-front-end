// src/components/PlanosFlexiveis/CardsPacotes.tsx
import type { FunctionalComponent } from 'preact';
import { pacotes } from './data';

interface Props {
  tipoPagamento: 'mensal' | 'semestral' | 'anual';
}

const CardsPacotes: FunctionalComponent<Props> = ({ tipoPagamento }) => {
  return (
    <>
      <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <div class="flex gap-2">
          <span class="bg-blue-100 text-surface text-xs font-semibold px-3 py-1 rounded-full">
            Promoção: 10% OFF no semestral, 20% OFF no anual
          </span>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {pacotes.map((p, index) => {
          let precoFinal = p.preco;
          let descontoLabel = '';

          if (tipoPagamento === 'semestral') {
            precoFinal = Math.round(p.preco * 0.9);
            descontoLabel = '10% OFF';
          } else if (tipoPagamento === 'anual') {
            precoFinal = Math.round(p.preco * 0.8);
            descontoLabel = '20% OFF';
          }

          const mostrarPreco = p.titulo !== 'Enterprise';
          const destaque = index === 2; // Terceiro card (0-based index)

          return (
            <div
              class={`rounded-lg p-6 text-left shadow-md transition-transform duration-300 flex flex-col justify-between ${
                destaque
                  ? 'bg-gradient-to-b from-primary/10 to-white border border-[#0063F6]/30 scale-[1.02]'
                  : 'bg-white'
              }`}
            >
              <div>
                <h3 class="text-xl font-bold text-primary mb-1">{p.titulo}</h3>
                <p class="text-sm text-gray-600 mb-4">{p.publicoAlvo}</p>

                {mostrarPreco ? (
                  <div class="flex items-center justify-start gap-2 mb-4">
                    <p class="text-2xl font-bold text-surface">R$ {precoFinal}/mês</p>
                    {descontoLabel && (
                      <span class="bg-green-100 text-green-600 text-xs font-semibold px-2 py-0.5 rounded-full">
                        {descontoLabel}
                      </span>
                    )}
                  </div>
                ) : (
                  <p class="text-2xl font-bold text-surface mb-4">CUSTOM</p>
                )}

                <a
                  href="#contato"
                  class={`mt-auto w-full text-center px-4 py-2 rounded border font-semibold text-sm transition ${
                    destaque
                      ? 'bg-primary text-white border-primary hover:bg-blue-700'
                      : 'border-primary text-primary hover:bg-blue-50'
                  }`}
                >
                  {p.titulo === 'Enterprise' ? 'Contatar vendas' : 'Escolher plano'}
                </a>

                <ul class="text-sm text-gray-700 my-6 list-disc list-inside space-y-1">
                  {p.beneficios.map((b) => (
                    <li>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default CardsPacotes;
