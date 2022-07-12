import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/calendar.css";

export const Admin_calendar = () => {
  const { store, actions } = useContext(Context);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [saved, setSaved] = useState();
  let timeAdd = [];

  const saveAvailableDates = async () => {
    const response = await fetch(store.url + "/admin_calendar", {
      method: "POST",
      body: JSON.stringify(date),
      headers: {
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    if (response.status == 200) {
      setSaved(true);
      setTimeout(() => {
        setSaved(false);
      }, 1000);
    }
  };

  if (localStorage.getItem("rol") == 3) {
    return (
      <div className="text-center">
        <h6 className="mb-3">Días disponibles para citas</h6>
        <label htmlFor="startDay" className="form-label me-1">
          Desde:
        </label>
        <input
          id="startDay"
          type="date"
          min={
            new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1 > 0 && new Date().getMonth() + 1 < 10
              ? "0" + (new Date().getMonth() + 1)
              : new Date().getMonth() + 1) +
            "-" +
            new Date().getDate()
          }
          onChange={(e) => setDate({ ...date, start_date: e.target.value })}
        ></input>

        <label htmlFor="endtDay" className="form-label ms-3 me-1">
          Hasta:
        </label>
        <input
          id="endDay"
          type="date"
          min={
            new Date().getFullYear() +
            "-" +
            (new Date().getMonth() + 1 > 0 && new Date().getMonth() + 1 < 10
              ? "0" + (new Date().getMonth() + 1)
              : new Date().getMonth() + 1) +
            "-" +
            new Date().getDate()
          }
          onChange={(e) => setDate({ ...date, end_date: e.target.value })}
        ></input>
        {/* <div>
          <label htmlFor="hours" className="form-label ms-3 me-1">
            Horas:
          </label>
          <input
            id="hours"
            type="time"
            onChange={(e) => setTime({ ...time, hour: e.target.value })}
          ></input>
          <button onClick={() => timeAdd.push(time)}>Añadir hora</button>
        </div>
        {timeAdd.map((x, item) => {
          return (
            <div key={item}>
              <h6>Horas seleccionadas:</h6>
              <p>{x}</p>
              <button onClick={timeAdd.filter((i) => i != item)}>eliminar</button> 
            </div>
          );
        })} */}
        <div className="mt-2">
          <button onClick={() => saveAvailableDates()}>Confirmar fecha</button>
          {saved ? <h6>Guardado!</h6> : null}
        </div>
      </div>
    );
  } else {
    return <h1 className="ms-5">Acceso no autorizado</h1>;
  }
};
