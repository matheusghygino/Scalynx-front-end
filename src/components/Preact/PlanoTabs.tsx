// src/components/PlanosFlexiveis/PlanoTabs.tsx
import type { FunctionalComponent } from 'preact';

type Props = {
    aba: 'modular' | 'pacotes';
    setAba: (value: 'modular' | 'pacotes') => void;
};

const PlanoTabs: FunctionalComponent<Props> = ({ aba, setAba }) => {
    return (
        <div class="flex justify-center gap-4 mb-10">
            <button
                onClick={() => setAba('modular')}
                class={`px-6 py-2 rounded-full font-semibold border transition duration-200
          ${aba === 'modular' ? ' border-terciary' : 'border-gray-300 hover:bg-gray-100'}`}
            >
                Serviços Modulares
            </button>
            <button
                onClick={() => setAba('pacotes')}
                class={`px-6 py-2 rounded-full font-semibold border transition duration-200
          ${aba === 'pacotes' ? ' border-terciary' : 'border-gray-300 hover:bg-gray-100'}`}
            >
                Pacotes Prontos
            </button>
        </div>
    );
};

export default PlanoTabs;
