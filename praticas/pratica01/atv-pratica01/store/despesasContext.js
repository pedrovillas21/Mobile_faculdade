import { createContext, useState } from 'react';

export const DespesasContext = createContext({
    despesas: [],
    adicionarDespesa: ({ descricao, valor, data }) => {},
    removerDespesa: (id) => {},
});

function DespesasContextProvider({ children }) {
    const [despesas, setDespesas] = useState([]);

    function adicionarDespesa({ descricao, valor, data }) {
        setDespesas((current) => [
            ...current,
            {
                id: new Date().toString() + Math.random().toString(),
                descricao,
                valor: parseFloat(valor),
                data,
            },
        ]);
    }

    function removerDespesa(id) {
        setDespesas((current) => current.filter((d) => d.id !== id));
    }

    const value = { despesas, adicionarDespesa, removerDespesa };

    return (
        <DespesasContext.Provider value={value}>
            {children}
        </DespesasContext.Provider>
    );
}

export default DespesasContextProvider;
