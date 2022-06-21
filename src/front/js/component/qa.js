import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/faq.css";
import propTypes from "prop-types";

export const Qa = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const question_id = props.question_id;
  const question = props.question;
  const answer_id = props.answer_id;
  const answer = props.answer;

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={question_id}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`${"#"}` + answer_id}
          aria-expanded="false"
          aria-controls={answer_id}
          onClick={() => {
            setShow(true);
          }}
        >
          {question}
        </button>
      </h2>
      <div
        id={answer_id}
        className={
          show === true
            ? "accordion-collapse collapse show"
            : "accordion-collapse collapse"
        }
        aria-labelledby={question_id}
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};

Qa.propTypes = {
  question_id: propTypes.string,
  question: propTypes.string,
  answer_id: propTypes.string,
  answer: propTypes.string,
};
