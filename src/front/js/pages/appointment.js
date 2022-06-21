import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Calendar } from "../component/calendar";
import { useHistory } from "react-router-dom";
import "../../styles/appointment.css";

export const Appointment = () => {
  const { store, actions } = useContext(Context);
  let history = useHistory();
  const [showAppointment, setShowAppointment] = useState(false);
  const [hourSelected, setHourSelected] = useState();
  const [serviceID, setServiceID] = useState();
  const [serviceName, setServiceName] = useState();
  const [dataSaved, setDataSaved] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showService, setShowService] = useState(true);
  const [showTitle, setShowTitle] = useState(true);
  const [dateTime, setDateTime] = useState({
    service: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    setDateTime({
      ...dateTime,
      service: serviceID,
      date: store.dateSelected,
      time: hourSelected,
    });
  }, [hourSelected]);

  useEffect(() => {
    actions.getUserServiceHiredName();
  }, []);

  const saveUserAppointment = async () => {
    const response = await fetch(store.url + "/appointment", {
      method: "POST",
      body: JSON.stringify(dateTime),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
  };

  return (
    <div className="appointment container">
      {showCalendar == true ? <Calendar className="mx-5" /> : null}
      <div className="make-appointment">
        <h4 className="text-start">
          {showTitle == true ? <strong>RESERVA TU CITA</strong> : null}
        </h4>
        <div id="datetime" className="">
          {showService == true ? (
            <div>
              <div className="datetime-header py-1">
                <h6 className="pt-2">SERVICIO</h6>
              </div>
              <div className="datetime-body">
                <p className="mt-2">¿Para qué servicio quieres la cita?</p>
                <div className="input-select-service input-group">
                  <select
                    value={
                      dateTime && dateTime.service ? dateTime.service : false
                    }
                    className="form-select"
                    onChange={(e) => {
                      setDateTime({ service: e.target.value });
                      setServiceName(e.target.value);
                    }}
                  >
                    <option>Elige un servicio...</option>
                    {store.service_hired_name.map((x, index) => {
                      return (
                        <option key={index} value={x}>
                          {x}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="datetime-footer">
                <button
                  className="btn-appointment btn btn-sm me-2 float-end"
                  onClick={() => {
                    actions.setShowDate(true);
                    setShowService(false);
                    setShowCalendar(true);
                    setDateTime({});
                    store.service_hired.map((x) => {
                      if (x.service_name == dateTime.service) {
                        setServiceID(x.id);
                      }
                    });
                  }}
                >
                  Aceptar
                </button>
              </div>
            </div>
          ) : null}

          {store.showDate == true ? (
            <div>
              <div className="datetime-header py-1">
                <h6 className="pt-2">FECHA</h6>
              </div>
              <div className="datetime-body mt-3">
                <p className="mt-2">
                  Selecciona un día disponible en el calendario
                </p>
              </div>
              <div className="datetime-footer">
                <i
                  className="arrow fa-solid fa-arrow-left-long fa-lg ms-2"
                  type="button"
                  onClick={() => {
                    setShowService(true);
                    actions.setShowDate(false);
                  }}
                ></i>
              </div>
            </div>
          ) : null}

          {store.showTime == true ? (
            <div>
              <div className="datetime-header py-1">
                <h6 className="pt-2">HORA</h6>
              </div>
              <div className="datetime-body">
                <p className="mt-2">Selecciona una hora disponible</p>
                <div className="hours mx-3 mb-1">
                  {store.dateSelectedTime.map((i, index) => {
                    if (i.is_available == true) {
                      return (
                        <div
                          key={index}
                          className="each-hour"
                          onClick={() => {
                            setHourSelected(i.time);
                            actions.setShowTime(false);
                            setShowAppointment(true);
                          }}
                        >
                          {i.time}
                        </div>
                      );
                    }
                  })}
                </div>
              </div>
              <div className="datetime-footer">
                <i
                  className="arrow fa-solid fa-arrow-left-long fa-lg ms-2"
                  type="button"
                  onClick={() => {
                    actions.setShowTime(false);
                    actions.setShowDate(true);
                  }}
                ></i>
              </div>
            </div>
          ) : null}

          {showAppointment == true ? (
            <div>
              <div className="datetime-header py-1">
                <h6 className="pt-2">CITA</h6>
              </div>
              <div className="datetime-body text-start ms-3">
                <p className="datosCita mt-2">Datos de la cita:</p>
                <p>
                  <b>{serviceName + ": "}</b>
                  {(new Date(store.dateSelected).getDay() == 0
                    ? "Domingo, "
                    : new Date(store.dateSelected).getDay() == 1
                    ? "Lunes, "
                    : new Date(store.dateSelected).getDay() == 2
                    ? "Martes, "
                    : new Date(store.dateSelected).getDay() == 3
                    ? "Miércoles, "
                    : new Date(store.dateSelected).getDay() == 4
                    ? "Jueves, "
                    : new Date(store.dateSelected).getDay() == 5
                    ? "Viernes, "
                    : new Date(store.dateSelected).getDay() == 6
                    ? "Sábado, "
                    : null) +
                    store.dateSelected.split("-").reverse().join("/") +
                    " a las " +
                    hourSelected +
                    " horas"}
                </p>
              </div>
              <div className="datetime-footer">
                <i
                  className="arrow fa-solid fa-arrow-left-long fa-lg ms-2"
                  type="button"
                  onClick={() => {
                    actions.setShowTime(true);
                    setShowAppointment(false);
                  }}
                ></i>

                <button
                  className="btn-appointment btn btn-sm me-2 float-end"
                  onClick={() => {
                    saveUserAppointment();
                    setShowAppointment(false);
                    setShowCalendar(false);
                    setDataSaved(true);
                    setShowTitle(false);
                  }}
                >
                  Confirmar
                </button>
              </div>
            </div>
          ) : null}
          {dataSaved == true ? (
            <div>
              <div className="datetime-header py-1">
                <h6 className="pt-2">CITA</h6>
              </div>
              <div className="check-msg">
                <i className="fa-solid fa-circle-check fa-lg ms-5 my-5"></i>
                <h6 className="d-inline ms-2">
                  Tu cita se ha guardado correctamente
                </h6>
              </div>
              <div>
                <button
                  className="btn-appointment btn btn-sm float-end me-3"
                  onClick={() => history.push("/user_appointment")}
                >
                  Ver mis citas
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
