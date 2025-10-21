import type { FunctionalComponent } from 'preact';

type Props = {
  aplicarDesconto: boolean;
  setAplicarDesconto: (value: boolean) => void;
};

const BotaoToggleDesconto: FunctionalComponent<Props> = ({ aplicarDesconto, setAplicarDesconto }) => {
  return (
    <button
      onClick={() => setAplicarDesconto(!aplicarDesconto)}
      class={`px-6 py-2 rounded-full font-semibold border transition duration-200
        ${aplicarDesconto ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-gray-300 hover:bg-gray-100'}`}
    >
      {aplicarDesconto ? 'Desconto Aplicado' : 'Aplicar desconto (plano semestral ou anual)'}
    </button>
  );
};

export default BotaoToggleDesconto;
