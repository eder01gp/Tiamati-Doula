import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Form = () => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState({ display: "none" });
  const history = useHistory();

  const saveUsersData = async () => {
    const response = await fetch(
      "https://3001-ederdon-tiamatidoula-0nmea4h5wm7.ws-eu45.gitpod.io/api/form",
      {
        method: "PUT",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
    const data = await response.json();
  };

  return (
    <div className="formulario container m-auto align-items-center mt-5">
      <div className="text-center mt-5">
        <p className="mb-0">
          Este formulario me ayudaría a conocerte mejor y poder ofrecerte un
          servicio más personalizado.
        </p>
        <p>
          Si lo deseas, puedes omitir este paso y rellenarlo más tarde desde tu
          perfil.
        </p>
      </div>
      <form className="row g-3">
        <div className="col-auto">
          <label className="visually-hidden">NOMBRE USUARIA</label>
          <div className="input-group">
            <div className="input-group-text bg-light">¿Cómo te llamas?</div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, nombre: e.target.value })}
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
              onChange={(e) =>
                setUser({ ...user, semanas_embarazo: e.target.value })
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
              onChange={(e) =>
                setUser({ ...user, fecha_aproximada_parto: e.target.value })
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
              onChange={(e) => {
                setUser({ ...user, numero_hijos: e.target.value }),
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
              onChange={(e) =>
                setUser({ ...user, numero_cesareas: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-12">
          <label className="visually-hidden">ACOMPAÑANTE</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              ¿Tienes acompañante? Escribe su nombre y su relación contigo
            </div>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setUser({ ...user, acompanante: e.target.value })
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
              onChange={(e) => setUser({ ...user, ciudad: e.target.value })}
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
              onChange={(e) =>
                setUser({ ...user, lugar_parto: e.target.value })
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
              onChange={(e) =>
                setUser({ ...user, hospital_actual: e.target.value })
              }
            />
          </div>
        </div>
        {!localStorage.getItem("token") ? (
          <div className="col-12">
            <Link to="/login">
              <button className="btn btn-secondary mx-1 float-end">
                Omitir
              </button>
              <button
                type="button"
                className="btn btn-primary float-end"
                onClick={() => saveUsersData()}
              >
                Guardar
              </button>
            </Link>
          </div>
        ) : (
          <div className="col-12">
            <Link to="/perfil">
              <button className="btn btn-danger mx-1 float-end">
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
        )}
      </form>
    </div>
  );
};
