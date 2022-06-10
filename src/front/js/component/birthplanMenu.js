import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/birthplan.css";

export const Birthplanmenu = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav
      className="navbar navbar-light fixed-top position-relative"
      id="plan-menu"
    >
      <div>
        <div>
          <button
            className="btn btn-transparent me-2"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <ul
            className="dropdown-menu"
            id="menu-dropdown"
            aria-labelledby="dropDownMenu"
          >
            <Link to="">
              <li>Tema 1 - Lorem</li>
            </Link>
            <Link to="">
              <li>Tema 2 - Ipsum</li>
            </Link>
            <Link to="">
              <li>Tema 3 - Dolor</li>
            </Link>
          </ul>

          <button className="btn btn-success">Generar plan de parto</button>
        </div>
      </div>

      <div id="menu-buttons">
        <button className="btn btn-primary me-2">Anterior</button>
        <button className="btn btn-primary">Siguiente</button>
      </div>
    </nav>
  );
};
