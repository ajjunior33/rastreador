import React, { useState, useEffect } from "react";

import GoogleMapReact from "google-map-react";

import pin from "../../assets/pin.svg";

export default function Maps(props) {
  const [posicao, setPosicao] = useState({});
  const [refZoom, setZoom] = useState();
  useEffect(() => {
    const coordenations = {
      lat: parseFloat(props.lat),
      lng: parseFloat(props.lng),
    };
    setZoom(18);
    setPosicao(coordenations);
  }, []);
  const AnyReactComponent = () => (
    <div>
      <img
        src={pin}
        style={{
          width: 30,
          height: 30,
        }}
        alt="Pin"
      />
    </div>
  );
  return (
    <GoogleMapReact
      //bootstrapURLKeys={{ key: "AIzaSyD5IRkjlZFgyWxzLkFmTp7D87gXqBnvliI" }}
      defaultCenter={posicao}
      defaultZoom={refZoom}
    >
      <AnyReactComponent lat={props.lat} lng={props.lng} text="" />
    </GoogleMapReact>
  );
}
