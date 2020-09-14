import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import Navbar from "../../components/Navbar";
import HeaderSection from "../../components/HeaderSection";

import "./style.css";

function Dashboard() {
  const [ qtdcar, setQtdCar] = useState();
  useEffect(() => {
    
    let session = localStorage.getItem("storage");
    if(session !== null){
      session = JSON.parse(session);
      setQtdCar(session.car[0]);
    } 
  }, []); 
  return (
    <div className="wrapper">
      <Navbar />

      <section className="container-fluid">
        <HeaderSection />

        <section className="content-fluid">
          <div className="box">
            <span className="title-sider">Meus Carros</span>
            <span className="tag-bottom">{qtdcar}</span>

            <footer>
              <Link to="/mycars">Verificar lista de carros</Link>
            </footer>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Dashboard;
