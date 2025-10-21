import Flicking from "@egjs/preact-flicking";
import { AutoPlay } from "@egjs/flicking-plugins";
import "@egjs/preact-flicking/dist/flicking.css";
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { servicos } from "./data.ts";

const CardsServicos = () => (
  <>
    {/* MOBILE: 2 cards por slide vertical, autoplay */}
    <div class="md:hidden h-[calc(260px+16px)] overflow-hidden">
      <Flicking
        circular={true}
        panelsPerView={2}
        gap={16}
        plugins={[new AutoPlay({ duration: 3000, direction: "NEXT", stopOnHover: true })]}
        class="h-full"
      >
        {servicos.map((s, i) => (
          <div key={i} class="panel mx-2 border w-full bg-white rounded-lg shadow-md p-6 h-[260px]">
            <h3 class="text-lg font-bold text-primary mb-2">{s.titulo}</h3>
            <p class="text-gray-600 text-sm">{s.descricao}</p>
          </div>
        ))}
      </Flicking>
    </div>

    {/* DESKTOP: grade padrão */}
    <div class="hidden md:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {servicos.map((s, i) => (
        <div key={i} class="bg-white rounded-lg shadow-md p-6 text-left">
          <h3 class="text-lg font-bold text-primary mb-2">{s.titulo}</h3>
          <p class="text-gray-600 text-sm">{s.descricao}</p>
        </div>
      ))}
    </div>
  </>
);

export default CardsServicos;
