import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/birthplan.css";
import "../../styles/index.css";
import { Navbar } from "../component/navbar";
import { CheckboxTiamati } from "../component/checkboxTiamati";
import { MultiSelectTiamati } from "../component/multiSelectTiamati";
import { Link } from "react-router-dom";
import logo from "../../../img/logo/logo.png";
import { BirthplanSection } from "../component/birthplanSection";

export const Birthplan = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.verify();
  }, []);

  return (
    <div>
      {/* Menu */}
      <nav
        className="navbar navbar-light fixed-top position-relative"
        id="plan-menu"
      >
        <div>
          <div>
            <button id="pdf-button" className="btn-fill">
              Generar plan de parto
            </button>
          </div>
        </div>

        <h1 id="title">Titulo</h1>

        <div id="menu-buttons">
          <button
            id="before-button"
            className="btn-slide i me-2"
            onClick={() => {}}
          >
            <i className="icon-arrow-left"></i>
            Anterior
          </button>
          <button id="after-button" className="btn-slide" onClick={() => {}}>
            Siguiente
            <i className="icon-arrow-right"></i>
          </button>
        </div>
      </nav>

      {/* Section */}
      <BirthplanSection></BirthplanSection>
    </div>
  );
};
