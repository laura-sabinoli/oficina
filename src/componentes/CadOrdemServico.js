// src/componentes/CadCliente.js
import React, { useState } from 'react'; // Adicione useState aqui
import { Link } from 'react-router-dom';
import './CadCliente.css';

const CadOrdemServico = () => {
  const [showSubmenu, setShowSubmenu] = useState(false); // Estado para controlar a visibilidade do submenu
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');

  const toggleSubmenu = () => {
    setShowSubmenu(!showSubmenu); // Alterna a visibilidade do submenu
  };

  const atualizarMock = () => {
    console.log('nome:' + nome )
    console.log('cpf:' + cpf )
    localStorage.setItem('ordem', token);
  }

  const handleAtualizar = (event) => {
    event.preventDefault();
    fetch('localhost:8080/endereco', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, cpf })
    })
      .then(response => response.json())
      .then(data => {
        // Lógica para lidar com a resposta do backend
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="main-bodyCad">
      <header className="navbar">
        <div className="navbar-content">
          <div className="logo">
            <img src="logoNav.png" alt="AutoPro Solutions Logo" />
          </div>
          <nav className="nav-links">
            <Link id="inicio" to="/Principal">Inicio</Link>
            <div className="dropdown">
              <button onClick={toggleSubmenu} className="dropdown-button">Cadastrar</button>
              {showSubmenu && (
                <div className="submenu">
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

      <main className="main-containerCad">
        <form className="cadastro-form">
          <h2>Cadastro de Ordem de Serviço</h2>

          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)} />
          </div>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="cpf">CPF:</label>
              <input type="text" id="cpf" name="cpf" 
               value={cpf}
               onChange={(e) => setCpf(e.target.value)} />
            </div>
            <div className="form-group">
              <label htmlFor="telefone">Telefone:</label>
              <input type="text" id="telefone" name="telefone" />
            </div>
          </div>
          <div className="form-group-inline">
            <div className="form-group form-group-endereco">
              <label htmlFor="endereco">Endereço:</label>
              <input type="text" id="endereco" name="endereco" />
            </div>
            <div className="form-group form-group-numero">
              <label htmlFor="numero">Nº:</label>
              <input type="text" id="numero" name="numero" />
            </div>
          </div>

          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="cidade">Cidade:</label>
              <input type="text" id="cidade" name="cidade" />
            </div>
            <div className="form-group">
              <label htmlFor="cep">CEP:</label>
              <input type="text" id="cep" name="cep" />
            </div>
          </div>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="uf">UF:</label>
              <select id="uf" name="uf">
                <option value="">Selecione</option>
                <option value="AC">AC - Acre</option>
                <option value="AL">AL - Alagoas</option>
                <option value="AP">AP - Amapá</option>
                <option value="AM">AM - Amazonas</option>
                <option value="BA">BA - Bahia</option>
                <option value="CE">CE - Ceará</option>
                <option value="DF">DF - Distrito Federal</option>
                <option value="ES">ES - Espírito Santo</option>
                <option value="GO">GO - Goiás</option>
                <option value="MA">MA - Maranhão</option>
                <option value="MT">MT - Mato Grosso</option>
                <option value="MS">MS - Mato Grosso do Sul</option>
                <option value="MG">MG - Minas Gerais</option>
                <option value="PA">PA - Pará</option>
                <option value="PB">PB - Paraíba</option>
                <option value="PR">PR - Paraná</option>
                <option value="PE">PE - Pernambuco</option>
                <option value="PI">PI - Piauí</option>
                <option value="RJ">RJ - Rio de Janeiro</option>
                <option value="RN">RN - Rio Grande do Norte</option>
                <option value="RS">RS - Rio Grande do Sul</option>
                <option value="RO">RO - Rondônia</option>
                <option value="RR">RR - Roraima</option>
                <option value="SC">SC - Santa Catarina</option>
                <option value="SP">SP - São Paulo</option>
                <option value="SE">SE - Sergipe</option>
                <option value="TO">TO - Tocantins</option>
              </select>
            </div>
          </div>
          <h2>Veículo</h2>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="placa">Placa:</label>
              <input type="text" id="placa" name="placa" />
            </div>
            <div className="form-group">
              <label htmlFor="ano">Ano:</label>
              <input type="text" id="ano" name="ano" />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="modelo">Modelo:</label>
            <input type="text" id="modelo" name="modelo" />
          </div>
          <h2>Serviço</h2>
          <div className="form-group-inline">
            <div className="form-group">
              <label htmlFor="uservico">Serviço:</label>
              <select id="servico" name="servico">
                <option value="">Selecione</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="ano">Valor:</label>
              <input type="text" id="valor" name="valor" />
            </div>
          </div>

          <div className="button-group">
            <button type="button">Cadastrar</button>
            <button type="button" onClick={atualizarMock}>Atualizar</button>
            <button type="button">Excluir</button>
            <button type="button">Cancelar</button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default CadOrdemServico;

