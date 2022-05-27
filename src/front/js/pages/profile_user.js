import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FormData } from "../component/form_data";

export const Profile_user = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [userData, setUserData] = useState({ display: "block" });
  const [inputEmail, setInputEmail] = useState({ display: "none" });
  const [inputPassword, setInputPassword] = useState({ display: "none" });
  const [showForm, setShowForm] = useState({ display: "none" });
  const [showServices, setShowServices] = useState({ display: "none" });

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
    <div className="div-profile-user container-fluid">
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
        <div className="FORM-AND-SERVICES-MENU">
          <div className="btn-group justify-content-center" role="group">
            <button
              className="form-personal-info btn  btn-sm btn-outline-secondary"
              onClick={() =>
                setShowForm({ display: "block" }) &
                setShowServices({ display: "none" })
              }
            >
              Información Personal
            </button>
            <button
              className="my-services btn btn-outline-secondary"
              onClick={() =>
                setShowForm({ display: "none" }) &
                setShowServices({ display: "block" })
              }
            >
              Mis servicios
            </button>
          </div>
          <div className="Personal-Data" style={showForm}>
            <FormData
              closeBtn={
                <button
                  type="button"
                  className="btn btn-secondary float-end"
                  onClick={() => {
                    setShowForm({ display: "none" });
                  }}
                >
                  Cerrar
                </button>
              }
            />
          </div>
          <div className="Hired-Services mt-5" style={showServices}>
            <h5>
              <u>SERVICIOS CONTRATADOS</u>
            </h5>
            Se mostrarán los servicios contratados o: 'Aún no has contratado
            servicios, ¿quieres{" "}
            <Link to="/services">navegar por nuestra web?</Link> '
          </div>
        </div>
        <div className="DELETE-ACCOUNT-BUTTON mt-5">
          <button
            className="btn btn-secondary"
            /*onClick={() => }*/
          >
            Eliminar cuenta
          </button>
        </div>
      </div>
    </div>
  );
};
