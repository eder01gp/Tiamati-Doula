import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import service01 from "../../img/woman-doubts.jpg";
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

  return (
    <div className="frame01 container ">
      <h1> Servicios </h1>
      <div className="frame02 row d-flex overflow-auto justify-content-center flex-wrap">
        {store.services.map((service, i) => {
          return (
            <div key={service.service.id} className=" frame03 card my-2" style={{ width: "440px" }}>
              <img
                src={service01}
                className="imgCard card-img-top"
                alt={service.service.name}
                width="auto"
                height="200px"
              />
              <div className="frame04 card-body">
                <h6 className="card-title">{service.service.name}</h6>
                <p className="card-text">
                  {service.service.description}
                </p>
                <div className="framePrice p-1">
                {service.service.discount>0 ? <div className= "container d-flex flex-row justify-content-around"> <div className="oldPrice">{service.service.price} € </div> <div className="discount px-2">{service.service.discount} %</div> <div className="price px-2">{(service.service.price*(100-service.service.discount)/100)} €</div></div> : <div className="price px-2 text-center">{service.service.price} €</div>}
                </div>
                <div className="frame05 container d-flex flex-row p-0">
                  <div className="frame06A w-75">
                    <Link to={"/checkout"}>
                      <button className="btn btn-light w-100" onClick={() => {
                        actions.serviceSelected(service.service.id)
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
                          actions.serviceSelectedQtyChange(service.service.id,0,"up");
                        }
                        else setError(service.service.id)                        
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
                          actions.serviceSelectedQtyChange(service.service.id, evt.target.value, null)
                        }
                        else setError(service.service.id)
                      }}
                    />
                    <button
                      href="#"
                      className="btn btn-light text-center w-25 p-1"
                      onClick={() => {
                        if (service.service.qty>1){
                        actions.serviceSelectedQtyChange(service.service.id,0,"down");
                        }
                        else setError(service.service.id)
                      }}
                    >
                      -
                    </button>
                  </div>
                </div>
                <div className="text-center">
                    <p>{service.service.qty_error}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
