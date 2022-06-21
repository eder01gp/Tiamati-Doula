import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import "../../styles/user_appointment.css";

export const User_appointment = () => {
  const { store, actions } = useContext(Context);
  const [appointmentSelected, setAppointmentSelected] = useState({});
  const [appointmentIndex, setAppointmentIndex] = useState();
  const [appointmentData, setAppointmentData] = useState({});
  let history = useHistory();

  useEffect(() => {
    actions.getUserAppointments();
    actions.getUserServiceHiredName();
  }, []);

  const modifyUserAppointment = async () => {
    const response = await fetch(store.url + "/appointment", {
      method: "PUT",
      body: JSON.stringify(appointmentData),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
  };

  return (
    <div className="container div-user-appointment">
      <h5 className="text-center">Mis citas</h5>
      <div>
        <ul className="list-group-appointment list-group m-auto mt-4">
          {store.appointment.map((x, index) => {
            return (
              <li
                key={index}
                className="list-group-item-appointment list-group-item d-flex"
              >
                {store.service_hired.map((y, position) => {
                  if (x.service == y.id) {
                    return (
                      <p key={position} className="me-2">
                        <b> {y.service_name + ":"}</b>
                      </p>
                    );
                  }
                })}
                <p>
                  {(new Date(x.date).getDay() == 0
                    ? "Domingo, "
                    : new Date(x.date).getDay() == 1
                    ? "Lunes, "
                    : new Date(x.date).getDay() == 2
                    ? "Martes, "
                    : new Date(x.date).getDay() == 3
                    ? "Miércoles, "
                    : new Date(x.date).getDay() == 4
                    ? "Jueves, "
                    : new Date(x.date).getDay() == 5
                    ? "Viernes, "
                    : new Date(x.date).getDay() == 6
                    ? "Sábado, "
                    : null) +
                    x.date.split("-").reverse().join("/") +
                    " a las " +
                    x.time +
                    " horas"}
                </p>
                <div className="btn-group ms-auto">
                  {/* <--Button trigger modal MODIFY--> */}
                  <i
                    type="button"
                    className="fa-solid fa-pen-to-square mt-1 me-2"
                    data-bs-toggle="modal"
                    data-bs-target="#modifyAppointment"
                    onClick={() => {
                      actions.setAppointmentToModify({
                        ...appointmentToModify,
                        date: x.date,
                        time: x.time,
                        id: x.id,
                      });
                    }}
                  ></i>

                  {/* <--Button trigger modal DELETE--> */}
                  <i
                    type="button"
                    className="fa-solid fa-trash mt-1 "
                    data-bs-toggle="modal"
                    data-bs-target="#deleteAppointment"
                    onClick={() => {
                      setAppointmentSelected({
                        ...appointmentSelected,
                        date: x.date,
                        time: x.time,
                        id: x.id,
                      });
                      setAppointmentIndex(index);
                    }}
                  ></i>
                </div>
              </li>
            );
          })}
        </ul>

        {/* <!-- Modal MODIFY--> */}
        <div
          className="modal fade"
          id="modifyAppointment"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="modifyAppointmentLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="modifyAppointmentLabel">
                  Eliminar cita
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">¿Quieres modificar la cita?</div>
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
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    history.push("/modify_appointment");
                  }}
                >
                  Modificar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Modal DELETE--> */}
        <div
          className="modal fade"
          id="deleteAppointment"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="deleteAppointmentLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="deleteAppointmentLabel">
                  Eliminar cita
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                ¿Estás segura de que quieres eliminar esta cita?
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
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    actions.deleteAppointment(appointmentSelected);
                    actions.setAppointment(
                      store.appointment.filter(
                        (item, i) => i != appointmentIndex
                      )
                    );
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
