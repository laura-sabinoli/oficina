import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de importar o Link
import './CadCliente.css'; // Ajuste para o CSS correto

const CadFuncionario = () => {
    const [showSubmenu, setShowSubmenu] = useState(false); // Estado para controlar a visibilidade do submenu

    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu); // Alterna a visibilidade do submenu
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
                                    <Link to="/CadOrdemServico">Ordem de Serviço</Link>
                                    <Link to="/CadCliente">Cliente</Link> 
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
                    <h2>Cadastro de Funcionário</h2>

                    <div className="form-group">
                        <label htmlFor="nome" className="rubik-bold">Nome:</label>
                        <input type="text" id="nome" name="nome" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cpf" className="rubik-bold">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cargo" className="rubik-bold">Cargo:</label>
                        <input type="text" id="cargo" name="cargo" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="login" className="rubik-bold">Login:</label>
                        <input type="text" id="login" name="login" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha" className="rubik-bold">Senha:</label>
                        <input type="password" id="senha" name="senha" required />
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

export default CadFuncionario;
