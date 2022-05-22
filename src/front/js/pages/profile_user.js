import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Form } from "./form";

export const Profile_user = () => {
  const { store, actions } = useContext(Context);
  const [showForm, setShowForm] = useState({ display: "none" });
  const [showServices, setShowServices] = useState({ display: "none" });

  useEffect(() => {
    actions.getUsers();
  }, []);
  console.log(store.users);

  return (
    <div className="div1 container">
      {store.users.map((user) => {
        return (
          <div key={user.id}>
            <div className="EmailContraseña m-auto">
              <p className="mb-0">email: {user.email}</p>
              <p>
                contraseña: {user.password}
                <button className="btn">
                  <i className="fa-solid fa-pen-to-square"></i>
                </button>
              </p>
            </div>
            <div className="Menu form and services">
              <div className="btn-group justify-content-center" role="group">
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    setShowForm({ display: "block" }) &
                      setShowServices({ display: "none" });
                  }}
                >
                  Información Personal
                </button>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => {
                    setShowForm({ display: "none" }) &
                      setShowServices({ display: "block" });
                  }}
                >
                  Mis servicios
                </button>
              </div>
              <div className="PersonalData mt-5" style={showForm}>
                <Form />
              </div>
              <div className="Services mt-5" style={showServices}>
                <h5>
                  <u>SERVICIOS CONTRATADOS</u>
                </h5>
                Se mostrarán los servicios contratados o: 'Aún no has contratado
                servicios, ¿quieres{" "}
                <Link to="/services">navegar por nuestra web?</Link> '
              </div>
            </div>
            <div className="Delete account mt-5">
              <button
                className="btn btn-secondary" /*  onClick={delete user}  */
              >
                Eliminar cuenta
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
