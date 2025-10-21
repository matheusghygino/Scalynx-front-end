// src/components/ComoTrabalhamos.tsx
import { h } from 'preact';
import { useState } from 'preact/hooks';
import type { ImageMetadata } from 'astro';
import estrategia from '../../assets/content-strategy.jpg';
import performance from '../../assets/performance.jpg';
import automacao from '../../assets/automacao.jpg';

type Tab = {
  id: string;
  titulo: string;
  descricao: string;
  imagem: ImageMetadata;
  alt: string;
};

const tabs: Tab[] = [
  {
    id: 'estrategia',
    titulo: 'Estratégia + Conteúdo',
    descricao: 'Unimos branding, posicionamento e criação de conteúdo estratégico para gerar valor real.',
    imagem: estrategia,
    alt: 'Conteúdo estratégico'
  },
  {
    id: 'performance',
    titulo: 'Performance + Anúncios',
    descricao: 'Rodamos campanhas otimizadas no Google, Instagram e Facebook com foco em conversão.',
    imagem: performance,
    alt: 'Performance de anúncios'
  },
  {
    id: 'automacao',
    titulo: 'Automação + Inteligência',
    descricao: 'Automatizamos seu funil com ferramentas como n8n, CRM, e tracking avançado com dashboards.',
    imagem: automacao,
    alt: 'Automação e inteligência'
  },
];

export default function ComoTrabalhamos() {
  const [ativo, setAtivo] = useState<string>('estrategia');
  const atual = tabs.find((t) => t.id === ativo)!;

  return (
    <section id="metodologia" class="py-24 bg-white">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Tabs */}
        <div>
          <h2 class="text-3xl md:text-4xl font-title text-primary mb-6">Como Trabalhamos</h2>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setAtivo(tab.id)}
              class={`block w-full text-left p-5 mb-4 rounded-md transition ${
                ativo === tab.id
                  ? 'border-l-4 border-primary bg-gray-50'
                  : 'hover:bg-gray-100 hover:cursor-pointer'
              }`}
            >
              <h3 class="font-title text-xl text-primary mb-1">{tab.titulo}</h3>
              <p class="text-gray-600 text-sm">{tab.descricao}</p>
            </button>
          ))}
        </div>

        {/* Imagem */}
        <div>
          <img
            src={atual.imagem.src}
            width={atual.imagem.width}
            height={atual.imagem.height}
            alt={atual.alt}
            class="rounded-lg shadow-xl w-full h-auto transition-opacity duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
