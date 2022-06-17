import React from "react";
import PropTypes from "prop-types";

export const MultiSelectTiamati = (props) => {
  const answer_type = props.answer_type;
  const answer_checked = props.answer_checked;
  const answer_id = props.answer_id;
  const answer_text = props.answer_text;
  <div>
    <input
      className="form-check-input"
      type={answer_type}
      checked={answer_checked}
      id={answer_id}
    />
    <label className="form-check-label" htmlFor="defaultCheck1">
      {answer_text}
    </label>
  </div>;
};
