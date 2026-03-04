// src/components/ComoTrabalhamos.tsx

import { h } from "preact";
import { useState } from "preact/hooks";
import type { ImageMetadata } from "astro";

import estrategia from "../../assets/content-strategy.jpg";
import performance from "../../assets/performance.jpg";
import automacao from "../../assets/automacao.jpg";

type Tab = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: ImageMetadata;
  alt: string;
};

const tabs: Tab[] = [
  {
    id: "infraestrutura",
    titulo: "Infraestrutura Digital",
    descricao:
      "Desenvolvemos site de alta performance (90+ PageSpeed), e-mail profissional, CRM personalizado e workspace completo com armazenamento em nuvem.",
    imagem: estrategia,
    alt: "Infraestrutura digital",
  },
  {
    id: "crescimento",
    titulo: "Crescimento e Performance",
    descricao:
      "Gestão de tráfego pago (Google & Meta Ads), redes sociais, campanhas de e-mail marketing e geração contínua de leads.",
    imagem: performance,
    alt: "Crescimento e performance",
  },
  {
    id: "operacao",
    titulo: "Operação e Automação",
    descricao:
      "Automação via n8n, integração com WhatsApp, Instagram, Facebook e e-mail, CRM inteligente e dashboards estratégicos.",
    imagem: automacao,
    alt: "Automação e integração",
  },
];

export default function ComoTrabalhamos() {
  const [ativo, setAtivo] = useState<string>("infraestrutura");

  const atual = tabs.find((t) => t.id === ativo) ?? tabs[0];

  return (
    <section id="metodologia" class="py-24 bg-gray-50">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Tabs */}
        <div>
          <h2 class="text-3xl md:text-4xl font-title text-primary mb-6">
            Ecossistema Scalyns
          </h2>

          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setAtivo(tab.id)}
              class={`block w-full text-left p-5 mb-4 rounded-md transition ${
                ativo === tab.id
                  ? "border-l-4 border-primary bg-gray-50"
                  : "hover:bg-gray-100 cursor-pointer"
              }`}
            >
              <h3 class="font-title text-xl text-primary mb-1">
                {tab.titulo}
              </h3>
              <p class="text-gray-600 text-sm">{tab.descricao}</p>
            </button>
          ))}
        </div>

        {/* Imagem */}
        <div class="relative">
          <img
            key={atual.id}
            src={atual.imagem.src}
            width={atual.imagem.width}
            height={atual.imagem.height}
            alt={atual.alt}
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            sizes="(max-width: 768px) 100vw, 600px"
            class="rounded-lg shadow-xl w-full h-auto object-cover transition-opacity duration-300"
          />
        </div>
      </div>
    </section>
  );
}