// src/componentes/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './styles.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLoginMock = (event) => {
    event.preventDefault();
    if (email === '123' && senha === '123') {
      navigate('/principal');
    } else {
      // Exibe uma mensagem de erro
      alert('Credenciais inválidas');
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, senha })
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
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src="/logoLogin.png" alt="AutoPro Solutions Logo" />
        </div>
        <form className="login-form" onSubmit={handleLoginMock}>
          <label htmlFor="login">Login:</label>
          <input
            type="text"
            id="login"
            name="login"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            id="senha"
            name="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
        <div className="register-link">
          <Link to="/principal">Ir para a Página Principal</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
