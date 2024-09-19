// src/componentes/Login.js
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <div className="logo">
          <img src="/logoLogin.png" alt="AutoPro Solutions Logo" />
        </div>
        <form className="login-form">
          <label htmlFor="login">Login:</label>
          <input type="text" id="login" name="login" />
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" name="senha" />
          <button type="submit">Entrar</button>
        </form>
        <div className="register-link"> 
          <Link to="/principal">Ir para a Página Principal</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
