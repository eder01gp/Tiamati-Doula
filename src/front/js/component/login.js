import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const Login = (props) => {
  const [user, setUser] = useState({});
  const [result, setResult] = useState("");

  const { store, actions } = useContext(Context);

  let history = useHistory();

  const login = async () => {
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
        setResult(confirmation.msg);
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
    <div className="container my-6">
      <p className="text-center mt-5">INICIAR SESIÓN</p>
      <form className="col-3 m-auto align-items-center">
        <div className="mb-1">
          <label htmlFor="inputUser" className="col-sm-2 form-label">
            Email
          </label>
          <div className="col-sm-12">
            <input
              type="text"
              className="form-control"
              id="inputUser"
              onChange={(e) => {
                setUser({ ...user, Email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 form-label">
            Password
          </label>
          <div className="col-sm-12">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              onChange={(e) => {
                setUser({ ...user, Password: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="col-sm-12 mx-auto">
          <a
            className="btn btn-light "
            onClick={() => {
              login("home");
            }}
          >
            Login
          </a>
        </div>
      </form>
      <div>
        <p className="my-2 mx-auto text-center">{result}</p>
      </div>
    </div>
  );
};

Login.propTypes = {
  push: propTypes.any,
}