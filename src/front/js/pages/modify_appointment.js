import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Calendar } from "../component/calendar";
import { useHistory } from "react-router-dom";
import "../../styles/modify_appointment.css";

export const Modify_appointment = () => {
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
      id: store.appointmentToModify.id,
      old_date: store.appointmentToModify.date,
      old_time: store.appointmentToModify.time,
    });
  }, [hourSelected]);

  useEffect(() => {
    actions.verify();
    store.appointmentToModify;
  }, []);

  const modifyUserAppointment = async () => {
    const response = await fetch(store.url + "/appointment", {
      method: "PUT",
      body: JSON.stringify(dateTime),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
  };

  return (
    <div className="modify_appointment container">
      {showCalendar == true ? <Calendar className="mx-5" /> : null}
      <div className="make-appointment">
        <h2>{showTitle == true ? "MODIFICA TU CITA" : null}</h2>
        <div id="datetime" className="Service">
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
                    {store.user_service_hired_id.map((x, index) => {
                      if (x.service_id != 1)
                        return (
                          <option key={index} value={x.name}>
                            {x.name}
                          </option>
                        );
                    })}
                  </select>
                </div>
              </div>
              <div className="datetime-footer">
                <button
                  className="btn-appointment me-2 float-end"
                  onClick={() => {
                    actions.setShowDate(true);
                    setShowService(false);
                    setShowCalendar(true);
                    setDateTime({});
                    store.user_service_hired_id.map((x) => {
                      if (x.name == dateTime.service) {
                        setServiceID(x.service_id);
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
            <div className="Date">
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
                    setShowCalendar(false);
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
                            setShowCalendar(false);
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
                <h6 className="pt-2">CAMBIO DE CITA</h6>
              </div>
              <div className="datetime-body text-start mx-2 mt-2">
                <p className="appointment_type mb-0">
                  <u>·Antigua cita: </u>
                </p>
                <p>
                  <i>{store.appointmentToModify.service + ": "}</i>
                  {(new Date(store.appointmentToModify.date).getDay() == 0
                    ? "Domingo, "
                    : new Date(store.appointmentToModify.date).getDay() == 1
                    ? "Lunes, "
                    : new Date(store.appointmentToModify.date).getDay() == 2
                    ? "Martes, "
                    : new Date(store.appointmentToModify.date).getDay() == 3
                    ? "Miércoles, "
                    : new Date(store.appointmentToModify.date).getDay() == 4
                    ? "Jueves, "
                    : new Date(store.appointmentToModify.date).getDay() == 5
                    ? "Viernes, "
                    : new Date(store.appointmentToModify.date).getDay() == 6
                    ? "Sábado, "
                    : null) +
                    store.appointmentToModify.date
                      .split("-")
                      .reverse()
                      .join("/") +
                    " a las " +
                    store.appointmentToModify.time +
                    " horas"}
                </p>
                <p className="appointment_type mb-0">
                  <u>·Nueva cita: </u>
                </p>
                <p>
                  <i>{serviceName + ": "}</i>
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
                    setShowCalendar(true);
                  }}
                ></i>

                <button
                  className="btn-appointment me-2 float-end"
                  onClick={() => {
                    modifyUserAppointment();
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
                <i className="fa fa-check-circle text-success ms-5 my-5"></i>
                <div className="d-inline mx-1 text-success">
                  Tu cita se ha guardado correctamente
                </div>
              </div>
              <div>
                <button
                  className="btn-appointment float-end me-3"
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
