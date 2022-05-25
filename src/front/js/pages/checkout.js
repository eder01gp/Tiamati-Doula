import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import service01 from "../../../img/woman-doubts.jpg";
/* import docUrl01 from "/../../img/dum.pdf"; */
import "../../styles/checkout.css";

export const Checkout = () => {
  const { store, actions } = useContext(Context);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [modalSelectedKO, setModalSelectedKO] = useState("");

  useEffect(() => {
    let totalAux = 0
    {store.services.map((service) => {
      if (service.selected == true) {
      totalAux = ((totalAux) + ((service.price*(100-service.discount)/100)*service.qty))
      console.log(totalAux)
      };
    setTotal(totalAux);
    })}
  }, [store.services]);
  
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

  useEffect(() => {
  }, [store.services]);

  return (
    <div className="frame01 container my-4">
      <h2> Checkout </h2>
      <div className="frame02 container mt-4">
        {store.services.map((service, i) => {
        if (service.selected == true) {
          return (
            <div key={service.id} className="frame03 row my-2">
              <div className="frame04A col-sm-1 my-2 justify-content-center">
              {<img
                src={service01}
                className="imgCard"
                alt={service.name}
                width="50px"
                height="50px"
              />}
              </div>
                <div className="col-sm-4 p-1 d-flex align-items-center">  
                {service.name}</div>
                <div className="col-sm-4 p-1 d-flex align-items-center">
                {service.discount>0 ? 
                    <div className= "container d-flex flex-row justify-content-end align-items-center mx-2">
                        <div className="oldPrice mx-2">{service.price} € </div> 
                        <div className="discount mx-2 px-2">{service.discount} %</div> 
                        <div className="price mx-2 px-2">{(service.price*(100-service.discount)/100)} €</div>
                    </div> : 
                    <div className= "container d-flex flex-row justify-content-end align-items-center mx-2">
                    <div className="oldPrice mx-2"></div> 
                    <div className="discount mx-2"></div> 
                    <div className="price mx-2 px-2">{(service.price*(100-service.discount)/100)} €</div>
                    </div>
                }
                </div>
                  <div className="frame06B col-sm-2 container d-flex flex-row-reverse align-items-center">
                    <button
                      className="btn btn-light m-1"
                      onClick={() => {
                        if (service.qty<9){
                          actions.serviceSelectedQtyChange(service.id,0,"up");
                        }
                        else setError(service.id)
                      }}
                    >+
                    </button>
                    <input
                      value={service.qty}
                      type="number"
                      min="1"
                      max="9"
                      step="1"
                      name="quantity"
                      className="qty form-control text-center m-1"
                      onChange={(evt) => {
                        const re = /[0-9]/;
                        if (re.test(evt.target.value)&&(evt.target.value<10)&&(evt.target.value>0)) {
                          actions.serviceSelectedQtyChange(service.id, evt.target.value, null)
                        }
                        else setError(service.id)
                      }}
                    />
                    <button
                      href="#"
                      className="btn btn-light m-1"
                      data-bs-toggle={modalSelectedKO} 
                      data-bs-target="#staticBackdrop"
                      onClick={() => {
                        console.log(service.selected)
                        if (service.qty==1){
                          setModalSelectedKO("modal");
                        }
                        else if (service.qty>1){
                          actions.serviceSelectedQtyChange(service.id,0,"down");
                          }
                        else setError(service.id)
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="col-sm-1 p-1 d-flex align-items-center justify-content-end">
                    {(service.price*(100-service.discount)/100)*service.qty} €
                  </div>
                    
                <div className="row text-center">
                    <p>{service.error}</p>
                </div>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Eliminar servicio</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                            ...
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
                              actions.serviceSelectedKO(service.id);
                              console.log(service.selected)
                            }}>Si</button>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
          );
        }})}
        <div className="total row">
          <div className="col-sm-9">
            Total
          </div>
          <div className="col-sm-3 d-flex justify-content-end">
          {total} €
          </div>
        </div>
        <div className="addServices row mt-5"><h4>Añade más servicios</h4></div>
        
        {store.services.map((service, i) => {
            if (service.selected != true) {
              return (
                <div key={service.id} className="frame03 row my-2">
                  <div className="frame04A col-sm-1 my-2 justify-content-center">
                  {<img
                    src={service01}
                    className="imgCard"
                    alt={service.name}
                    width="50px"
                    height="50px"
                  />}
                  </div>
                    <div className="col-sm-4 p-1 d-flex align-items-center">  
                    {service.name}</div>
                    <div className="col-sm-4 p-1 d-flex align-items-center">
                    {service.discount>0 ? 
                        <div className= "container d-flex flex-row justify-content-end align-items-center mx-2">
                            <div className="oldPrice mx-2">{service.price} € </div> 
                            <div className="discount mx-2 px-2">{service.discount} %</div> 
                            <div className="price mx-2 px-2">{(service.price*(100-service.discount)/100)} €</div>
                        </div> : 
                        <div className= "container d-flex flex-row justify-content-end align-items-center mx-2">
                        <div className="oldPrice mx-2"></div> 
                        <div className="discount mx-2"></div> 
                        <div className="price mx-2 px-2">{(service.price*(100-service.discount)/100)} €</div>
                        </div>
                    }
                    </div>
                      <div className="frame06B col-sm-2 container d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-light m-1"
                          onClick={() => {
                            actions.serviceSelected(service.id)
                          }}
                        >+
                        </button>
                        

                      </div>
                      <div className="col-sm-1">
                      </div>
                        
                    <div className="row text-center">
                        <p>{service.error}</p>
                    </div>
                </div>         
          )
          }
        })}
        
        
      </div>
    </div>   
  );
};