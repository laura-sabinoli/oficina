// src/componentes/Principal.js
import React, { useState } from 'react'; // Adicione useState aqui
import { Link } from 'react-router-dom';
import './styles.css';

const Principal = () => {
  const [showSubmenu, setShowSubmenu] = useState(false); // Estado para controlar a visibilidade do submenu

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu); // Alterna a visibilidade do submenu
  };

  return (
    <div className="main-body">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <img src="/logoNav.png" alt="AutoPro Solutions Logo" />
          </div>
          <nav className="nav-links">
            <div className="dropdown">
              <button onClick={toggleSubmenu} className="dropdown-button">Cadastrar</button>
              {showSubmenu && (
                <div className="submenu">
                  <Link to="/CadOrdemServico">Ordem de Serviço</Link>
                  <Link to="/CadCliente">Cliente</Link>
                  <Link to="/CadFuncionario">Funcionário</Link>
                  <Link to="/CadProduto">Produto</Link>
                  <Link to="/CadServico">Serviço</Link>
                </div>
              )}
              <Link to="/Estoque">Estoque</Link>
            </div>
          </nav>
          <div className="logout-container">
            <button className="logout">Sair</button>
          </div>
        </div>
      </header>
      <main className="main-containerPrincipal">
        <div className="pesquisar-container">
          <input type="text" placeholder="Pesquisar..." />
          <button className="search-button">&#128269;</button>
        </div>
        <h3>Ordem de Serviço</h3>
        <div className="tableOrdemService">

          <button className="order-button"><Link to="/CadOrdemServico">Adicionar Ordem de Serviço</Link></button>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>Nº Ordem:</th>
                  <th>Cliente:</th>
                  <th>Veículo:</th>
                  <th>Serviço:</th>
                  <th>Status:</th>
                  <th>Valor:</th>
                  <th>Entrada:</th>
                  <th>Saída:</th>
                  <th>Observação</th>
                </tr>
              </thead>
              <tbody>
                {/* Linhas da tabela podem ser adicionadas aqui */}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Principal;
