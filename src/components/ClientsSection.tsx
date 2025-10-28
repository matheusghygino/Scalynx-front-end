import { useState } from 'preact/hooks';

const cases = {
  fontes: {
    nome: 'Fontes & Fontes Cleaning',
    descricao:
      'Empresa familiar com mais de 10 anos de experiência em Seattle e região, oferecendo serviços residenciais e comerciais de limpeza com foco em qualidade, confiança e consistência.',
    ganhos: [
      'Integração com Google, Slack, E-mail e CRM',
      'Crescimento no Instagram com conteúdo local',
      'Campanhas com leads semanais em Seattle',
      'Landing pages otimizadas para conversão',
      'Relatórios mensais e automação via planilhas'
    ],
    site: 'https://www.fontesandfontescleaning.com/'
  },
  sga: {
    nome: 'FS Construction & Remodeling',
    descricao:
      'Com mais de 20 anos de experiência no setor, a FS Construction and Remodeling é reconhecida por fornecer serviços e projetos excepcionais aos seus clientes. Fornecendo dês de pequenos reparos e reformas até construções de casas do zero',
    ganhos: [
      'Melhoria no SEO e Google Meu Negócio',
      'Tráfego pago com campanhas sazonais',
      'Dashboards e relatórios automatizados',
      'Campanhas de e-mail e remarketing',
      'Integração com Google, slack, e-mail e WhatsApp'
    ],
    site: 'https://www.fsconstructionandremodeling/'
  }
};

export default function ClientsCases() {
  const [cliente, setCliente] = useState<'fontes' | 'sga'>('fontes');
  const dados = cases[cliente];

  return (
    <section class="py-24 bg-primary text-white" id='clientes'>
      <div class="max-w-6xl mx-auto px-6">
        <div class="flex justify-center mb-10 gap-4 flex-wrap">
          <button
            onClick={() => setCliente('fontes')}
            class={`px-5 py-2 rounded-full border font-semibold text-sm transition ${
              cliente === 'fontes'
                ? 'bg-secondary text-white border-secondary'
                : 'border-secondary text-secondary hover:bg-secondary/10'
            }`}
          >
            Fontes & Fontes Cleaning
          </button>
          <button
            onClick={() => setCliente('sga')}
            class={`px-5 py-2 rounded-full border font-semibold text-sm transition ${
              cliente === 'sga'
                ? 'bg-secondary text-white border-secondary'
                : 'border-secondary text-secondary hover:bg-secondary/10'
            }`}
          >
            SGA Imóveis
          </button>
        </div>

        <div class="flex flex-col md:flex-row gap-12 items-start border border-secondary/30 p-6 md:p-10 rounded-xl">
          {/* Esquerda */}
          <div class="md:w-1/2 space-y-6">
            <h3 class="text-2xl font-bold text-secondary underline underline-offset-4">
              {dados.nome}
            </h3>
            <p class="text-gray-200 text-base leading-relaxed">{dados.descricao}</p>
            <a
              href="#contato"
              class="inline-block mt-4 px-5 py-2 rounded border border-secondary text-secondary font-semibold text-sm hover:bg-secondary/10 transition"
            >
              Fale com a gente
            </a>
          </div>

          {/* Direita */}
          <div class="md:w-1/2 space-y-4">
            <ul class="list-disc list-inside space-y-2 text-gray-100">
              {dados.ganhos.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
            <a
              href={dados.site}
              target="_blank"
              class="inline-block text-sm text-secondary underline underline-offset-4 hover:text-secondary-hover mt-4"
            >
              Visitar site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
