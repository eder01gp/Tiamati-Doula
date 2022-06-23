import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Profile_company = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState(true);
  const [inputEmail, setInputEmail] = useState(false);
  const [inputPassword, setInputPassword] = useState(false);
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);

  useEffect(() => {
    actions.verify();
    actions.getUserInfo();
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
    <div className="div-profile container">
      <div>
        <div className="Change email-password m-auto mt-5 mb-5">
          {/* Current user email & edit button*/}
          {userData ? (
            <div className="d-flex">
              <p className="mb-0 mt-2">Email: {store.user_info.email}</p>
              <button
                className="btn"
                onClick={() => {
                  setUserData(false);
                  setInputEmail(true);
                }}
              >
                <i className="fa-solid fa-pen-to-square mx-2"></i>
              </button>
            </div>
          ) : null}

          {/* "Password" & edit button*/}
          {userData ? (
            <div className="d-flex">
              <p className="mt-3">Contraseña: ·······</p>
              <button
                className="btn"
                onClick={() => {
                  setUserData(false);
                  setInputPassword(true);
                }}
              >
                <i className="fa-solid fa-pen-to-square mx-2"></i>
              </button>
            </div>
          ) : null}

          {/* Email Input */}
          {inputEmail ? (
            <input
              type="email"
              className="mb-0"
              placeholder="Nuevo email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
          ) : null}
          {/* Password Input */}
          {inputPassword ? (
            <input
              type="password"
              placeholder="Nueva contraseña"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
          ) : null}

          {/* INPUTS BUTTONS */}
          {/* Save & Close Email edit */}
          {inputEmail ? (
            <div className="buttons mt-2 mb-5">
              <button
                className="save-button btn btn-primary btn-sm rounded"
                type="submit"
                onClick={() => {
                  changeData();
                  setInputEmail(false);
                  setUserData(true);
                }}
              >
                Guardar
              </button>

              <button
                className="close-button btn btn-sm btn-secondary mx-3 rounded"
                onClick={() => {
                  setInputEmail(false);
                  setUserData(true);
                }}
              >
                Cerrar
              </button>
            </div>
          ) : null}

          {/* Save & Close Password edit */}
          {inputPassword ? (
            <div className="buttons mt-2 mb-5">
              <button
                className="save-button btn btn-sm btn-primary rounded"
                type="submit"
                onClick={() => {
                  changeData();
                  setInputPassword(false);
                  setUserData(true);
                }}
              >
                Guardar
              </button>

              <button
                className="close-button btn btn-sm btn-secondary mx-3 rounded"
                onClick={() => {
                  setInputPassword(false);
                  setUserData(true);
                }}
              >
                Cerrar
              </button>
            </div>
          ) : null}
        </div>
      </div>
      <div className="PERSONAL-INFO-OF-THE-COMPANY">
        <button
          className="btn btn-outline-secondary"
          onClick={() => setShowPersonalInfo(true)}
        >
          Información Personal
        </button>
        {showPersonalInfo ? (
          <div>
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
        ) : null}
      </div>
      <div className="DELETE-ACCOUNT-BUTTON mt-5">
        <button
          className="btn btn-secondary"
          data-bs-toggle="modal"
          data-bs-target="#deleteUser"
        >
          Eliminar cuenta
        </button>
      </div>

      {/* <--Modal--> */}
      <div
        className="modal fade"
        id="deleteUser"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="deleteUserLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteUserLabel">
                Eliminar cuenta
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              ¿Estás segura de que quieres eliminar tu cuenta?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={() => {
                  actions.deleteUser();
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
