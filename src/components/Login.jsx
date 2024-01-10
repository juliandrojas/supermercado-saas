import React, { useState } from 'react';
import { supabase } from '../supabase/supabase.js';
import Navbar from './Navbar';

function Login() {
  const navbarProps = {
    brandName: "Login",
    links: [
      { label: "Inicio", href: "/", active: true },
    ],
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Contraseña:", password);
    try {
      const result = await supabase.auth.signUp({
        email,
        password,
      });
      console.log(result);
    } catch (error) {
      console.log("Error en la autenticación: "+error);
    }
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
                    id="email"
                    type="text"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <label htmlFor="email">Usuario</label>
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
                <div className="row">
                  <div className="col s6">
                    <button
                      className="btn waves-effect waves-light"
                      type="submit"
                    >
                      <i className="material-icons right">lock</i>
                      Iniciar Sesión
                    </button>
                  </div>
                  <div className="col s6">
                    <a href="/register" className="btn waves-wffect waves-light">
                    <i className="material-icons right">person_add</i>
                      Registrarse
                    </a>
                  </div>
                </div>
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
