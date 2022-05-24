import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-light fixed-top" id="navbar">
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
          <Link to="/bio">
            <li>Bio</li>
          </Link>
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
            <li>Cerrar Sesión</li>
            <li>
              <Link to="/profile">Mi Perfil</Link>
            </li>
          </ul>
        ) : (
          <ul
            className="dropdown-menu"
            id="profile-dropdown"
            aria-labelledby="dropDownMenu"
          >
            <li>Iniciar Sesión</li>
            <li>Registrarse</li>
          </ul>
        )}
      </div>
    </nav>
  );
};
