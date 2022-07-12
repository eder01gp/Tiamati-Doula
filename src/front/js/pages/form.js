import React, { useEffect, useState } from "react";
import { FormData } from "../component/form_data";
import { useHistory } from "react-router-dom";
import "../../styles/form.css";

export const Form = () => {
  const history = useHistory();

  return (
    <div className="mb-5 m-auto">
      {/* <div className="mb-3">
        <h4 class="alert-heading">Bienvenid@!</h4>
        <div className="modal-body">
          <i className="fa fa-check-circle text-success float-start"></i>
          <div className="d-inline mx-1 text-success">
            Tu registro se ha realizado correctamente
          </div>
        </div>
      </div> */}

      <FormData
        dismissBtn={
          <button
            type="button"
            id="btn-right-form-dismiss"
            className="btn-fill btn-fill-purple float-end"
            onClick={() => history.push("/")}
          >
            Omitir
          </button>
        }
        redirect={() => history.push("/")}
      />
    </div>
  );
};
