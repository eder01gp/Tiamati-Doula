import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  useEffect (()=>{
    actions.getUserServiceHired()
  },[])

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
            <li className="px-2">Inicio</li>
          </Link>
          <Link to="/bio">
            <li className="px-2">Bio</li>
          </Link>
          <Link to="/services">
            <li className="px-2">Servicios</li>
          </Link>
          <Link to="/documents">
            <li className="px-2">Documentos</li>
          </Link>
          <Link to="/faq">
            <li className="px-2">FAQ</li>
          </Link>
          {store.service_id1_hired ? 
          <Link to="/birthplan">
            <li className="px-2">Plan de parto interactivo</li>
          </Link> : null
          }

        </ul>
      </div>

      {/* boton perfil */}
      <div className="d-flex align-items-center">
        <div className="pe-2 pt-2">{store.logged == true ? (<h6>{store.user_info.email} </h6>) : null}</div>
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
              className="dropdown-menu dropdown-menu-end"
              id="profile-dropdown"
              aria-labelledby="dropDownMenu"
            >
              {localStorage.getItem("rol") == 1 ? (
                <div>
                  <Link to="/profile_user">
                    <li className="ps-2">
                        Mi Perfil
                    </li>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/profile_company">
                    <li className="ps-2">
                        Mi Perfil
                    </li>
                  </Link>
                </div>
              )}
              <div>
                  <Link to="/checkout">
                    <li className="ps-2">
                        Carro de la compra
                    </li>
                  </Link>
              </div>
              <li className="ps-2"> 
                <a className="navbar-link-underline"
                  onClick={() => {
                    actions.logout();
                  }}
                >Cerrar Sesión
                </a>
              </li>
            </ul>
          ) : (
            <ul
              className="dropdown-menu dropdown-menu-end"
              id="profile-dropdown"
              aria-labelledby="dropDownMenu"
            >
              <Link to="/loginPage">
                <li className="ps-2">
                  Iniciar Sesión
                </li>
              </Link>
              <Link to="/signupPage">
                <li className="ps-2">
                  Registrarse
                </li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
