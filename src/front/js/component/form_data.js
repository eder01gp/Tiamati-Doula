import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const FormData = (props) => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [alert, setAlert] = useState({ display: "none" });
  const [caesareanSectionInput, setCaesarianSectionInput] = useState({
    display: "none",
  });

  useEffect(() => {
    actions.getUserInfo();
    actions.verify();
  }, []);

  const saveUsersData = async () => {
    const response = await fetch(store.url + "/form", {
      method: "PUT",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = await response.json();
    actions.getUserInfo();
    setAlert({ display: "block" });
    setInterval(() => {
      setAlert({ display: "none" });
    }, 3000);
  };

  return (
    <div className="form-general-div container border border-1 border-dark rounded pb-3 px-3 overflow-auto">
      <div className="text-center mt-3">
        <h6 className="mb-4">
          Este formulario me ayudaría a conocerte mejor y poder ofrecerte un
          servicio más personalizado.
        </h6>
      </div>
      <form className="row g-3">
        <div className="col-auto">
          <label className="visually-hidden">NOMBRE USUARIA</label>
          <div className="input-group">
            <div className="input-group-text bg-light">¿Cómo te llamas?</div>
            <input
              type="text"
              className="form-control"
              defaultValue={store.user_data.name}
              onChange={(e) =>
                setUser({ ...store.user_data, name: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-3 col-lg-5 col-sm-auto">
          <label className="visually-hidden">Nº SEMANAS EMBARAZO</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              ¿De cuántas semanas estás?
            </div>
            <input
              type="number"
              name="cantidad"
              step="0.5"
              min="1"
              className="form-control"
              defaultValue={store.user_data.pregnancy_weeks}
              onChange={(e) =>
                setUser({ ...store.user_data, pregnancy_weeks: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">FECHA APROX. PARTO</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              Fecha probable de parto
            </div>
            <input
              type="date"
              name="dia"
              min="today"
              className="form-control"
              defaultValue={store.user_data.aproximate_birth_date}
              onChange={(e) =>
                setUser({
                  ...store.user_data,
                  aproximate_birth_date: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-auto col-lg-4 col-sm-auto">
          <label className="visually-hidden">Nº HIJOS</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              ¿Cuántos hijos tienes?
            </div>
            <input
              type="number"
              name="cantidad"
              min="0"
              className="form-control"
              defaultValue={store.user_data.children_number}
              onChange={(e) => {
                setUser({
                  ...store.user_data,
                  children_number: e.target.value,
                }),
                  e.target.value > 0
                    ? setCaesarianSectionInput({ display: "block" })
                    : setCaesarianSectionInput({ display: "none" });
              }}
            />
          </div>
        </div>
        <div
          className="col-auto col-lg-5 col-sm-auto"
          style={caesareanSectionInput}
        >
          <label className="visually-hidden">Nº CESÁREAS</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              ¿Cuántas cesáreas has tenido?
            </div>
            <input
              type="number"
              name="cantidad"
              min="0"
              className="form-control"
              defaultValue={store.user_data.caesarean_sections_number}
              onChange={(e) =>
                setUser({
                  ...store.user_data,
                  caesarean_sections_number: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">ACOMPAÑANTE</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              ¿Tienes acompañante? Escribe su nombre y su relación contigo
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={store.user_data.companion}
              onChange={(e) =>
                setUser({ ...store.user_data, companion: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">CIUDAD</label>
          <div className="input-group">
            <div className="input-group-text bg-light">¿Dónde te ubicas?</div>
            <input
              type="text"
              className="form-control"
              defaultValue={store.user_data.city}
              onChange={(e) =>
                setUser({ ...store.user_data, city: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">LUGAR PARTO</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              ¿Deseas un parto en hospital o en casa?
            </div>
            <select
              className="form-select"
              onChange={(e) => {
                setUser({ ...store.user_data, birth_place: e.target.value });
              }}
            >
              <option>Elige una opción...</option>
              <option
                selected={
                  store.user_data.birth_place == "Hospital" ? true : false
                }
                defaultValue="Hospital"
              >
                Hospital
              </option>
              <option
                selected={store.user_data.birth_place == "Casa" ? true : false}
                defaultValue="Casa"
              >
                Casa
              </option>
            </select>
          </div>
        </div>
        <div className="col-8">
          <label className="visually-hidden">HOSPITAL ACTUAL</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              Si estás siendo acompañada en un hospital/clínica, escribe cuál:
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={store.user_data.current_hospital}
              onChange={(e) =>
                setUser({
                  ...store.user_data,
                  current_hospital: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-12">
          {props.closeBtn}
          <button
            type="button"
            id="save-data-button"
            className="btn btn-primary mx-1 float-end"
            onClick={() => {
              saveUsersData();
            }}
          >
            Guardar
          </button>
          <i
            className="fa-solid fa-circle-check fa-lg text-success float-start mt-4"
            style={alert}
          >
            <p id="check-data-saved-form" className="d-inline mx-1">
              Datos guardados correctamente
            </p>
          </i>
        </div>
      </form>
    </div>
  );
};

FormData.propTypes = {
  closeBtn: propTypes.element,
};
