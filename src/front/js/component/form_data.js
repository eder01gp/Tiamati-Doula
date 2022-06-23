import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";
import { useHistory } from "react-router-dom";
import "../../styles/form.css";

export const FormData = (props) => {
  const { store, actions } = useContext(Context);
  const [user, setUser] = useState({});
  const [caesareanSectionInput, setCaesarianSectionInput] = useState(false);

  useEffect(() => {
    actions.getUserInfo();
    actions.verify();
  }, []);

  useEffect(() => {
    setUser(store.user_data);
  }, [store.user_data]);

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
    if (response.status == 200) {
      setUser({});
    }
    actions.getUserInfo();
  };

  return (
    <div className="form-container-div container pb-3 px-3 overflow-auto bg-white">
      <div className="text-center mt-3">
        <h6 className="h6-form mb-4">
          Este formulario me ayudaría a conocerte mejor y poder ofrecerte un
          servicio más personalizado.
        </h6>
      </div>
      <form className="row g-3">
        <div className="col-auto">
          <label className="visually-hidden">NOMBRE USUARIA</label>
          <div className="input-group">
            <div className="question-form input-group-text bg-light">
              ¿Cómo te llamas?
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={user ? user.name : null}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
          </div>
        </div>
        <div className="col-3 col-lg-5 col-sm-auto">
          <label className="visually-hidden">Nº SEMANAS EMBARAZO</label>
          <div className="input-group">
            <div className="question-form input-group-text bg-light">
              ¿De cuántas semanas estás?
            </div>
            <input
              type="number"
              name="cantidad"
              step="0.5"
              min="1"
              className="form-control"
              defaultValue={user ? user.pregnancy_weeks : null}
              onChange={(e) =>
                setUser({ ...user, pregnancy_weeks: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">FECHA APROX. PARTO</label>
          <div className="input-group">
            <div className="question-form input-group-text bg-light">
              Fecha probable de parto
            </div>
            <input
              type="date"
              className="form-control"
              id="selectedDate"
              defaultValue={user ? user.aproximate_birth_date : null}
              onChange={(e) => {
                setUser({
                  ...user,
                  aproximate_birth_date: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className="col-auto col-lg-4 col-sm-auto">
          <label className="visually-hidden">Nº HIJOS</label>
          <div className="input-group">
            <div className="question-form input-group-text bg-light">
              ¿Cuántos hijos tienes?
            </div>
            <input
              type="number"
              name="cantidad"
              min="0"
              className="form-control"
              defaultValue={user ? user.children_number : null}
              onChange={(e) => {
                setUser({
                  ...user,
                  children_number: e.target.value,
                }),
                  e.target.value > 0
                    ? setCaesarianSectionInput(true)
                    : setCaesarianSectionInput(false);
              }}
            />
          </div>
        </div>
        {caesareanSectionInput ? (
          <div className="col-auto col-lg-5 col-sm-auto">
            <label className="visually-hidden">Nº CESÁREAS</label>
            <div className="input-group">
              <div className="question-form input-group-text bg-light">
                ¿Cuántas cesáreas has tenido?
              </div>
              <input
                type="number"
                name="cantidad"
                min="0"
                className="form-control"
                defaultValue={user ? user.caesarean_sections_number : null}
                onChange={(e) =>
                  setUser({
                    ...user,
                    caesarean_sections_number: e.target.value,
                  })
                }
              />
            </div>
          </div>
        ) : null}
        <div className="col-auto">
          <label className="visually-hidden">ACOMPAÑANTE</label>
          <div className="input-group">
            <div className="question-form input-group-text bg-light">
              ¿Tienes acompañante? Escribe su nombre y su relación contigo
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={user ? user.companion : null}
              onChange={(e) => setUser({ ...user, companion: e.target.value })}
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">CIUDAD</label>
          <div className="input-group">
            <div className="question-form input-group-text bg-light">
              ¿Dónde te ubicas?
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={user ? user.city : null}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">LUGAR PARTO</label>
          <div className="input-group">
            <div className="question-form input-group-text bg-light">
              ¿Deseas un parto en hospital o en casa?
            </div>
            <select
              value={user && user.birth_place ? user.birth_place : false}
              className="form-select"
              onChange={(e) => {
                setUser({ ...user, birth_place: e.target.value });
              }}
            >
              <option>Elige una opción...</option>
              <option value="Hospital">Hospital</option>
              <option value="Casa">Casa</option>
            </select>
          </div>
        </div>
        <div className="col-8">
          <label className="visually-hidden">HOSPITAL ACTUAL</label>
          <div className="input-group">
            <div className="question-form input-group-text bg-light">
              Si estás siendo acompañada en un hospital/clínica, escribe cuál:
            </div>
            <input
              type="text"
              className="form-control"
              defaultValue={user ? user.current_hospital : null}
              onChange={(e) =>
                setUser({
                  ...user,
                  current_hospital: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="col-12">
          {props.closeBtn}
          {props.dismissBtn}
          {props.saveBtn}
          <button
            type="button"
            id="btn-left-form"
            className="mx-2 float-end"
            data-bs-toggle="modal"
            data-bs-target="#dataSaved"
            onClick={() => {
              saveUsersData();
            }}
          >
            Guardar
          </button>
        </div>

        {/* <!-- Modal --> */}
        <div
          className="modal fade"
          id="dataSaved"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="dataSavedLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-body">
                <i className="check-icon fa-solid fa-circle-check fa-lg text-success float-start"></i>
                <p className="d-inline mx-1">Datos guardados correctamente</p>
                <button
                  type="button"
                  class="btn-close float-end"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={props.redirect}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

FormData.propTypes = {
  closeBtn: propTypes.element,
  dismissBtn: propTypes.element,
  redirect: propTypes.func,
};
