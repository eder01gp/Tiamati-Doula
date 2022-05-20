import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Form = () => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState({ display: "none" });
  const { store, actions } = useContext(Context);
  const history = useHistory();

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
  };

  return (
    <div className="formulario container border border-1 border-dark rounded pb-3 px-3">
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
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
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
              value={user.pregnancy_weeks}
              onChange={(e) =>
                setUser({ ...user, pregnancy_weeks: e.target.value })
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
              value={user.aproximate_birth_date}
              onChange={(e) =>
                setUser({ ...user, aproximate_birth_date: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-3 col-lg-4 col-sm-auto">
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
              value={user.children_number}
              onChange={(e) => {
                setUser({ ...user, children_number: e.target.value }),
                  e.target.value > 0
                    ? setShow({ display: "block" })
                    : setShow({ display: "none" });
              }}
            />
          </div>
        </div>
        <div className="col-3 col-lg-5 col-sm-auto" style={show}>
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
              value={user.caesarean_sections_number}
              onChange={(e) =>
                setUser({ ...user, caesarean_sections_number: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-12">
          <label className="visually-hidden">ACOMPAÑANTE</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              ¿Tienes acompañante? Escribe su name y su relación contigo
            </div>
            <input
              type="text"
              className="form-control"
              value={user.companion}
              onChange={(e) => setUser({ ...user, companion: e.target.value })}
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
              value={user.city}
              onChange={(e) => setUser({ ...user, city: e.target.value })}
            />
          </div>
        </div>
        <div className="col-auto col-lg-auto 6col-sm-4">
          <label className="visually-hidden">LUGAR PARTO</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              ¿Deseas tener un parto en hospital o en casa?
            </div>
            <select
              className="form-select"
              aria-label="Default select example"
              value={user.birth_place}
              onChange={(e) =>
                setUser({ ...user, birth_place: e.target.value })
              }
            >
              <option value="elegir">Elige una opción...</option>
              <option value="hospital">Hospital</option>
              <option value="casa">Casa</option>
            </select>
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">HOSPITAL ACTUAL</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              Si estás siendo acompañada en un hospital/clínica, escribe cuál:
            </div>
            <input
              type="text"
              className="form-control"
              value={user.current_hospital}
              onChange={(e) =>
                setUser({ ...user, current_hospital: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-12">
          <Link to="/profile">
            <button className="btn btn-danger mx-1 float-end" onClick={show}>
              Cancelar
            </button>
            <button
              type="submit"
              className="btn btn-primary float-end"
              onClick={() => saveUsersData()}
            >
              Guardar cambios
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
