import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CadCliente.css'; // Ajuste para o CSS correto

const CadProduto = () => {
    const [showSubmenu, setShowSubmenu] = useState(false); // Estado para controlar a visibilidade do submenu

    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu); // Alterna a visibilidade do submenu
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
                <form className="cadastro-form">
                    <h2>Cadastro de Produtos</h2>
                    <div className="form-group">
                        <label htmlFor="nome" className="rubik-bold">Nome:</label>
                        <input type="text" id="nome" name="nome" required />
                    </div>
                    <div className="form-group-quantidade">
                        <label htmlFor="quantidade" className="rubik-bold">Quantidade:</label>
                        <label htmlFor="valor"  id="valorProduto" className="rubik-bold">Valor:</label>
                    </div>
                    <div className="form-group-inline">
                        <div className="form-group">
                            <input type="text" id="quantidade" name="quantidade" required />
                        </div>

                        <div className="form-group">
                            <input type="text" id="valor" name="valor" required />
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
