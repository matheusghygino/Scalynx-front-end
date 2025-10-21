// src/components/PlanosFlexiveis.tsx
import { useState } from 'preact/hooks';
import  PlanoTabs from './PlanoTabs';
import TipoPagamentoSelector from './TipoPagamentoSelector';
import CardsServicos from './CardsServicos';
import CardsPacotes from './CardsPacotes';
import BotaoToggleDesconto from './BotaoToggleDesconto';

export default function PlanosFlexiveis() {
  const [aba, setAba] = useState<'modular' | 'pacotes'>('modular');
  const [tipo, setTipo] = useState<'mensal' | 'semestral' | 'anual'>('mensal');

  return (
    <section class="py-24 bg-white" id="pacotes" >
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-title text-primary mb-10 text-center">Soluções Flexíveis</h2>
        <PlanoTabs aba={aba} setAba={setAba} />
        <div class="mt-8">
          {aba === 'modular' ? (
            <>
              <CardsServicos />
              <div class="text-center md:mt-8">
                <a href="#contato" class="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-primary-dark transition">
                  Entre em contato
                </a>
              </div>
            </>
          ) : (
            <>
              <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <TipoPagamentoSelector tipo={tipo} setTipo={setTipo} />
              </div>
              <CardsPacotes tipoPagamento={tipo} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}
