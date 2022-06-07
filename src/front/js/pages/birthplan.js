import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/birthplan.css";
import { Navbar } from "../component/navbar";
import { Birthplanmenu } from "../component/birthplanMenu";
import { Birthplanvideo } from "../component/birthplanVideo";
import { Link } from "react-router-dom";

export const Birthplan = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="row text-center" id="plan-title">
        <h1>Plan de parto interactivo</h1>
      </div>
      <div id="birthplan">
        <Birthplanmenu />
        <Birthplanvideo />
      </div>
    </div>
  );
};
