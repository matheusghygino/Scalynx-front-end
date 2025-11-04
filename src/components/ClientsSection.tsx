import { useState } from 'preact/hooks';

const cases = {
  jsm: {
    nome: 'JSM Cleaning Solutions',
    descricao: `
      A JSM Cleaning Solutions é uma empresa de limpeza residencial e comercial com mais de 7 anos de atuação em Massachusetts e Rhode Island. 
      Com a Scalyns, a marca saiu de um site sem resultados para uma operação digital completa — hoje gera mais de 50 leads por mês, 
      com cerca de 20% vindos de forma orgânica. Implementamos campanhas de tráfego pago, CRM integrado, automações e relatórios com foco em crescimento previsível.
    `,
    ganhos: [
      'Mais de 50 leads mensais (20% orgânicos)',
      'Novo site com alta taxa de conversão',
      'Campanhas de tráfego pago e remarketing',
      'Integração CRM + Slack + E-mail + automações',
      'Campanhas de e-mail marketing e NPS',
      'Relatórios mensais com KPIs de crescimento',
      'PageSpeed 90+ (Core Web Vitals)',
      'Geração contínua de leads com otimização mensal',
      'Fluxo NPS automatizado integrado ao CRM'
    ],
    site: 'https://www.jsmcleaningsolutions.com/'
  },

  sga: {
    nome: 'FS Construction & Remodeling',
    descricao: `
      A FS Construction & Remodeling é referência em reformas e construções residenciais em Massachusetts. 
      Antes da Scalyns, o site era lento e não gerava leads. 
      Após o redesign e a primeira campanha no Google Ads, o site alcançou nota 90+ no PageSpeed e gerou 20 leads apenas em outubro. 
      Também ampliamos significativamente o alcance orgânico no Instagram, passando de cerca de 8 mil para mais de 100 mil visualizações mensais em apenas 3 meses.
    `,
    ganhos: [
      'Site 90+ no PageSpeed (antes, site lento e ineficiente)',
      '20 leads gerados no primeiro mês de campanha',
      'Crescimento no Instagram: +100 mil visualizações/mês',
      'Tráfego pago no Google e campanhas sazonais',
      'Integração com E-mail e Slack',
      'Automação de relatórios e acompanhamento',
      'Reestruturação completa do funil de conversão',
      'Dashboard de métricas e performance integrado'
    ],
    site: 'https://www.fsconstructionandremodeling/',
    instagram: 'https://www.instagram.com/fsconstructionandremodeling/'
  }
} as const;

export default function ClientsCases() {
  const [cliente, setCliente] = useState<'jsm' | 'sga'>('jsm');
  const dados = cases[cliente];

  return (
    <section class="py-24 bg-surface text-white" id="clientes">
      <div class="max-w-6xl mx-auto px-6">
        {/* Aba de seleção */}
        <div class="flex justify-center mb-10 gap-4 flex-wrap">
          <button
            onClick={() => setCliente('jsm')}
            class={`px-5 py-2 rounded-full border font-semibold text-sm transition
              ${cliente === 'jsm'
                ? 'bg-secondary text-white border-secondary'
                : 'border-t-secondary/50 text-t-primary hover:bg-white/5'
              }`}
          >
            JSM Cleaning Solutions
          </button>

          <button
            onClick={() => setCliente('sga')}
            class={`px-5 py-2 rounded-full border font-semibold text-sm transition
              ${cliente === 'sga'
                ? 'bg-secondary text-white border-secondary'
                : 'border-t-secondary/50 text-t-primary hover:bg-white/5'
              }`}
          >
            FS Construction & Remodeling
          </button>
        </div>

        {/* Conteúdo */}
        <div class="flex flex-col md:flex-row gap-12 md:items-center border border-secondary/30 p-6 md:p-10 rounded-xl">
          {/* Esquerda */}
          <div class="md:w-1/2 space-y-6">
            <h3 class="text-2xl font-bold text-secondary underline underline-offset-4">
              {dados.nome}
            </h3>
            <p class="text-t-primary/90 text-base leading-relaxed whitespace-pre-line">
              {dados.descricao}
            </p>

            <div class="flex flex-wrap gap-4 mt-4">
              <a
                href="#contato"
                class="inline-block px-5 py-2 rounded bg-secondary text-white font-semibold text-sm hover:bg-secondary/90 transition"
              >
                Fale com a gente
              </a>

              <a
                href={dados.site}
                target="_blank"
                class="inline-block px-5 py-2 rounded bg-t-secondary text-bg font-semibold text-sm hover:opacity-80 transition"
              >
                Visitar site
              </a>

              {dados.instagram && (
                <a
                  href={dados.instagram}
                  target="_blank"
                  class="inline-block px-5 py-2 rounded bg-t-secondary text-bg font-semibold text-sm hover:opacity-80 transition"
                >
                  Instagram
                </a>
              )}
            </div>
          </div>

          {/* Direita */}
          <div class="md:w-1/2 h-full flex items-center md:pl-4 lg:pl-8">
            <ul class="list-disc list-inside space-y-2 text-t-primary md:ml-2">
              {dados.ganhos.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
