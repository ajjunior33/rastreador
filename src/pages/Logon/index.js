import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import "./login.css";
import HeaderLogin from "../../components/HeaderLogin";
import api from "../../services/api";

function Logon() {
  const history = useHistory();

  useEffect(() => {
    lista();
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function lista() {
    api.get("/chip/27988864790").then((reponse) => {
      console.log(reponse);
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    const elementLogin = document.querySelector("#login");
    elementLogin.disabled = true;

    try {
      api
        .post("/auth", { email, password })
        .then((response) => {
          localStorage.setItem('token', response.data.token);
          history.push('/dashboard');
        })
        .catch((err) => {
          alert("Falha no login, tente novamente.");
          elementLogin.disabled = false;
        });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="container">
      <div className="container-login">
        <HeaderLogin />
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              className="form-control"
              placeholder="seumelhoremail@exemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Senha</label>
            <input
              type="password"
              className="form-control"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <nav className="access-login">
            <Link to="/forgout_password"> Esqueci minha senha </Link>
            <button type="submit" className="btn btn-primary" id="login">
              Acessar
            </button>
          </nav>

          <footer className="access-login">
            <Link to="/solicitation">
              <button type="button" className="btn btn-outline-primary">
                Quero um rastreador
              </button>
            </Link>

            <p>Create by Aurora Systems</p>
          </footer>
        </form>
      </div>
    </div>
  );
}

export default Logon;
