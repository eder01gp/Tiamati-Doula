import React from "react";
import { useHistory } from "react-router-dom";
import { Login } from "../component/login";

export const LoginPage = () => {

  return (
    <div className="mb-5">
      <Login push={true}/>
    </div>
  );
};
