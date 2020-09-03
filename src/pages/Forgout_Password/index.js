import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import "./index.css";

import HeaderLogin from '../../components/HeaderLogin';

function Forgout_Password() {
  function handleSubmit() {
    return;
  }
  return (
    <div className="container">
      <div className="content">
        <Link to="/" className="buttonBack">
          <FiArrowLeft /> Voltar
        </Link>
        <HeaderLogin />
        <form method="post" onSubmit={() => handleSubmit()}>
          <div className="form-group">
            <label htmlFor="">E-mail</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="seumelhoremail@exemplo.com"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Recuperar senha agora
          </button>
        </form>
      </div>
    </div>
  );
}

export default Forgout_Password;
