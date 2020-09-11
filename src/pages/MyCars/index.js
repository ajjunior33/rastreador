import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import HeaderSection from "../../components/HeaderSection";

import "./style.css";

function MyCars() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    let session = localStorage.getItem("storage");
    session = JSON.parse(session);
    setCars(session.car[1]);

    console.log(session.car[1]);
  }, []);
  return (
    <div className="wrapper">
      <Navbar />

      <section className="container-fluid">
        <HeaderSection />

        <section className="content-fluid">
          {cars.map((car) => (
            <div className="box">
              <h2>{car.modelo}</h2>
              <h6>{car.marca}</h6>
              <footer>
                <Link to={`/details_car/${car.placa}`}>Acompanhar carro</Link>
              </footer>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}

export default MyCars;
