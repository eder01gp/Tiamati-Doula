import React from "react";
import { Context } from "../store/appContext";
import { FormData } from "../component/form_data";
import { useHistory } from "react-router-dom";

export const Form = () => {
  const history = useHistory();

  return (
    <div className="mb-5">
      <FormData
        dismissBtn={
          <button
            type="button"
            id="modal-button-left"
            className="float-end"
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
