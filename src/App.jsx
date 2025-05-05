import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HelloWorld from './hello-world/HelloWorld';
import Imc from './imc/Imc';
import Home from './home/Home';
import Calculadora from './calculadora/Calculadora';
import Compras from './compras/Compras';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hello-world" element={<HelloWorld name="Maria" />} />
        <Route path="/imc" element={<Imc />} />
        <Route path="/calculadora" element={<Calculadora />} />
        <Route path="/compras" element={<Compras />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
