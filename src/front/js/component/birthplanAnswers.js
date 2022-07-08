import React from "react";
import PropTypes from "prop-types";
import "../../styles/birthplan.css";
import "../../styles/index.css";
import { CheckboxTiamati } from "./checkboxTiamati";

export const BirthplanAnswers = (props) => {
  return (
    <div>
      <h3>{props.children}</h3>

      <div className="answer-block mb-3">
        <CheckboxTiamati name="Lorem" />
      </div>
    </div>
  );
};
