import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login';
import Principal from './componentes/Principal';
import CadCliente from './componentes/CadCliente';
import CadFuncionario from './componentes/CadFuncionario';
import CadProduto from './componentes/CadProduto'; 
import CadServico from './componentes/CadServico'; 
import Estoque from './componentes/Estoque'; 
import CadOrdemServico from './componentes/CadOrdemServico'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/CadCliente" element={<CadCliente />} />
        <Route path="/CadFuncionario" element={<CadFuncionario />} />
        <Route path="/CadProduto" element={<CadProduto />} />
        <Route path="/CadServico" element={<CadServico />} />
        <Route path="/Estoque" element={<Estoque />} />
        <Route path="/CadOrdemServico" element={<CadOrdemServico />} />
      </Routes>
    </Router>
  );
}

export default App;
