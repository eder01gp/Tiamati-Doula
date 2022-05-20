import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Form } from "./form";

export const Profile = () => {
  const { store, actions } = useContext(Context);
  const [showForm, setShowForm] = useState({ display: "none" });
  const [showServices, setShowServices] = useState({ display: "none" });
  const [showData, setShowData] = useState({ display: "none" });

  /* {if (user.rol == "usuaria"){ */
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
      <div className="Menu form and services">
        <div className="btn-group justify-content-center" role="group">
          <button
            className="btn btn-outline-secondary"
            onClick={() => setShowForm({ display: "block" })}
          >
            Información Personal
          </button>
          <button
            className="btn btn-outline-secondary"
            onClick={() =>
              setShowForm({ display: "none" }) &
              setShowServices({ display: "block" })
            }
          >
            Mis servicios
          </button>
        </div>
        <div className="PersonalData mt-5" style={showForm}>
          <Form />
        </div>
        <div className="Services mt-5" style={showServices}>
          Se mostrarán los servicios contratados o: 'Aún no has contratado
          servicios, ¿quieres{" "}
          <Link to="/services">navegar por nuestra web?</Link> '
        </div>
      </div>
      <div className="Delete account mt-5">
        <button className="btn" /* onClick={delete(user)} */>
          Eliminar cuenta
        </button>
      </div>
    </div>
  );
  /*  }} else{
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
                Aquí iría info de perfil empresa
            </div>  
            <div className="Delete account mt-5">
                <button className="btn" /* onClick={delete(user)} >
                    Eliminar cuenta
                </button>
            </div>
        </div>    
   )  */
};
