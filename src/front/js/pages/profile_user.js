import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Form } from "./form";

export const Profile_user = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [inputs, setInputs] = useState({ display: "none" });
  const [data, setData] = useState({ display: "block" });
  const [showForm, setShowForm] = useState({ display: "none" });
  const [showServices, setShowServices] = useState({ display: "none" });

  useEffect(() => {
    actions.getUsers();
    actions.verify();
  }, []);

  const changeData = async () => {
    const response = await fetch(store.url + "/profile_user", {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    const data = await response.json();
  };

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
              <div className="Menu form and services">
                <div className="btn-group justify-content-center" role="group">
                  <button
                    className="btn  btn-sm btn-outline-secondary"
                    onClick={() =>
                      setShowForm({ display: "block" }) &
                      setShowServices({ display: "none" })
                    }
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
                  <h5>
                    <u>SERVICIOS CONTRATADOS</u>
                  </h5>
                  Se mostrarán los servicios contratados o: 'Aún no has
                  contratado servicios, ¿quieres{" "}
                  <Link to="/services">navegar por nuestra web?</Link> '
                </div>
              </div>
              <div className="Delete account mt-5">
                <button
                  className="btn btn-secondary"
                  onClick={() => remove(user)}
                >
                  Eliminar cuenta
                </button>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};
