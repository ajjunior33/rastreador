import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [perfil, setPerfil] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"
  );
  useEffect(() => {
    const session = localStorage.getItem("storage");
    let { dataClient } = JSON.parse(session);
    dataClient = dataClient[0];
    let name_user = document.querySelector(".name_user");
    let nome = dataClient.razao_social.split(" ");
    name_user.innerHTML = `${nome[0]} ${nome[1]}`;
  }, []);

  return (
    <nav className="menu">
      <div className="profile">
        <div className="image">
          <img src={perfil} alt="profileImage" />
          <h3 className="name_user"> </h3>
        </div>
      </div>
      <ul>
        <Link to="/dashboard">
          <li>Página Inicial</li>
        </Link>
        <Link to="/mycars">
          <li>Meus carros</li>
        </Link>
        <Link to="#">
          <li>Pedir novo rastreador</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
