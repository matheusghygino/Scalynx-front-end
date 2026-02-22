// src/components/PlanosFlexiveis.tsx
import CardsServicos from './CardsServicos';

export default function ArquiteturaModular() {
  return (
    <section class="py-24" id="ecossistema">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-title mb-6 text-center">
          Ecossistema Digital Scalyns
        </h2>

        <p class="text-center max-w-3xl mx-auto mb-6 text-lg">
          Não entregamos serviços isolados.
          Construímos um sistema completo para sua empresa operar,
          vender e se posicionar com estrutura. Desenvolvemos desde a base tecnológica até
          presença estratégica de marca
        </p>

        <CardsServicos />

        <div class="text-center mt-12">
          <a
            href="#contato"
            class="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition"
          >
            Construir minha estrutura digital
          </a>
        </div>
      </div>
    </section>
  );
}