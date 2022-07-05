import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const Login = (props) => {
  const [user, setUser] = useState({});
  const [result, setResult] = useState("");

  const { store, actions } = useContext(Context);

  let history = useHistory();

  const login = async (evt) => {
    evt.preventDefault();
    try {
      const response = await fetch(store.url + "/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "access-control-allow-origin": "*",
          "Content-Type": "application/json",
        },
      });

      const confirmation = await response.json();

      if (!response.ok) setResult("Something went wrong");
      if (response.status == 200) {
        localStorage.setItem("token", confirmation.token);
        localStorage.setItem("ID", confirmation.User.id);
        localStorage.setItem("rol", confirmation.User.rol);
        localStorage.setItem("email", confirmation.User.email);
        /* setResult(confirmation.msg); */
        actions.verify();
        actions.getUserInfo();
        actions.getUserServiceHired();
        if (props.push==true){
          history.push("/");
        }
      } else {
        setResult(confirmation.msg);
      }
    } catch (e) {
      setResult(e.name + ": " + e.message);
    }
  };

  return (
    <div className="my-6">
      <div style={{width:"100%", height:"50px"}} className="bg-T bg-01 my-4"> 
          <div className="bg-wh-pl px-4" style={{width:"fit-content"}}>
            INICIAR SESIÓN
          </div> 
      </div>
      <form id="login-form" className="m-auto align-items-center">
        <div className="mb-1">
          <label htmlFor="inputUser" className="form-label">
            Email
          </label>
            <input
              type="text"
              className="form-control"
              id="inputUser"
              onChange={(e) => {
                setUser({ ...user, Email: e.target.value });
              }}
            />
        </div>
        <div className="my-3">
          <label className="form-label">
            Contraseña
          </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setUser({ ...user, Password: e.target.value });
              }}
            />
        </div>
        <div className="my-2">
          <button
            className="btn-no-fill w-100 my-3"
            onClick={(evt) => {
              login(evt);
            }}
          >
            Iniciar sesión
          </button>
        </div>
        {result?
        <div>
          <i className="fa fa-times-circle text-wrong mb-3"></i>
          <div className="d-inline mx-1 text-wrong">{result}</div>
        </div>:null}   
      </form>
    </div>
  );
};

Login.propTypes = {
  push: propTypes.any,
}