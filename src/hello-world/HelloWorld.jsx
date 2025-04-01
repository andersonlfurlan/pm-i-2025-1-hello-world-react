import { useState } from 'react';

const HelloWorld = () => {

    let [name, setName] = useState('');

    const handleHelloWorld = (event) => {
        console.log(event);

    };

    function handleClear() {
        setName('');
    };

    const handleChangeInput = (event) => {
        setName(event.target.value);
        console.log('name: ', name);
    }

    const handleKeyInput = (event) => {
        console.log(event);
        if (event.key === 'Escape') {
            setName('');
        }
    };

    return (
        <>
            <h1>Hello World!</h1>
            <input type="text" onChange={handleChangeInput} onKeyUp={handleKeyInput} value={name} />
            <button onClick={handleHelloWorld}>Hello World</button>
            <button onClick={handleClear}>Limpar</button>
            {name && <p>Hello world, {name}!</p>}
        </>
    )
}

export default HelloWorld;

