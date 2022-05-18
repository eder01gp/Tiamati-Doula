import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

export const Form = () => {
  const [user, setUser] = useState({});
  const [show, setShow] = useState({ display: "none" });
  const history = useHistory();

  const saveUsersData = async () => {
    if (!localStorage.getItem("token")) {
      history.push("/login");
      const response = await fetch(
        "https://3001-ederdon-tiamatidoula-0nmea4h5wm7.ws-eu45.gitpod.io/api/form",

        {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
    } else if (localStorage.getItem("token")) {
      history.push("/perfil");
      const response = await fetch(
        "https://3001-ederdon-tiamatidoula-0nmea4h5wm7.ws-eu45.gitpod.io/api/form",

        {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
    }
  };

  return (
    <div className="container m-auto align-items-center">
      <div className="text-center my-5">
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
        <div className="col-6">
          <label className="visually-hidden">Nombre Usuaria</label>
          <div className="input-group">
            <div className="input-group-text">¿Cómo te llamas?</div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, nombre: e.target.value })}
            />
          </div>
        </div>
        <div className="col-4">
          <label className="visually-hidden">Nº de semanas de embarazo</label>
          <div className="input-group">
            <div className="input-group-text bg-light">
              ¿De cuántas semanas estás?
            </div>
            <input
              type="number"
              className="form-control"
              onChange={(e) =>
                setUser({ ...user, semanas_embarazo: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-4">
          <label className="visually-hidden">Fecha de parto aproximada</label>
          <div className="input-group">
            <div className="input-group-text">Fecha probable de parto</div>
            <input
              type="date"
              className="form-control"
              onChange={(e) =>
                setUser({ ...user, fecha_parto: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-4">
          <label className="visually-hidden">Nº de hijos</label>
          <div className="input-group">
            <div className="input-group-text">¿Cuántos hijos tienes?</div>
            <input
              type="number"
              className="form-control"
              onChange={(e) =>
                setUser({ ...user, número_hijos: e.target.value }) &&
                e.target.value > 0
                  ? setShow({ display: "block" })
                  : setShow({ display: "none" })
              }
            />
          </div>
        </div>
        <div className="col-auto" style={show}>
          <label className="visually-hidden">Nº de cesáreas</label>
          <div className="input-group">
            <div className="input-group-text">
              ¿Cuántas cesáreas has tenido?
            </div>
            <input
              type="number"
              className="form-control"
              placeholder="Si no has tenido ninguna escribe: 0"
              onChange={(e) => setUser({ ...user, cesáreas: e.target.value })}
            />
          </div>
        </div>
        <div className="col-12">
          <label className="visually-hidden">Acompañante</label>
          <div className="input-group">
            <div className="input-group-text">
              ¿Tienes acompañante? Por favor, escribe su nombre y tu relación
              con el acompañante
            </div>
            <input
              type="text"
              className="form-control"
              onChange={(e) =>
                setUser({ ...user, acompañante: e.target.value })
              }
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">Ubicación de usuaria</label>
          <div className="input-group">
            <div className="input-group-text">¿Dónde te ubicas?</div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUser({ ...user, ubicación: e.target.value })}
            />
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">Lugar del parto</label>
          <div className="input-group">
            <div className="input-group-text">
              ¿Deseas tener un parto en hospital o en casa?
            </div>
            <select className="form-select" aria-label="Default select example">
              <option
                value="elegir"
                onChange={(e) =>
                  setUser({ ...user, lugar_parto: e.target.value })
                }
              >
                Elige una opción...
              </option>
              <option value="hospital">Hospital</option>
              <option value="casa">Casa</option>
            </select>
          </div>
        </div>
        <div className="col-auto">
          <label className="visually-hidden">Hospital o clínica actual</label>
          <div className="input-group">
            <div className="input-group-text">
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
          <div className="col-auto float-end mx-3">
            <Link to="/login">
              <button className="btn btn-secondary mx-1">Omitir</button>
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => saveUsersData()}
            >
              Guardar
            </button>
          </div>
        ) : (
          <div className="col-auto float-end mx-3">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => saveUsersData()}
            >
              Guardar cambios
            </button>
            <Link to="/perfil">
              <button className="btn btn-danger mx-1">Cancelar</button>
            </Link>
          </div>
        )}
      </form>
    </div>
  );
};
