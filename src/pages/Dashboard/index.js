import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Dashboard() {
  return (
    <div className="wrapper">
      <nav className="menu">
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
