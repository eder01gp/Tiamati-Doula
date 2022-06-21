import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/services.css";

export const Services = () => {
  const { store, actions } = useContext(Context);
  const [error, setError] = useState(null);

  useEffect(() => {
    actions.getServices();
  }, []);

  useEffect(() => {
    if (error!=null){    
      actions.serviceSelectedError(error);
      const timer = setTimeout(() => {
        actions.serviceSelectedErrorKO(error);
        setError(0);
      }, 3000);
      return (() => {
        clearTimeout(timer);
      })
    }
  }, [error]);

  if (store.services.length>0){
  return (
    <div key="01" className="container p-2" id="service-container">
      <h1> Servicios </h1>
        {store.services.map((service) => {
          return (
          <section id={service.service_id}>
          <div key={service.service_id} id="service-card" className="my-5" >
            <div className="row mx-3">
              <div className="col-sm-8 p-2">
                  <img
                    id="service-img"
                    src={service.service.service_cover_url}
                    className="imgCard card-img-top"
                    alt={service.service.name}
                    width="auto"
                    height="200px"
                  />
              </div>
              <div className="col p-2">
                  <h2 className="card-title">{service.service.name}</h2>
              </div>
            </div>
            <div className="row mx-3 pb-2">
              <div className="col-sm-6 p-2">
                  {service.service.description}
              </div>
              <div id="" className="col p-2 d-flex flex-column justify-content-between">
                  <div><h6>Qué incluye:</h6>{service.service.description_includes}</div>
                  <div id="">
                    <div className="framePrice p-1">
                      {service.service.discount>0 ? <div className= "d-flex flex-row justify-content-around"> <div className="oldPrice">{service.service.price} € </div> <div className="discount px-2">{service.service.discount} %</div> <div className="price px-2">{(service.service.price*(100-service.service.discount)/100)} €</div></div> : <div className="price px-2 text-center">{service.service.price} €</div>}
                    </div>
                    <div className="frame05 d-flex flex-row p-0">
                      <div className="frame06A w-75">
                        <Link to={"/checkout"}>
                          <button className="btn-I-want-service-service w-100" onClick={() => {
                            actions.serviceSelected(service.service_id)
                          }}>
                            Lo quiero
                          </button>
                        </Link>
                      </div>
                      <div className="frame06B w-25 container d-flex flex-row-reverse p-0">
                        <button
                          className="btn btn-light text-center w-25 p-1"
                          onClick={() => {
                            if (service.service.qty<9){
                              actions.servicesQtyChange(service.service_id,0,"up");
                            }
                            else setError(service.service_id)                        
                          }}
                        >+</button>
                        <input
                          value={service.service.qty}
                          type="number"
                          min="1"
                          max="9"
                          step="1"
                          name="quantity"
                          className="form-control text-center w-50 p-1"
                          onChange={(evt) => {
                            const re = /[0-9]/;
                            if (re.test(evt.target.value)&&(evt.target.value<10)&&(evt.target.value>0)) {
                              actions.servicesQtyChange(service.service_id, evt.target.value, null)
                            }
                            else setError(service.service_id)
                          }}
                        />
                        <button
                          href="#"
                          className="btn btn-light text-center w-25 p-1"
                          onClick={() => {
                            if (service.service.qty>1){
                            actions.servicesQtyChange(service.service_id,0,"down");
                            }
                            else setError(service.service_id)
                          }}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
          </section>
          );
        })}
    </div>
  );
}
else {
  return(<h4> No hay servicios para mostrar aún </h4>)
}
};
