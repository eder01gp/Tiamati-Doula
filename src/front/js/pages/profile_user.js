import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FormData } from "../component/form_data";
import { useHistory } from "react-router-dom";
import "../../styles/profile.css";

export const Profile_user = () => {
  let history = useHistory();
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [userInfo, setUserInfo] = useState(true);
  const [inputEmail, setInputEmail] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showServices, setShowServices] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [btnRightProfileActive, setBtnRightProfileActive] = useState(false);
  const [btnLeftProfileActive, setBtnLeftProfileActive] = useState(true);
  const [btnCenterProfileActive, setBtnCenterProfileActive] = useState(false);

  useEffect(() => {
    actions.verify();
    actions.getUserInfo();
    actions.getUserAppointments();
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
        <div className="MENU">
          <div className="btn-group justify-content-center" role="group">
            <button
              id={
                btnLeftProfileActive == true
                  ? "menu-profile-btn-active"
                  : "menu-profile-btn"
              }
              className="btn-fill btn-fill-purple me-2"
              onClick={() => {
                setShowForm(false);
                setShowServices(true);
                setShowSettings(false);
                setBtnRightProfileActive(false);
                setBtnLeftProfileActive(true);
                setBtnCenterProfileActive(false);
              }}
            >
              Mis servicios
            </button>
            <button
              id={
                btnCenterProfileActive == true
                  ? "menu-profile-btn-active"
                  : "menu-profile-btn"
              }
              className="btn-fill btn-fill-purple"
              onClick={() => {
                setShowForm(true);
                setShowServices(false);
                setShowSettings(false);
                setBtnRightProfileActive(false);
                setBtnLeftProfileActive(false);
                setBtnCenterProfileActive(true);
              }}
            >
              Información Personal
            </button>
            <button
              id={
                btnRightProfileActive == true
                  ? "menu-profile-btn-active"
                  : "menu-profile-btn"
              }
              className="btn-fill btn-fill-purple mx-2 px-3"
              onClick={() => {
                setShowForm(false);
                setShowServices(false);
                setShowSettings(true);
                setBtnRightProfileActive(true);
                setBtnLeftProfileActive(false);
                setBtnCenterProfileActive(false);
              }}
            >
              <i className="fa-solid fa-gear text-dark"></i>
            </button>
          </div>
          {showServices ? (
            <div className="Hired-Services mt-5">
              <h6 className="title-user-services">
                <u>SERVICIOS CONTRATADOS</u>
              </h6>
              {store.user_service_hired_id.length != 0 ? (
                <table className="table-profile-services table table-bordered">
                  <thead className="head-table-profile">
                    <tr>
                      <th id="column-1-table-services" scope="col">
                        Servicio
                      </th>
                      <th id="column-2-table-services" scope="col">
                        Citas Reservadas
                      </th>
                      <th id="column-3-table-services" scope="col">
                        Sesiones disponibles
                      </th>
                    </tr>
                  </thead>
                  <tbody className="body-table-profile">
                    {store.user_service_hired_id.map((x, index) => {
                      return (
                        <tr key={index} className="row-table-services">
                          <td className="font-services-name">{x.name}</td>
                          <td>
                            {store.appointment.map((appointment) => {
                              if (appointment.service == x.service_id) {
                                return (
                                  appointment.date
                                    .split("-")
                                    .reverse()
                                    .join("/") +
                                  " - " +
                                  appointment.time +
                                  " "
                                );
                              }
                            })}
                          </td>
                          <td className="text-center">
                            {x.service_id == 1 ? (
                              <button
                                id="btn-plan"
                                className="btn-fill btn-fill-green"
                                onClick={() => history.push("/birthplan")}
                              >
                                Acceder al plan
                              </button>
                            ) : x.sessions_left > 0 ? (
                              <div className="d-inline">
                                <h6 className="sessions-left-num d-inline">
                                  {x.sessions_left}{" "}
                                </h6>
                                <button
                                  id="btn-calendar-profile"
                                  className="btn-calendar ms-3"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Reservar cita"
                                  onClick={() => history.push("/appointment")}
                                >
                                  <i className="icon-calendar-v fa-solid fa-calendar-check"></i>
                                </button>
                                <button
                                  id="btn-calendar-profile"
                                  className="btn-calendar"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title="Modificar o cancelar cita"
                                  onClick={() =>
                                    history.push("/user_appointment")
                                  }
                                >
                                  <i className="icon-calendar-x fa-solid fa-calendar-xmark ms-2"></i>
                                </button>
                              </div>
                            ) : (
                              "-"
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              ) : (
                <p>
                  Aún no has contratado servicios, ¿quieres{" "}
                  <Link to="/services" id="link-search-in-web">
                    navegar por nuestra web
                  </Link>
                  ?
                </p>
              )}
            </div>
          ) : null}
          {showForm ? (
            <div className="Personal-Data my-5">
              <FormData
                closeBtn={
                  <button
                    type="button"
                    id="btn-right-form-dismiss"
                    className="btn-fill btn-fill-purple float-end"
                    onClick={() => {
                      setShowForm(false);
                      setShowServices(true);
                    }}
                  >
                    Cerrar
                  </button>
                }
              />
            </div>
          ) : null}
          {showSettings ? (
            <div className="Change email-password m-auto mt-5 mb-5">
              <h5>
                <u>Configuración de la cuenta</u>
              </h5>
              {/* User email & edit button*/}
              {userInfo ? (
                <div className="mt-4">
                  <div className="d-flex">
                    <i class="fa-solid fa-circle circle-point mt-3 me-1"></i>
                    <h6 className="mb-0 mt-2">
                      Mi email: {store.user_info ? store.user_info.email : null}
                    </h6>
                    <div
                      type="button"
                      className="mt-2"
                      data-bs-toggle="tooltip"
                      data-bs-placement="top"
                      title="Cambiar email"
                      onClick={() => {
                        setUserInfo(false);
                        setInputEmail(true);
                      }}
                    >
                      <i className="icon-edit-email fa-solid fa-pen-to-square mx-2"></i>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Email Input */}
              {inputEmail ? (
                <input
                  type="email"
                  className="mb-0 mt-4"
                  placeholder="Nuevo email"
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                />
              ) : null}

              {/* INPUTS BUTTONS */}
              {/* Save & Close Email edit */}
              {inputEmail ? (
                <div className=" mt-2 mb-5">
                  <button
                    id="btn-input-email"
                    className="btn-fill btn-fill-green"
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
                    id="btn-input-email"
                    className="btn-fill btn-fill-purple mx-3"
                    onClick={() => {
                      setInputEmail(false);
                      setUserInfo(true);
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              ) : null}
              <div className="DELETE-ACCOUNT-BUTTON mt-5 mb-4">
                <button
                  className="btn-slide"
                  id="btn-delete-account"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteUser"
                >
                  Eliminar cuenta
                </button>
              </div>
              {/* <--Modal DELETE--> */}
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
                        className="fill"
                        id="modal-button-left"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                      <button
                        type="button"
                        className="fill"
                        id="modal-button-right"
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
          ) : null}
        </div>
      </div>
    </div>
  );
};
