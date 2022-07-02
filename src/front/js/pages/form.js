import React, { useEffect } from "react";
import { FormData } from "../component/form_data";
import { useHistory } from "react-router-dom";
import "../../styles/form.css";

export const Form = () => {
  const history = useHistory();

  useEffect(() => {}, []);

  return (
    <div className="mb-5">
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
