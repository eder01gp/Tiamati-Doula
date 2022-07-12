import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const Signup = (props) => {
  const [user, setUser] = useState({});
  const [check, setCheck] = useState(false);
  const [error, setError] = useState();
  const [showAlert, setShowAlert] = useState(false);
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
          actions.getUserInfo();
          actions.getUserServiceHired();
          setShowAlert(true);
        }
      } else {
        setError(confirmation.msg);
      }
    } catch (e) {
      setError(e.name + ": " + e.message);
    }
  };

  return (
    <div className="registro mt-5">
      {showAlert ? null : <p className="text-center mt-5">REGISTRO</p>}
      {showAlert ? (
        <div
          class="signupAlert alert alert-light border-multicolor m-auto"
          role="alert"
        >
          <h4 class="alert-heading d-inline">Bienvenid@!</h4>
          <button
            type="button"
            class="btn-close float-end"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => {
              if (props.push == true) {
                //   if (check == false) {
                history.push("/form");
                //   } else if (check == true) {
                //     history.push("/");
                //   }
              }
            }}
          ></button>
          <div className="alert-body mt-3">
            <i
              className="fa fa-check-circle text-success float-start"
              aria-hidden="true"
            ></i>
            <div className="d-inline mx-1 text-success">
              Tu registro se ha realizado correctamente
            </div>
          </div>
        </div>
      ) : (
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
          {/* <div className="form-check mb-3">
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
          </div> */}
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
      )}
    </div>
  );
};

Signup.propTypes = {
  push: propTypes.any,
};
