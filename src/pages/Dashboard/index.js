import React from "react";
import { Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

import "./style.css";

function Dashboard() {
  return (
    <div className="wrapper">
      <nav className="menu">
        <div className="profile">
          <div className="image">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
              alt="profileImage"
            />
            <h3>André Souza </h3>
          </div>
        </div>
        <ul>
          <Link to="#">
            <li>Página Inicial</li>
          </Link>
          <Link to="#">
            <li>Meus carros</li>
          </Link>
          <Link to="#">
            <li>Pedir novo rastreador</li>
          </Link>
        </ul>
      </nav>

      <section className="container-fluid">
        <header>
          <div className="logo">FLOTTUR</div>
          <div className="logout">
            <FiLogOut />
          </div>
        </header>

        <section className="content-fluid">
          <div className="box">
            Meus Carros 5<footer>Verificar lista de carros</footer>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
