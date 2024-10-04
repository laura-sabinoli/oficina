// src/componentes/CadCliente.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CadCliente.css';

const CadCliente = () => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [telefone, setTelefone] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [cep, setCep] = useState('');
    const [uf, setUf] = useState('');
    const [placa, setPlaca] = useState('');
    const [ano, setAno] = useState('');
    const [modelo, setModelo] = useState('');
    const [token, setToken] = useState(''); // Token para armazenar no localStorage
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

    // Função para aplicar máscara no telefone
    const handleTelefoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 6) {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (value.length > 2) {
            value = value.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        }

        setTelefone(value);
    };

    // Função para validar o ano
    const validarAno = (ano) => {
        const anoAtual = new Date().getFullYear();
        const anoNumerico = parseInt(ano, 10);

        if (isNaN(anoNumerico) || ano.length !== 4) {
            return false;
        }

        return anoNumerico >= 1970 && anoNumerico <= anoAtual;
    };

    const validarCpf = (cpf) => {
        const cpfLimpo = cpf.replace(/\D/g, '');
        return cpfLimpo.length === 11;
    };

    const validarTelefone = (telefone) => {
        const telefoneLimpo = telefone.replace(/\D/g, '');
        return telefoneLimpo.length === 10 || telefoneLimpo.length === 11;
    };

    // Função para simular a atualização dos dados
    const atualizarMock = () => {
        console.log('nome:' + nome);
        console.log('cpf:' + cpf);
        console.log('endereco:' + endereco);
        console.log('telefone:' + telefone);
        localStorage.setItem('ordem', token);
    };

    // Função para lidar com o envio dos dados para o backend
    const handleAtualizar = (event) => {
        event.preventDefault();

        fetch('http://localhost:8080/endereco', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, cpf, endereco, telefone })
        })
            .then(response => response.json())
            .then(data => {
                // Lógica para lidar com a resposta do backend
                console.log(data);
                setToken(data.token); // Exemplo de salvando token da resposta
            })
            .catch(error => {
                console.error(error);
            });
    };

    const handleCadastro = (event) => {
        event.preventDefault();

        if (!nome || !cpf || !telefone || !placa || !ano) {
            alert('Por favor, preencha todos os campos obrigatórios.');
            return;
        }

        if (!validarCpf(cpf)) {
            alert('CPF inválido. Deve conter 11 dígitos numéricos.');
            return;
        }

        if (!validarTelefone(telefone)) {
            alert('Telefone inválido. Deve ter 10 ou 11 dígitos.');
            return;
        }

        if (!validarAno(ano)) {
            alert('Ano inválido. Deve ser entre 1970 e o ano atual.');
            return;
        }

        // Simulando o envio dos dados para o backend
        fetch('http://localhost:8080/cliente', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome,
                cpf,
                telefone,
                endereco,
                numero,
                cidade,
                cep,
                uf,
                placa,
                ano,
                modelo
            }),
        })
            .then(response => response.json())
            .then(data => {
                alert('Cliente cadastrado com sucesso!');
                console.log(data);
                setToken(data.token); // Exemplo de token recebido após cadastro
            })
            .catch(error => {
                console.error('Erro ao cadastrar cliente:', error);
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
                                    <Link to="/CadOrdemServico">Ordem de Serviço</Link>
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
                <form className="cadastro-form" onSubmit={handleCadastro}>
                    <h2>Cadastro de Cliente</h2>

                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group-inline">
                        <div className="form-group">
                            <label htmlFor="cpf">CPF:</label>
                            <input
                                type="text"
                                id="cpf"
                                name="cpf"
                                value={cpf}
                                onChange={handleCpfChange}
                                maxLength="14"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="telefone">Telefone:</label>
                            <input
                                type="text"
                                id="telefone"
                                name="telefone"
                                value={telefone}
                                onChange={handleTelefoneChange}
                                maxLength="15"
                                required
                            />
                        </div>
                    </div>

                    {/* Restante do formulário... */}

                    <button type="submit" className="botao">Cadastrar</button>
                </form>

                <button onClick={atualizarMock} className="botao">Atualizar Mock</button>
                <form onSubmit={handleAtualizar}>
                    <button type="submit" className="botao">Atualizar Backend</button>
                </form>
            </main>
        </div>
    );
};

export default CadCliente;
