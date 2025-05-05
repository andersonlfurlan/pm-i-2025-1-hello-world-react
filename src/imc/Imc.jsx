import { useState } from 'react';
import './Imc.css';

export default function Imc() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState('');
    const [classificacao, setClassificacao] = useState('');

    function calcular() {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);
        const imc = pesoNum / Math.pow(alturaNum, 2);

        setResultado(
            new Intl.NumberFormat({ language: 'pt-BR', }).format(
                imc.toFixed(2)
            )
        )

        let classificacao = '';
        if (imc < 16) { classificacao = 'Magreza Grave';
        } else if (imc >= 16 && imc < 17) { classificacao = 'Magreza moderada';
        } else if (imc >= 17 && imc < 18.5) { classificacao = 'Magreza leve';
        } else if (imc >= 18.5 && imc < 25) { classificacao = 'Saudável';
        } else if (imc >= 25 && imc < 30) { classificacao = 'Sobrepeso';
        } else if (imc >= 30 && imc < 35) { classificacao = 'Obesidade Grau I';
        } else if (imc >= 35 && imc < 40) { classificacao = 'Obesidade Grau II';
        } else { classificacao = 'Obesidade Grau III'; }
        setClassificacao(classificacao);
    }

    function limpar() {
        setPeso('');
        setAltura('');
        setClassificacao('');
        setResultado('');
    }

    return (
        <section className="imc">
            <h1>IMC - Índice de Massa Corpórea</h1>
            <input value={peso} onChange={(e) => setPeso(e.target.value)} placeholder="Peso" type="text" />
            <input value={altura} onChange={(e) => setAltura(e.target.value)} placeholder="Altura" type="text" />
            <div className='actions'>
                <button onClick={calcular}>Calcular</button>
                <button onClick={limpar}>Limpar</button>
            </div>
            {resultado && <p>
                IMC: {resultado} / Classificação: {classificacao}
            </p>}
        </section>
    );
}


