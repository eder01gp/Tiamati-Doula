import React, { Component, useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import service01 from "../../img/woman-doubts.jpg";
import "../../styles/services.css";

export const Services = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getServices();
  }, []);

  return (
    <div className="container">
      <h1> Servicios </h1>
      <div className="row d-flex flex-nowrap overflow-auto justify-content-center">
        {store.services.map((e, i) => {
          return (
            <div key={e.id} className="card m-2" style={{ width: "250px" }}>
              <img
                src={service01}
                className="card-img-top"
                alt={e.name}
                width="200"
              />
              <div className="card-body">
                <h6 className="card-title">{e.name}</h6>
                <p className="card-text">
                  {e.description}
                  <br />
                  {e.price}
                  <br />
                </p>
                <div className="container">
                  <div>
                    <Link to={"/"}>
                      <button className="btn btn-light" onClick={() => {}}>
                        Lo quiero
                      </button>
                    </Link>
                  </div>
                  <div>
                    <button
                      className="btn btn-light"
                      onClick={() => {
                        actions.serviceSelectedUp(e.id);
                        actions.serviceSelectedErrorKO(e.id);
                      }}
                    >
                      +
                    </button>
                    <input
                      value={e.qty}
                      type="number"
                      min="1"
                      max="9"
                      step="1"
                      name="quantity"
                      className="form-control"
                      onChange={(evt) => {
                        const re = /[0-9]/;
                        if (re.test(evt.target.value)&&(evt.target.value<10)&&(evt.target.value>0)) {
                          actions.serviceSelectedChange(e.id, evt.target.value)
                          actions.serviceSelectedErrorKO(e.id)
                        }
                        else{
                          actions.serviceSelectedError(e.id)
                        }
                      }}
                    />
                    <button
                      href="#"
                      className="btn btn-light"
                      onClick={() => {
                        actions.serviceSelectedDown(e.id);
                        actions.serviceSelectedErrorKO(e.id);
                      }}
                    >
                      -
                    </button>
                    

                  </div>
                  <div>
                    <p>{e.error}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
