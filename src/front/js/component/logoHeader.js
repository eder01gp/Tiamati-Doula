import React from "react";
import logo from "../../../img/logo/logo.png";
import { useHistory } from "react-router-dom";

export const LogoHeader = () => {
  let history = useHistory();

  const handleClick = () => {
    history.push("/");
  };

  return (
    <div id="header-component" className="row">
      <div id="header-logo">
        <button id="logo-button" onClick={handleClick}>
          <img id="logo-tiamati" src={logo} alt="logo tiamati" />
        </button>
      </div>
    </div>
  );
};
