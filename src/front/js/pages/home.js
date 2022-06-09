import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import logo from "../../../img/logo/logo.png";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="div-home container">
      {/* header */}
      <div id="header" className="row">
        <div id="header-logo">
          <img id="logo-tiamati" src={logo} alt="logo tiamati" />
        </div>
        <div id="header-img"></div>
      </div>

      {/* What is Tiamati */}
      <div id="what-is-tiamati" className="row text-center">
        <p id="what-is-tiamati-text">
          Tiamati es un servicio de acompañamiento a la mujer embarazada y a la
          pareja. Un apoyo incondicional durante todo el embarazo, basado en
          evidencias científicas, para empoderar a la mujer y potenciar un
          embarazo tranquilo y placentero
        </p>

        <h2>¿Necesitas una Doula?</h2>
        <h4>La ciencia nos dice:</h4>
        <div id="benefits" className="row">
          <div id="benefits-left" className="col-6">
            <img
              className="benefits-arrow"
              src="https://th.bing.com/th/id/R.c18ea882d9fb63866c0f77151fa013e9?rik=%2bxBr2Nyu6%2fc6hg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_155466.png&ehk=ZFAJlKPtcm%2bDZ%2faDLx7oenbSXUAc1P0%2bUSDrahxcRmE%3d&risl=&pid=ImgRaw&r=0"
              alt="arrow"
            />
            <div className="benefits-text">
              <h6>28% menos de cesáreas</h6>
              <h6>31% menos uso de pitocin</h6>
              <h6>9% menos uso de medicacion</h6>
              <h6>Partos 40 minutos más cortos</h6>
            </div>
          </div>
          <div id="benefits-right" className="col-6">
            <img
              className="benefits-arrow"
              src="https://th.bing.com/th/id/R.faaa5a285136fd4a98d24365beaa3bf7?rik=UveaSIN8Fxpktg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fdownload_424749.png&ehk=0VfQbRVcZNL1ViSOrCahJNW75NNRte2lhP2O%2b6xlirQ%3d&risl=&pid=ImgRaw&r=0"
              alt="arrow"
            />
            <div className="benefits-text">
              <h6>34% experiencias más positivas</h6>
              <h6>Mejor APGAR en el bebé</h6>
            </div>
          </div>
        </div>
      </div>

      {/* free appointment */}
      <div id="free-appointment" className="row text-center">
        <h2 id="first-appointment-text">
          ¿Nos conocemos primero a ver que tal?
        </h2>
        <Link to="/calendar">
          <button className="btn btn-light">Pide tu cita</button>
        </Link>
        <h3>Sin ningún compromiso</h3>
      </div>

      {/* bio */}
      <div id="bio" className="row">
        {/* <div id="hello-text"> */}
        {/* <h3>¡Hola! ¡Soy Margarida!</h3>
          <Link to="/bio">
            <button className="btn btn-primary bio-button">
              Esta es mi historia
            </button>
          </Link> */}
        {/* </div> */}
      </div>

      {/* services */}
      <div id="services" className="row">
        {store.services.map((serv) => {
          return (
            <div key={serv.id} className="card service-card">
              <img
                className="card-img-top"
                src="https://images.unsplash.com/photo-1585010873004-923f9a54e54e?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{serv.service.name}</h5>
                <p className="card-text">{serv.service.description}</p>
              </div>
              <div className="card-body">
                <div>
                  <h6>Incluye</h6>
                  <p>{serv.service.description_includes}</p>
                </div>
                <Link to="/services">
                  <button className="btn btn-success">Leer más</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* documents */}
      <div id="documents" className="row">
        <img
          id="documents-img"
          className="col-4"
          src="https://2.bp.blogspot.com/-8rtaDBkKiDI/WP9MgLhYCmI/AAAAAAAALMU/eq-cb_mXsmQKISq1JzNvEm7G3N-XvVaFACLcB/s1600/Guia-para-embazadas.JPG"
          alt=""
        />
        <div id="documents-right" className="col-4">
          <h4>Regístrate y accede a tu guía para embarazadas</h4>
          <Link to="/documents">
            <button className="btn btn-primary btn-lg">Obtener</button>
          </Link>
        </div>
      </div>

      {/* reviews */}
      <div id="reviews" className="row">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div key={1} className="carousel-item active">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                interdum dictum neque vel volutpat. Etiam urna justo, luctus a
                mattis id, sollicitudin eget massa. Sed maximus ut orci non
                scelerisque. Nam at blandit mauris, tincidunt tempus sem. Fusce
                posuere arcu tellus, et rutrum elit sodales et. Nunc malesuada,
                arcu eu cursus viverra, tellus nibh ornare nulla, et viverra
                urna tortor nec elit. Donec facilisis nec enim eget pharetra.
                Donec varius nibh non rhoncus congue. Donec lacinia tortor nisl,
                quis imperdiet neque ullamcorper id.
              </p>
            </div>
            <div key={2} className="carousel-item">
              <p>
                Aenean sagittis dolor quis turpis efficitur consequat. Nulla ex
                velit, laoreet in faucibus et, finibus eu mauris. Duis sodales
                augue et pretium vulputate. Sed imperdiet elit justo, eget
                porttitor neque tincidunt ac. Ut sodales facilisis nisl. Proin
                suscipit bibendum elementum. Nulla at erat eget ex ultricies
                rutrum. Mauris lacinia accumsan risus, quis sagittis sem semper
                pellentesque. Nam cursus massa ex, interdum egestas mi pharetra
                id. Vivamus tincidunt massa sit amet dui imperdiet
              </p>
            </div>
            <div key={3} className="carousel-item">
              <p>
                Pellentesque facilisis lectus id velit ultrices mollis. Fusce in
                nibh nec magna facilisis tempor. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Aliquam est dui, pretium in
                molestie non, venenatis fringilla justo. Aliquam laoreet gravida
                fringilla. Nullam in ligula consequat, sollicitudin turpis in,
                scelerisque ligula. Mauris nec dapibus nibh. Vivamus porta odio
                id molestie tincidunt. Duis malesuada gravida mauris, vel mollis
                tortor imperdiet nec.
              </p>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div id="faq-home" className="row">
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
