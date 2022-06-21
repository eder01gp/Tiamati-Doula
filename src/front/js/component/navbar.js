import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light fixed-top" id="navbar">
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
          <Link to="/services">
            <li>Servicios</li>
          </Link>
          <Link to="/documents">
            <li>Documentos</li>
          </Link>
          <Link to="/faq">
            <li>FAQ</li>
          </Link>
          <Link to="/birthplan">
            <li>Plan de parto interactivo</li>
          </Link>
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
            {localStorage.getItem("rol") == 1 ? (
              <div>
                <Link to="/profile_user">
                  <li>
                    <p href="#" className="mx-2">
                      Mi Perfil
                    </p>
                  </li>
                </Link>
              </div>
            ) : (
              <div>
                <Link to="/profile_company">
                  <li>
                    <p href="#" className="mx-2">
                      Mi Perfil
                    </p>
                  </li>
                </Link>
              </div>
            )}
            <div>
                <Link to="/checkout">
                  <li>
                    <p href="#" className="mx-2">
                      Carro de la compra
                    </p>
                  </li>
                </Link>
            </div>
            <li>
              <p
                href="#"
                className="mx-2"
                onClick={() => {
                  actions.logout();
                }}
              >
                Cerrar Sesión
              </p>
            </li>
          </ul>
        ) : (
          <ul
            className="dropdown-menu"
            id="profile-dropdown"
            aria-labelledby="dropDownMenu"
          >
            <Link to="/loginPage">
              <li>
                <p className="mx-2">Iniciar Sesión</p>
              </li>
            </Link>
            <Link to="/signupPage">
              <li>
                <p className="mx-2">Registrarse</p>
              </li>
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};
