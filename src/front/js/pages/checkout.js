import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/checkout.css";
import { Login } from "../component/login";
import { Signup } from "../component/signup";

export const Checkout = () => {
  const { store, actions } = useContext(Context);
  const [total, setTotal] = useState(0);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);

  useEffect(()=>{
    setId(localStorage.getItem("ID"));
  }, [])

  useEffect(() => {
    let totalAux = 0
    {store.services.map((service) => {
      if (service.service.selected == true){
      totalAux = ((totalAux) + ((service.service.price*(100-service.service.discount)/100)*service.service.qty))
      }
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

  return (
    <div className="frame01 container my-4">
      <h2> Checkout </h2>
      <div className="frame02 container mt-4">
      <div className="addServices mt-5"><h4>Servicios seleccionados</h4></div>
        {store.services.map((service, i) => {
          if (service.service.selected){
          return (
            <div key={service.service.id} className="frame03 row my-2">
              <div className="frame04A col-sm-1 my-2 justify-content-center">
              {<img
                src={service.service.service_cover_url}
                className="imgCard"
                alt={service.service.name}
                width="50px"
                height="50px"
              />}
              </div>
                <div className="col-sm-4 p-1 d-flex align-items-center">  
                {service.service.name}</div>
                <div className="col-sm-4 p-1 d-flex align-items-center">
                {service.service.discount>0 ? 
                    <div className= "container d-flex flex-row justify-content-end align-items-center mx-2">
                        <div className="oldPrice mx-2">{service.service.price} € </div> 
                        <div className="discount mx-2 px-2">{service.service.discount} %</div> 
                        <div className="price mx-2 px-2">{(service.service.price*(100-service.service.discount)/100)} €</div>
                    </div> : 
                    <div className= "container d-flex flex-row justify-content-end align-items-center mx-2">
                    <div className="oldPrice mx-2"></div> 
                    <div className="discount mx-2"></div> 
                    <div className="price mx-2 px-2">{(service.service.price*(100-service.service.discount)/100)} €</div>
                    </div>
                }
                </div>
                  <div className="frame06B col-sm-2 container d-flex flex-row-reverse align-items-center">
                    <button
                      className="btn btn-light m-1"
                      onClick={() => {
                        if (service.service.qty<9){
                          actions.servicesQtyChange(service.service.id,0,"up");
                        }
                        else setError(service.service.id)
                      }}
                    >+
                    </button>
                    <input
                      value={service.service.qty}
                      type="number"
                      min="1"
                      max="9"
                      step="1"
                      name="quantity"
                      className="qty form-control text-center m-1"
                      onChange={(evt) => {
                        const re = /[0-9]/;
                        if (re.test(evt.target.value)&&(evt.target.value<10)&&(evt.target.value>0)) {
                          actions.servicesQtyChange(service.service.id, evt.target.value, null)
                        }
                        else setError(service.service.id)
                      }}
                    />
                    <button
                      href="#"
                      className="btn btn-light m-1"
                      data-bs-toggle={service.service.modal_selected_KO}
                      data-bs-target={"#staticBackdrop"+service.service.id}
                      onClick={() => {
                        if (service.service.qty>1){
                          actions.servicesQtyChange(service.service.id,0,"down");
                        }
                        else setError(service.service.id)
                      }}
                    >
                      -
                    </button>
                  </div>
                  <div className="col-sm-1 p-1 d-flex align-items-center justify-content-end">
                    {(service.service.price*(100-service.service.discount)/100)*service.service.qty} €
                  </div>
                    
                <div className="row text-center">
                    <p>{service.service.qty_error}</p>
                </div>
                {/* <!-- Modal --> */}
                <div className="modal fade" id={"staticBackdrop"+service.service.id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Eliminar servicio</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div className="modal-body">
                          {service.service.name}
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">No</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
                              actions.serviceSelectedKO(service.service.id);
                            }}>Si</button>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
          );}
        })}
        <div className="total row">
          <div className="col-sm-9">
            Total
          </div>
          <div className="col-sm-3 d-flex justify-content-end">
          {total} €
          </div>
        </div>
{/* Añade más servicios */}
        <div className="addServices mt-5"><h4>Añade más servicios</h4>
        </div>
        {store.services.map((service, i) => {
            if (!service.service.selected) {
              return (
                <div key={service.service.id} className="frame03 row my-2">
                  <div className="frame04A col-sm-1 my-2 justify-content-center">
                  {<img
                    src={service.service.service_cover_url}
                    className="imgCard"
                    alt={service.service.name}
                    width="50px"
                    height="50px"
                  />}
                  </div>
                    <div className="col-sm-4 p-1 d-flex align-items-center">  
                    {service.service.name}</div>
                    <div className="col-sm-4 p-1 d-flex align-items-center">
                    {service.service.discount>0 ? 
                        <div className= "container d-flex flex-row justify-content-end align-items-center mx-2">
                            <div className="oldPrice mx-2">{service.service.price} € </div> 
                            <div className="discount mx-2 px-2">{service.service.discount} %</div> 
                            <div className="price mx-2 px-2">{(service.service.price*(100-service.service.discount)/100)} €</div>
                        </div> : 
                        <div className= "container d-flex flex-row justify-content-end align-items-center mx-2">
                        <div className="oldPrice mx-2"></div> 
                        <div className="discount mx-2"></div> 
                        <div className="price mx-2 px-2">{(service.service.price*(100-service.service.discount)/100)} €</div>
                        </div>
                    }
                    </div>
                      <div className="frame06B col-sm-2 container d-flex justify-content-center align-items-center">
                        <button
                          className="btn btn-light m-1"
                          onClick={() => {
                            actions.serviceSelected(service.service.id)
                          }}
                        >+
                        </button>
                      </div>
                      <div className="col-sm-1">
                      </div>
                        
                    <div className="row text-center">
                        <p>{service.service.qty_error}</p>
                    </div>
                </div>         
          )
          }
        })}
{/* Login y pago */}
        {localStorage.getItem("ID") ?
        <div className="addServices mt-5"><h4>Pago</h4>
          <button className="btn btn-light" onClick={()=>{actions.createCheckoutSession(JSON.stringify(store.services_selected))}}>
                  Ir a página de pago
          </button>
        </div> :
            <div>
                  <div className="addServices mt-5"><h4>Datos personales</h4>
                    </div>
                    <div>
                        <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-login-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Log in</button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-signup-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Crear cuenta</button>
                          </li>
                        </ul>
                        <div className="tab-content" id="pills-tabContent">
                          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-login-tab"><Login push={false}/></div>
                          <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-signup-tab"><Signup push={false}/></div>
                        </div>
                    </div>
            </div>
}

  
{/* Cierres finales */}
  </div>
</div>
  );
};