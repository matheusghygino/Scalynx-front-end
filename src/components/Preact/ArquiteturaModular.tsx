// src/components/PlanosFlexiveis.tsx
import CardsServicos from './CardsServicos';

export default function ArquiteturaModular() {
  return (
    <section class="py-24" id="ecossistema">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-3xl md:text-4xl font-title mb-6 text-center">
          Arquitetura Digital Modular
        </h2>

        <p class="text-center max-w-3xl mx-auto mb-12 text-lg">
          Cada empresa possui uma necessidade diferente.
          Por isso desenvolvemos um ecossistema digital personalizado,
          conectando infraestrutura, marketing e operação em um único ambiente.
        </p>

        <CardsServicos />

        <div class="text-center mt-12">
          <a
            href="#contato"
            class="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary transition"
          >
            Solicitar Diagnóstico Estratégico
          </a>
        </div>
      </div>
    </section>
  );
}
