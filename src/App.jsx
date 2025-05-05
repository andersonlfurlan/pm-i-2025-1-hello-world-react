import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HelloWorld from './hello-world/HelloWorld';
import Imc from './imc/Imc';
import Home from './home/Home';
import Calculadora from './calculadora/Calculadora';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/hello-world" element={<HelloWorld />} />
        <Route path="/imc" element={<Imc />} />
        <Route path="/calculadora" element={<Calculadora />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
