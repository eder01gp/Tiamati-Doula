import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FormData } from "../component/form_data";

export const Profile_user = () => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState(true);
  const [inputEmail, setInputEmail] = useState(false);
  const [inputPassword, setInputPassword] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showServices, setShowServices] = useState(false);

  useEffect(() => {
    actions.verify();
    actions.getUserInfo();
  }, []);

  const changeEmail = async () => {
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
          {userInfo ? (
            <div className="d-flex">
              <p className="mb-0 mt-2">
                Email: {store.user_info ? store.user_info.email : null}
              </p>
              <button
                className="btn"
                onClick={() => {
                  setUserInfo(false);
                  setInputEmail(true);
                }}
              >
                <i className="fa-solid fa-pen-to-square mx-2"></i>
              </button>
            </div>
          ) : null}

          {/* "Password" & edit button*/}
          {userInfo ? (
            <div className="d-flex">
              <p className="mt-3">Contraseña: ·······</p>
              <button
                className="btn"
                onClick={() => {
                  setUserInfo(false);
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
                  changeEmail();
                  setInputEmail(false);
                  setUserInfo(true);
                }}
              >
                Guardar
              </button>

              <button
                className="close-button btn btn-sm btn-secondary mx-3 rounded"
                onClick={() => {
                  setInputEmail(false);
                  setUserInfo(true);
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
                  changeEmail();
                  setInputPassword(false);
                  setUserInfo(true);
                }}
              >
                Guardar
              </button>

              <button
                className="close-button btn btn-sm btn-secondary mx-3 rounded"
                onClick={() => {
                  setInputPassword(false);
                  setUserInfo(true);
                }}
              >
                Cerrar
              </button>
            </div>
          ) : null}
        </div>
        <div className="FORM-AND-SERVICES-MENU">
          <div className="btn-group justify-content-center" role="group">
            <button
              className="form-personal-info btn  btn-sm btn-outline-secondary"
              onClick={() => {
                setShowForm(true);
                setShowServices(false);
              }}
            >
              Información Personal
            </button>
            <button
              className="my-services btn btn-outline-secondary"
              onClick={() => {
                setShowForm(false);
                setShowServices(true);
              }}
            >
              Mis servicios
            </button>
          </div>
          {showForm ? (
            <div className="Personal-Data">
              <FormData
                closeBtn={
                  <button
                    type="button"
                    className="btn btn-secondary float-end"
                    onClick={() => {
                      setShowForm(false);
                    }}
                  >
                    Cerrar
                  </button>
                }
              />
            </div>
          ) : null}
          {showServices ? (
            <div className="Hired-Services mt-5">
              <h5>
                <u>SERVICIOS CONTRATADOS</u>
              </h5>
              Se mostrarán los servicios contratados o: 'Aún no has contratado
              servicios, ¿quieres{" "}
              <Link to="/services">navegar por nuestra web?</Link> '
            </div>
          ) : null}
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
    </div>
  );
};
