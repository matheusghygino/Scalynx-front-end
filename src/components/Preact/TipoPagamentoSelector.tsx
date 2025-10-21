import type { FunctionalComponent } from 'preact';

interface Props {
  tipo: 'mensal' | 'semestral' | 'anual';
  setTipo: (value: 'mensal' | 'semestral' | 'anual') => void;
}

const TipoPagamentoSelector: FunctionalComponent<Props> = ({ tipo, setTipo }) => {
  return (
    <div class="flex gap-4">
      {['mensal', 'semestral', 'anual'].map((opcao) => (
        <button
          key={opcao}
          onClick={() => setTipo(opcao as Props['tipo'])}
          class={`px-4 py-2 rounded-full font-semibold border transition duration-200
            ${tipo === opcao ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-gray-300 hover:bg-gray-100'}`}
        >
          {opcao.charAt(0).toUpperCase() + opcao.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TipoPagamentoSelector;
