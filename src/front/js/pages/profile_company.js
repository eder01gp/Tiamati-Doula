import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Profile_company = () => {
  const { store, actions } = useContext(Context);
  const [showData, setShowData] = useState({ display: "none" });

  return (
    <div className="div1 container">
      <div className="EmailContraseña m-auto">
        <p className="mb-0">email: example@email.com</p>
        <p>
          contraseña: ·········{" "}
          <button className="btn">
            <i className="fa-solid fa-pen-to-square"></i>
          </button>
        </p>
      </div>
      <button
        className="btn btn-outline-secondary"
        onClick={() => setShowData({ display: "block" })}
      >
        Información Personal
      </button>
      <div style={showData}>
        <div className="my-5">
          <h5>
            <u>EMPLEADOS</u>
          </h5>
          <p>Ver todos los EMPLEADOS(actuales y los que ya han estado)</p>
          <p>Cifras de utilización</p>
        </div>
        <div className="mb-5">
          <h5>
            <u>SERVICIOS CONTRATADOS</u>
          </h5>
          <p>Servicios contratados actualmente</p>
          <p>Contratar más servicios</p>
        </div>
        <div className="mb-5">
          <h5>
            <u>CÓDIGOS PROMOCIONALES</u>
          </h5>
          <p>Códigos comprados</p>
          <p>Códigos vencidos</p>
          <p>Enviar nuevos códigos a empleados</p>
        </div>
        <div className="mb-5">
          <h5>
            <u>BONOS</u>
          </h5>
          <p>Mis bonos</p>
        </div>
      </div>
      <div className="Delete account mt-5">
        <button className="btn btn-secondary" /*  onClick={delete user}  */>
          Eliminar cuenta
        </button>
      </div>
    </div>
  );
};
