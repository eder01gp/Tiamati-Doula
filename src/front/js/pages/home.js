import React, { useContext, useEffect, useState, useRef} from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import logo from "../../../img/logo/logo.png";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  const inputRef00 = useRef()
  const inputRef01 = useRef()
  const inputRef02 = useRef();
  const inputRef03 = useRef();
  const [minHeight, setMinHeight] = useState(0);

  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
  }
  useEffect(() => {
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
  }, []);


  const minHeightCarrousel = () => {
    inputRef01.current.classList.add("active")
    inputRef02.current.classList.add("active")
    inputRef03.current.classList.add("active")
    const divHeight00 = inputRef01.current.clientHeight
    setMinHeight(divHeight00+28)
    inputRef02.current.classList.remove("active")
    inputRef03.current.classList.remove("active")
  }

  useEffect(()=>{
    minHeightCarrousel();
  },[width])

  useEffect(()=>{
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[])

  return (
    <div className="div-home container">
      {/* header */}
      <div id="header" className="row">
        <div id="header-logo">
          <img id="logo-tiamati" src={logo} alt="logo tiamati" />
        </div>
        <div id="header-img" style={{ transform: `translateY(${offsetY * 0.5}px)` }}>
        </div>
      </div>

      {/* What is Tiamati */}
      <div className="row py-3">
        <div id="what-is-tiamati" className="col-sm text-center p-2 m-2">
          <h2>¿Necesitas una Doula?</h2>
          <p id="what-is-tiamati-text" className="p-2">
            Un servicio de acompañamiento a la mujer embarazada y a la
            pareja. Un apoyo incondicional durante todo el embarazo, basado en
            evidencias científicas, para empoderar a la mujer y potenciar un
            embarazo tranquilo y placentero.
          </p>          
{/*           <h4>La ciencia nos dice:</h4>
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
          </div> */}
        </div>
      {/* free appointment */}
        <div id="free-appointment" className="col-sm text-center p-2 m-2">
          <h2>
            ¿Nos conocemos?
          </h2>
          <div>
          <p id="free-appointment-text">Sin ningún compromiso</p>
          <Link to="/appoinment">
            <button className="fill">Pide tu cita</button>
          </Link>  
          </div>
        </div>
      </div>
      {/* bio */}
      <div id="bio" className="row py-3 d-flex align-items-center">
        <div id="bio-hello-text" className="col mx-3 d-flex flex-column justify-content-around">
          <div className="mt-2">
            <h2 >¡Hola!<br/>¡Soy Margarida!</h2>
          </div>
          <div className="">
            <Link to="/bio">
              <button id="bio-button" className="fill m-3">
                Esta es mi historia
              </button>
            </Link>
          </div>
        </div>
        <div id="bio-picture" className="col-4">
        </div>
      </div>
      {/* services */}
      <div className="row py-3">
        <div className="father-display-table">
            <div id="services-title" className="child-display-cell text-center m-4">
              <h2>Estos son los servicios que ofrezco:</h2>
            </div>
        </div>
      </div>
      <div id="services" className="row d-flex justify-content-around py-3">
        {store.services.map((serv) => {
          return (
            <div key={serv.id} className="card service-card my-4 mx-2">
              <img
                className="card-img-top"
                src={serv.service.service_cover_url}
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">{serv.service.name}</h5>
                <p className="card-text">{serv.service.description_short}</p>
              </div>
              <div className="d-flex justify-content-between">
              <Link to={"/services/#"+serv.service_id}>
                <button class="slide">
                  <div>Leer más</div>
                  <i class="icon-arrow-right"></i>
                </button >
              </Link> 
              <Link to="/checkout">
                <button className="fill" id="btn-I-want-service" onClick={() => {actions.serviceSelected(serv.service_id)}}>
                    Lo quiero!
                </button> 
              </Link>
              </div>
            </div>
          );
        })}
      </div>
      <div className="row pt-3">
        <div className="father-display-table">
            <div id="services-title" className="child-display-cell text-center m-4">
              <h2>Y esto es lo que las acompañadas opinan:</h2>
            </div>
        </div>
      </div>
      {/* reviews */}
      <div id="reviews" className="row mb-5 mt-2 px-2" >
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          ref={inputRef00} 
          style={{"minHeight":`${minHeight}px`}}
        >
          <div className="carousel-inner" >
            <div key={1} className="carousel-item active" ref={inputRef01} >
              <p>
              Hola me llamo Greisy, estoy embarazada por primera vez, al inicio estaba muy temerosa pues no sabía qué hacer, ni cómo comportarme en cada situación, pero gracias a Dios apareció Margarida mi Doula, que me ha ayudado grandemente, me ha orientado en cada una de mis dudas, en cada una de las diferentes situaciones y etapas de todo el proceso de gestación, realmente la recomiendo mucho, sus conocimientos son maravillosos, además cabe mencionar que es súper amable y dedicada en su empeño y trabajo para informar siempre de todas las posibilidades que tenemos para cada situación en la que nos encontramos en el embarazo y dejar que elijas la más adecuada para ti y tu bebé. Además de  todo lo anterior les aseguro que perdí gran parte del temor a este proceso gracias a su apoyo y ayuda incondicionales. Muchas gracias por esta gran labor y amor por lo que haces. Bendiciones 😘
              <br/>
              <strong>Greisy y Fernando</strong>
              </p>
            </div>
            <div key={2} className="carousel-item" ref={inputRef02}>
              <p>
              Tuve la gran suerte de contar con el acompañamiento fresco de Margarida en mi primer embarazo. Estuvo en todo momento disponible para nosotros, asistiendonos en todas las dudas que fueron surgiendo. Al principio enmarcando todas esas sensaciones nuevas para mí. Después ayudándonos a encontrar recursos, preparar el plan de parto. También compartimos la foto de mi barriga pintada, un momento/ritual muy importante para mi. Contar con su presencia y Alegría fue un regalo para mí y, no menos importante, para mi compañero. Porque... a veces se olvida, o incluso se menosprecia el papel del hombre y ¡es fundamental en el proceso! Esto es algo que Margarida sabe bien. 
              ❤️Siempre agradecidos. ❤️
              <br/>
              <strong>Doris y Alvaro</strong>
              </p>
            </div>
            <div key={3} className="carousel-item" ref={inputRef03}>
              <p>
              Quiero mostrar mi agradecimiento personal a Margarida, decirte que tienes una profesion preciosa e importante, estoy sumamente agradecida por acompañarme en mi embarazo y que supo conectar conmigo desde el comienzo, a pesar de mis miedos por la mala experiencia de mi anterior embarazo "mis antecedentes obstétricos". Margarida me diste las herramientas necesarias para poder llevar un embarazo hermoso, me diste esa confianza para perder el miedo y sentirme una mujer empoderada y hacerme conocer mis derechos, gracias por tu energía positiva, por tus consejos, por que siempre estuviste ahí cuando te necesité.
              <br/>
              <strong>Liz</strong>
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
      <div className="row mx-2">
           {/* documents */}
          <div id="documents" className="d-flex justify-content-center">
            <img
              id="documents-img"
              className="m-4"
              src="https://res.cloudinary.com/dxeieqxam/image/upload/c_scale,w_100/v1655462293/Home/Guia-para-embazadas_dnyevj.jpg"
              alt=""
            />
            <div className="father-display-table">
              <div id="documents-right  text-center m-2" className="child-display-cell">
                <p>Regístrate y accede a tu guía para embarazadas</p>
                <Link to="/loginPage">
                  <button className="fill ms-5" id="btn-get-doc">Obtener</button>
                </Link>
              </div>
            </div>
          </div>
      </div>
      {/* FAQ */}
      <div id="faq-home" className="row my-5">
        <img id="" src="" alt="" />
        <div id="faq-home-right">
          <h3>¿Tienes dudas?</h3>
          <Link to="/faq">
            <button id="btn-faq"> <h2>FAQ</h2> </button>
          </Link>      
        </div>
      </div>
    </div>
  );
};
