import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";
import logo from "/workspace/Tiamati-Doula/src/img/logo/logo.png";
import flowers from "/workspace/Tiamati-Doula/src/img/logo/flowers.jpg";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      {/* header */}
      <div id="header">
        <div id="header-logo">
          <img id="logo-tiamati" src={logo} alt="logo tiamati" />
        </div>
        <div>
          <img id="header-img" src={flowers} alt="" />
        </div>
      </div>

      {/* What is Tiamati */}
      <div id="what-is-tiamati" className="text-center">
        <p id="what-is-tiamati-text">
          Tiamati es un servicio de acompañamiento a la mujer embarazada y a la
          pareja. Un apoyo incondicional durante todo el embarazo, basado en
          evidencias científicas, para empoderar a la mujer y potenciar un
          embarazo tranquilo y placentero
        </p>

        <h2>¿Necesitas una Doula?</h2>
        <h4>La ciencia nos dice:</h4>
        <div id="benefits" className="d-flex">
          <div id="benefits-left" className="d-flex">
            <img
              className="benefits-arrow"
              src="https://th.bing.com/th/id/R.c18ea882d9fb63866c0f77151fa013e9?rik=%2bxBr2Nyu6%2fc6hg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_155466.png&ehk=ZFAJlKPtcm%2bDZ%2faDLx7oenbSXUAc1P0%2bUSDrahxcRmE%3d&risl=&pid=ImgRaw&r=0"
              alt="arrow"
            />
            <div>
              <h6>28% menos de cesáreas</h6>
              <h6>31% menos uso de pitocin</h6>
              <h6>9% menos uso de medicacion</h6>
              <h6>Partos 40 minutos más cortos</h6>
            </div>
          </div>
          <div id="benefits-right" className="d-flex">
            <img
              className="benefits-arrow"
              src="https://th.bing.com/th/id/R.faaa5a285136fd4a98d24365beaa3bf7?rik=UveaSIN8Fxpktg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_424749.png&ehk=0VfQbRVcZNL1ViSOrCahJNW75NNRte2lhP2O%2b6xlirQ%3d&risl=&pid=ImgRaw&r=0"
              alt="arrow"
            />
            <div>
              <h6>28% menos de cesáreas</h6>
              <h6>31% menos uso de pitocin</h6>
              <h6>9% menos uso de medicacion</h6>
              <h6>Partos 40 minutos más cortos</h6>
            </div>
          </div>
        </div>
      </div>

      {/* free appointment */}
      <div id="free-appointment" className="text-center">
        <h2 id="first-appointment-text">
          ¿Nos conocemos primero a ver que tal?
        </h2>
        <Link to="/calendar">
          <button className="btn btn-light">Pide tu cita</button>
        </Link>
        <h3>Sin ningún compromiso</h3>
      </div>

      {/* bio */}
      <div id="bio">
        <h3 id="hello-text">¡Hola! ¡Soy Margarida!</h3>
        <Link to="/bio">
          <button className="btn btn-light bio-button">
            Esta es mi historia
          </button>
        </Link>
      </div>

      {/* services */}
      <div id="services">
        {store.services.map((serv) => {
          return (
            <div className="card service-card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1457342813143-a1ae27448a82?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{serv.name}</h5>
                <p className="card-text">{serv.description}</p>
              </div>
              <div className="card-body">
                <div>
                  <h6>Incluye</h6>
                  <p>{serv.includes}</p>
                </div>
                <Link to="/servicios">
                  <button className="btn btn-success">Leer más</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* documents */}
      <div id="documents" className="d-flex">
        <img
          id="documents-img"
          src="https://2.bp.blogspot.com/-8rtaDBkKiDI/WP9MgLhYCmI/AAAAAAAALMU/eq-cb_mXsmQKISq1JzNvEm7G3N-XvVaFACLcB/s1600/Guia-para-embazadas.JPG"
          alt=""
        />
        <div id="documents-right">
          <h3>Regístrate y accede a tu guía para embarazadas</h3>
          <Link to="/documents">
            <button className="btn btn-primary btn-lg">Obtener</button>
          </Link>
        </div>
      </div>

      {/* reviews */}
      <div id="reviews">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p>
                "Donec tincidunt nibh vel purus ultrices, eget ullamcorper nibh
                maximus. Nullam vitae risus mi. Mauris iaculis sodales suscipit.
                Ut euismod mauris dolor, ut mollis massa elementum dapibus. Cras
                vitae iaculis nisl. Donec eget tellus vitae orci ultricies
                auctor. Etiam nunc tellus, rutrum nec diam a, bibendum posuere
                elit. Sed sit amet nibh scelerisque purus mattis convallis.
                Suspendisse ac dui orci. Maecenas ultrices erat nec quam laoreet
                mollis. Donec sit amet purus accumsan turpis eleifend finibus.
                Donec nec elit quis felis ullamcorper facilisis. Curabitur
                sagittis nulla ante, ac bibendum massa tempus sed. Morbi
                consequat ac ipsum ac lobortis. Maecenas at augue diam."
              </p>
            </div>
            <div className="carousel-item">
              <p>
                "Nullam vitae risus mi. Mauris iaculis sodales suscipit. Ut
                euismod mauris dolor, ut mollis massa elementum dapibus. Cras
                vitae iaculis nisl. Donec eget tellus vitae orci ultricies
                auctor. Etiam nunc tellus, rutrum nec diam a, bibendum posuere
                elit. Sed sit amet nibh scelerisque purus mattis convallis.
                Suspendisse ac dui orci. Maecenas ultrices erat nec quam laoreet
                mollis. Donec sit amet purus accumsan turpis eleifend finibus.
                Donec nec elit quis felis ullamcorper facilisis. Curabitur
                sagittis nulla ante, ac bibendum massa tempus sed. Morbi
                consequat ac ipsum ac lobortis. Maecenas at augue diam."
              </p>
            </div>
            <div className="carousel-item">
              <p>
                "Ut mollis massa elementum dapibus. Cras vitae iaculis nisl.
                Donec eget tellus vitae orci ultricies auctor. Etiam nunc
                tellus, rutrum nec diam a, bibendum posuere elit. Sed sit amet
                nibh scelerisque purus mattis convallis. Suspendisse ac dui
                orci. Maecenas ultrices erat nec quam laoreet mollis. Donec sit
                amet purus accumsan turpis eleifend finibus. Donec nec elit quis
                felis ullamcorper facilisis. Curabitur sagittis nulla ante, ac
                bibendum massa tempus sed. Morbi consequat ac ipsum ac lobortis.
                Maecenas at augue diam."
              </p>
            </div>
          </div>
          <Link
            to="#carouselExampleIndicators"
            className="carousel-control-prev"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link
            to="#carouselExampleIndicators"
            className="carousel-control-next"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq-home">
        <img id="" src="" alt="" />
        <div id="faq-home-right">
          <h3>¿Tienes dudas?</h3>
          <h2>FAQ</h2>
          <Link to="/faq">
            <button className="btn btn-light btn-lg"> AQUÍ </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
