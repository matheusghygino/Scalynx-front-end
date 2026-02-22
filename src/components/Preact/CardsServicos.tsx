import Flicking from "@egjs/preact-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/preact-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { servicos } from "./data.ts";

const CardsServicos = () => (
  <>
    {/* MOBILE — 1 card principal + preview do próximo */}
    <div class="md:hidden pl-4">
      <Flicking
        circular={true}
        panelsPerView="auto"
        gap={16}
        plugins={[
          new AutoPlay({
            duration: 4000,
            direction: "NEXT",
            stopOnHover: true,
          }),
        ]}
      >
        {servicos.map((s, i) => (
          <div
            key={i}
            class="
          w-[85%]
          shrink-0
          rounded-xl
          border border-white/10
          bg-white/5
          backdrop-blur-md
          p-6
          shadow-lg
          transition-all duration-300
        "
          >
            <h3 class="text-lg font-semibold mb-3 text-white">
              {s.titulo}
            </h3>
            <p class="text-sm text-white/80 leading-relaxed">
              {s.descricao}
            </p>
          </div>
        ))}
      </Flicking>
    </div>

    {/* DESKTOP — grid com efeito hover premium */}
    <div class="hidden md:grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {servicos.map((s, i) => (
        <div
          key={i}
          class="
            group
            rounded-xl
            border border-white/10
            bg-white/5
            backdrop-blur-md
            p-8
            text-left
            transition-all duration-300
            hover:border-primary
            hover:bg-white/10
            hover:-translate-y-2
            hover:shadow-2xl
          "
        >
          <h3 class="text-lg font-semibold mb-3 text-white group-hover:text-primary transition">
            {s.titulo}
          </h3>

          <p class="text-sm text-white/80 leading-relaxed">
            {s.descricao}
          </p>
        </div>
      ))}
    </div>
  </>
);

export default CardsServicos;