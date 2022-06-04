import React from "react";
import { FormData } from "../component/form_data";
import { useHistory } from "react-router-dom";

export const Form = () => {
  const history = useHistory();

  return (
    <div>
      <FormData
        closeBtn={
          <button
            type="button"
            className="btn btn-secondary float-end"
            onClick={() => history.push("/")}
          >
            Omitir
          </button>
        }
      />
    </div>
  );
};
