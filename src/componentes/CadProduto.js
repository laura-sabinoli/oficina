import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CadCliente.css'; // Ajuste para o CSS correto

const CadProduto = () => {
    // Estados para armazenar os valores dos campos
    const [nomeP, setNomeP] = useState('');
    const [quantidade, setQuantidade] = useState('');
    const [valor, setValor] = useState('');
    const [showSubmenu, setShowSubmenu] = useState(false); // Estado para controlar a visibilidade do submenu

    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu); // Alterna a visibilidade do submenu
    };

    // Função para validar o cadastro
    const handleCadastro = (event) => {
        event.preventDefault(); // Impede o envio do formulário

        // Valida os campos
        if (!nomeP || !quantidade || !valor) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Verifica se a quantidade é um número válido
        if (isNaN(quantidade) || quantidade <= 0) {
            alert('Quantidade inválida. Deve ser um número maior que 0.');
            return;
        }

        // Verifica se o valor é um número válido
        if (isNaN(valor) || valor <= 0) {
            alert('Valor inválido. Deve ser um número maior que 0.');
            return;
        }

        alert('Produto cadastrado com sucesso!'); // Mensagem de sucesso
    };

    return (
        <div className="main-bodyCadProduto">
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
                                    <Link to="/CadOrdemServico">Ordem de Serviço</Link>
                                    <Link to="/CadCliente">Cliente</Link>
                                    <Link to="/CadFuncionario">Funcionário</Link>
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
                <form className="cadastro-form" onSubmit={handleCadastro}>
                    <h2>Cadastro de Produtos</h2>
                    <div className="form-group">
                        <label htmlFor="nome" className="rubik-bold">Nome:</label>
                        <input 
                            type="text" 
                            id="nome" 
                            name="nome" 
                            value={nomeP}
                            onChange={(e) => setNomeP(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="form-group-quantidade">
                        <label htmlFor="quantidade" className="rubik-bold">Quantidade:</label>
                        <label htmlFor="valor" id="valorProduto" className="rubik-bold">Valor:</label>
                    </div>
                    <div className="form-group-inline">
                        <div className="form-group">
                            <input 
                                type="text" 
                                id="quantidade" 
                                name="quantidade" 
                                value={quantidade}
                                onChange={(e) => setQuantidade(e.target.value)} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text" 
                                id="valor" 
                                name="valor" 
                                value={valor}
                                onChange={(e) => setValor(e.target.value)} 
                                required 
                            />
                        </div>
                    </div>
                    <div className="button-group">
                        <button type="submit" className="cadastrar-button">Cadastrar</button>
                        <button type="button" className="salvar-button">Salvar</button>
                        <button type="button" className="excluir-button">Excluir</button>
                        <button type="reset" className="cancelar-button">Cancelar</button>
                    </div>
                </form>
            </main>
        </div>
    );
};

export default CadProduto;
