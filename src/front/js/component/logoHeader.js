import React from "react";
import logo from "../../../img/logo/logo.png";

export const LogoHeader = () => {
  return (
    <div id="header-component" className="row">
      <div id="header-logo">
        <img id="logo-tiamati" src={logo} alt="logo tiamati" />
      </div>
    </div>
  );
};
