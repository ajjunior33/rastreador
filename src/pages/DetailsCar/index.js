import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import HeaderSection from "../../components/HeaderSection";
import Maps from "../../components/Maps";

import "./style.css";
import api from "../../services/api";

function DetailsCar() {

  const [car, setCar ]= useState([]);
  const { placa } = useParams();

  async function detailsCar(){

    const request = await api.get(`/vehicles/${placa}`);
    const response = request.data.data;

    setCar(response[0])
  } 
  useEffect(() => {
    detailsCar();
  }, []);

  return (
    <div className="wrapper">
      <Navbar />

      <section className="container-fluid">
        <HeaderSection />

        <section className="content-fluid" id="details">
          <div className="details_car">
            <div className="section_details">
              <strong>Marca: </strong>
              <span> {car.marca}</span>
            </div>
            <div className="section_details">
              <strong>Modelo: </strong>
              <span> {car.modelo}</span>
            </div>
            <div className="section_details">
              <strong>Ano: </strong>
              <span> {car.ano}</span>
            </div>

            <div className="section_details">
              <span></span>
              <strong></strong>
            </div>
          </div>
          <div className="maps" id="map">
            <Maps lat="-20.3425219" lng="-40.3839708" />
          </div>
        </section>
      </section>
    </div>
  );
}

export default DetailsCar;
