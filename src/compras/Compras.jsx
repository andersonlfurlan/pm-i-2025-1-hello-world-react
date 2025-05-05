import './Compras.css'
import { useState } from 'react';

const Compras = () => {

    const [itens, setItens] = useState(['Arroz', 'Feijão', 'Carne', 'Salada']);

    const adicionar = () => {
        const item = 'Frango'; // TODO alterar para o input
        // Jeito errado
        // itens.push(item);
        // setItens(itens);
        setItens((itens) => {
            // Evitar
            // itens.push(item);
            // return itens;
            return [...itens, item]
        });
    }

    return (
        <section className="compras">
            <h1>Compras</h1>
            <button onClick={adicionar}>Adicionar</button>
            <ol>
                {itens.map((item, indice) => {
                    return <li key={indice}>{item}</li>
                })}
            </ol>
        </section>
    )
};

export default Compras;