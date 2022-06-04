import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { FormData } from "../component/form_data";
import { useHistory } from "react-router-dom";

export const Form = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory();

  useEffect(() => {
    actions.getUserInfo();
    actions.verify();
  }, []);

  return (
    <div>
      <FormData
        dismissBtn={
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
