
import React, { useContext } from "react";

import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light fixed-top position-relative" id="navbar">
      <div>
        {/* boton menu */}
        <button
          className="btn btn-light"
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
          <Link to="/">
            <li>Inicio</li>
          </Link>
          <li>Bio</li>
          <li>Servicios</li>
          <li>Documentos</li>
          <li>FAQ</li>
        </ul>
      </div>

      {/* boton perfil */}
      <div>
        <button
          className="btn btn-secondary rounded-circle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          id="profile-menu"
        >
          <i className="fa-solid fa-user"></i>
        </button>
        {store.logged == true ? (
          <ul
            className="dropdown-menu"
            id="profile-dropdown"
            aria-labelledby="dropDownMenu"
          >
            <li><p href="#" className="mx-2">Mi Perfil</p></li>
            <li><p href="#" className="mx-2" onClick={()=>{actions.logout()}}>Cerrar Sesión</p></li>  
          </ul>
        ) : (
          <ul
            className="dropdown-menu"
            id="profile-dropdown"
            aria-labelledby="dropDownMenu"
          >
          <Link to="/login">
            <li><p className="mx-2">Iniciar Sesión</p></li>
          </Link>
          <Link to="/signup">
            <li><p className="mx-2">Registrarse</p></li>
          </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};
