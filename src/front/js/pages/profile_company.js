import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Profile_company = () => {
  const { store, actions } = useContext(Context);
  const [showData, setShowData] = useState({ display: "none" });
  const [user, setUser] = useState({});
  const [inputs, setInputs] = useState({ display: "none" });
  const [data, setData] = useState({ display: "block" });

  useEffect(() => {
    actions.getUsers();
    actions.verify();
  }, []);

  return (
    <div className="div1 container">
      {store.users.map((item) => {
        if (item.id == localStorage.getItem("ID")) {
          return (
            <div key={item.id}>
              <div className="Change email-password m-auto">
                <p className="mb-0" style={data}>
                  Email: {item.email}
                </p>
                <p style={data}>
                  Contraseña: ·······
                  <button
                    className="btn"
                    style={data}
                    onClick={() =>
                      setData({ display: "none" }) &
                      setInputs({ display: "block" })
                    }
                  >
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </p>
                <input
                  type="email"
                  className="mb-0"
                  style={inputs}
                  placeholder="Email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
                <input
                  type="password"
                  style={inputs}
                  placeholder="Contraseña"
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                />
                <div className="btn btn-group">
                  <button
                    className="btn btn-primary mb-5 rounded"
                    type="submit"
                    style={inputs}
                    onClick={() => {
                      changeData() &
                        setInputs({ display: "none" }) &
                        setData({ display: "block" });
                    }}
                  >
                    Guardar
                  </button>
                  <button
                    className="btn btn-sm btn-secondary mb-5 mx-3 rounded"
                    style={inputs}
                    onClick={() =>
                      setInputs({ display: "none" }) &
                      setData({ display: "block" })
                    }
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })}
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
