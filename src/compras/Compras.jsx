import './Compras.css'
import { useState } from 'react';

const Compras = () => {
    const [item, setItem] = useState('');
    const [itens, setItens] = useState(['Arroz', 'Feijão', 'Carne', 'Salada']);

    const adicionar = () => {
        // Jeito errado
        // itens.push(item);
        // setItens(itens);
        setItens((itens) => {
            // Evitar
            // itens.push(item);
            // return itens;
            return [...itens, item]
        });
        setItem('');
    }

    const remover = (item) => {
        setItens((itens) => {
            return [...itens.filter(i => i !== item)];
        })
    }

    return (
        <section className="compras">
            <h1>Compras</h1>
            <div className="input">
                <input value={item} onChange={(e) => setItem(e.target.value)} />
                <button onClick={adicionar}>Adicionar</button>
            </div>
            <ol>
                {itens.map((item, indice) => {
                    return <li key={indice}>
                        <button onClick={() => remover(item)}>
                            X
                        </button>
                        <span>{item}</span>
                    </li>
                })}
            </ol>
        </section>
    )
};

export default Compras;