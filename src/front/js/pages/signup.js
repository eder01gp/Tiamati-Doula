import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const Signup = () => {
  const [user, setUser] = useState({});
  const [check, setCheck] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();

  const saveUsersInDB = async () => {
    if (
      user.email != null &&
      user.email.trim != "" &&
      user.email != "" &&
      user.contraseña != null &&
      user.contraseña.trim() != ""
    ) {
      setError(null);
      if (check == false) {
        history.push("/form");
      } else if (check == true) {
        history.push("/login");
      }
      const response = await fetch(
        "https://3001-ederdon-tiamatidoula-0nmea4h5wm7.ws-eu45.gitpod.io/api/signup",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
    } else {
      setError("Error, revisa tu email o contraseña");
    }
  };

  return (
    <div className="registro mt-5">
      <p className="text-center mt-5">REGISTRO</p>
      <form className="col-3 m-auto align-items-center">
        <div className="mb-1">
          <label className="form-label mb-0">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) =>
              setUser({ ...user, email: e.target.value, rol: "usuaria" })
            }
          />
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(e) =>
              e.target.checked
                ? setUser({ ...user, rol: "empresa" }) & setCheck(true)
                : setUser({ ...user, rol: "usuaria" }) & setCheck(false)
            }
          />
          <label className="form-check-label">Soy empresa</label>
        </div>
        <div className="mb-1">
          <label htmlFor="exampleInputPassword1" className="form-label mb-0">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setUser({ ...user, contraseña: e.target.value })}
          />
        </div>
        <h6 className="text-danger mb-3">{error}</h6>
        <div className="d-grid gap-2">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => saveUsersInDB()}
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};
