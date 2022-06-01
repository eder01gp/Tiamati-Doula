import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Profile_company = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({ display: "block" });
  const [inputEmail, setInputEmail] = useState({ display: "none" });
  const [inputPassword, setInputPassword] = useState({ display: "none" });
  const [showPersonalInfo, setShowPersonalInfo] = useState({ display: "none" });

  useEffect(() => {
    actions.getUserInfo();
    actions.verify();
  }, []);

  const changeData = async () => {
    const response = await fetch(store.url + "/profile", {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const data = await response.json();
    actions.getUserInfo();
  };

  return (
    <div className="div1 container">
      <div>
        <div className="Change email-password m-auto">
          {/* Current user email & edit button*/}
          <div className="d-flex">
            <p className="mb-0 mt-2" style={userData}>
              Email: {store.user_info.email}
            </p>
            <button
              className="btn"
              style={userData}
              onClick={() =>
                setUserData({ display: "none" }) &
                setInputEmail({ display: "block" })
              }
            >
              <i className="fa-solid fa-pen-to-square mx-2"></i>
            </button>
          </div>

          {/* "Password" & edit button*/}
          <div className="d-flex">
            <p style={userData} className="mt-3">
              Contraseña: ·······
            </p>
            <button
              className="btn"
              style={userData}
              onClick={() =>
                setUserData({ display: "none" }) &
                setInputPassword({ display: "block" })
              }
            >
              <i className="fa-solid fa-pen-to-square mx-2"></i>
            </button>
          </div>

          {/* Email Input */}
          <input
            type="email"
            className="mb-0"
            style={inputEmail}
            placeholder="Nuevo email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          {/* Password Input */}
          <input
            type="password"
            style={inputPassword}
            placeholder="Nueva contraseña"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />

          {/* INPUTS BUTTONS */}
          <div className="btn btn-group">
            {/* Save & Close Email edit */}
            <button
              className="save-button btn btn-primary mb-5 rounded"
              type="submit"
              style={inputEmail}
              onClick={() => {
                changeData() &
                  setInputEmail({ display: "none" }) &
                  setUserData({ display: "block" });
              }}
            >
              Guardar
            </button>
            <button
              className="close-button btn btn-sm btn-secondary mb-5 mx-3 rounded"
              style={inputEmail}
              onClick={() =>
                setInputEmail({ display: "none" }) &
                setUserData({ display: "block" })
              }
            >
              Cerrar
            </button>
            {/* Save & Close Password edit */}
            <button
              className="save-button btn btn-primary mb-5 rounded"
              type="submit"
              style={inputPassword}
              onClick={() => {
                changeData() &
                  setInputPassword({ display: "none" }) &
                  setUserData({ display: "block" });
              }}
            >
              Guardar
            </button>
            <button
              className="close-button btn btn-sm btn-secondary mb-5 mx-3 rounded"
              style={inputPassword}
              onClick={() =>
                setInputPassword({ display: "none" }) &
                setUserData({ display: "block" })
              }
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
      <div className="PERSONAL-INFO-OF-THE-COMPANY">
        <button
          className="btn btn-outline-secondary"
          onClick={() => setShowPersonalInfo({ display: "block" })}
        >
          Información Personal
        </button>
        <div style={showPersonalInfo}>
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
      </div>
      <div className="DELETE-ACCOUNT-BUTTON mt-5">
        <button
          className="btn btn-secondary"
          onClick={() => actions.deleteUser()}
        >
          Eliminar cuenta
        </button>
      </div>
    </div>
  );
};
