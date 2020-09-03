import React from "react";

import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import HeaderLogin from "../../components/HeaderLogin";

function Solicitation() {
  return (
    <div className="container">
      <div className="content">
        <Link to="/" className="buttonBack">
          <FiArrowLeft /> Voltar
        </Link>

        <form action="">
          <HeaderLogin />
          <div className="form-group">
            <label htmlFor="nome">Nome: </label>
            <input
              type="text"
              name="nome"
              placeholder="João Carlos da Silva"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefone">Telefone</label>
            <input
              type="text"
              name="phone"
              placeholder="(DDD) + Telefone"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="seumelhoremail@exemplo.com"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-dark btn-block">
            Solicitar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Solicitation;
