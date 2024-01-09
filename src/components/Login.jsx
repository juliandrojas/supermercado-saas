import React, { useState } from 'react';
import Navbar from './Navbar';

function Login() {
  const navbarProps = {
    brandName: "Login",
    links: [
      { label: "Inicio", href: "/", active: true },
    ],
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuario:", username);
    console.log("Contraseña:", password);
  };

  return (
    <>
      <Navbar {...navbarProps} />
      <div className="row">
        <div className="col s12 m7 offset-m2">
          {/* Utiliza la clase 'offset-m2' para centrar horizontalmente en pantallas medianas */}
          <div className="card">
            <div className="card-content">
              <span className="card-title">Inicio de Sesión</span>
              <form onSubmit={handleSubmit}>
                <div className="input-field">
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  <label htmlFor="username">Usuario</label>
                </div>
                <div className="input-field">
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <label htmlFor="password">Contraseña</label>
                </div>
                <button className="btn waves-effect waves-light" type="submit">
                  Iniciar Sesión
                </button>
              </form>
            </div>
            <div className="card-action">
              <a href="#">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
