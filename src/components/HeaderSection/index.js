import React, { useEffect } from "react";
import HeaderLogin from "../HeaderLogin";

import { FiLogOut } from "react-icons/fi";

function HeaderSection() {
  useEffect(() => {


  }, []);

  return (
    <header>
      <div className="logo">FLOTTUR</div>
      <div className="logout">
        <FiLogOut />
      </div>
    </header>
  );
}

export default HeaderSection;
