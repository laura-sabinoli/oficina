import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CadCliente.css'; // Ajuste para o CSS correto

const CadFuncionario = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [cargo, setCargo] = useState('');
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [showSubmenu, setShowSubmenu] = useState(false);

    const toggleSubmenu = () => {
        setShowSubmenu(!showSubmenu);
    };

    // Função para aplicar máscara no CPF
    const handleCpfChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); 
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 9) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
        } else if (value.length > 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{3})/, '$1.$2.$3');
        } else if (value.length > 3) {
            value = value.replace(/(\d{3})(\d{3})/, '$1.$2');
        }

        setCpf(value);
    };

    // Função para validar o CPF
    const validarCpf = (cpf) => {
        const cpfLimpo = cpf.replace(/\D/g, '');
        return cpfLimpo.length === 11;
    };

    // Função para lidar com o cadastro do funcionário
    const handleCadastro = (event) => {
        event.preventDefault();

        // Verificação se todos os campos obrigatórios estão preenchidos
        if (!nome || !cpf || !cargo || !login || !senha) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        // Validação do CPF
        if (!validarCpf(cpf)) {
            alert('CPF inválido. Deve conter 11 dígitos numéricos.');
            return;
        }

        // Mensagem de sucesso
        alert('Funcionário cadastrado com sucesso!');
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
                <form className="cadastro-form" onSubmit={handleCadastro}>
                    <h2>Cadastro de Funcionário</h2>

                    <div className="form-group">
                        <label htmlFor="nome" className="rubik-bold">Nome:</label>
                        <input type="text" id="nome" name="nome" required 
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cpf" className="rubik-bold">CPF:</label>
                        <input type="text" id="cpf" name="cpf" required
                            value={cpf}
                            onChange={handleCpfChange}
                            maxLength="14" // Define o limite para a máscara CPF (11 dígitos + pontos e traço)
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cargo" className="rubik-bold">Cargo:</label>
                        <input type="text" id="cargo" name="cargo" required 
                            value={cargo}
                            onChange={(e) => setCargo(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="login" className="rubik-bold">Login:</label>
                        <input type="text" id="login" name="login" required 
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="senha" className="rubik-bold">Senha:</label>
                        <input type="password" id="senha" name="senha" required 
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
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
