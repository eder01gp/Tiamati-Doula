import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const Signup = (props) => {
  const [user, setUser] = useState({});
  const [check, setCheck] = useState(false);
  const [error, setError] = useState();
  const { store, actions } = useContext(Context);
  const history = useHistory();

  const saveUsersInDB = async () => {
    try {    
    if (
        user.email != null &&
        user.email.trim() != "" &&
        user.email != "" &&
        user.password != null &&
        user.password.trim() != ""
        ) {
        setError(null);

        const response = await fetch(store.url + "/signup", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            },
        });

        const data = await response.json();
        if (!response.ok) setError(data.msg);
        if (response.status == 200) {
            localStorage.setItem("token", data.token);
            localStorage.setItem("ID", data.User.id);
            localStorage.setItem("rol", data.User.rol);
            localStorage.setItem("email", data.User.email);
            actions.verify();
            if (props.push==true){
                if (check == false) {
                    history.push("/form");
                } else if (check == true) {
                    history.push("/");
                }
            }
            }        
            } else {
                setError(confirmation.msg);
            }
    }
    catch (e) {
        setError(e.name + ": " + e.message);
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
              setUser({ ...user, email: e.target.value, rol: 1 })
            }
          />
        </div>
        <div className="form-check mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            onChange={(e) =>
              e.target.checked
                ? setUser({ ...user, rol: 2 }) & setCheck(true)
                : setUser({ ...user, rol: 1 }) & setCheck(false)
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
            onChange={(e) => setUser({ ...user, password: e.target.value })}
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

Signup.propTypes = {
    push: propTypes.any,
}