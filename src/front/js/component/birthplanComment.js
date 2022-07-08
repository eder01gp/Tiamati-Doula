import React, { useState } from "react";
import PropTypes from "prop-types";
import "../../styles/birthplan.css";
import "../../styles/index.css";

export const BirthplanComment = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className="accordion-item">
      <h1 className="accordion-header" id="comment-header">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#all-comments"
          aria-expanded="false"
          aria-controls="all-comments"
          onClick={() => {
            setShow(true);
          }}
        >
          Comentarios
        </button>
      </h1>
      <div
        id="all-comments"
        className={
          show === true
            ? "accordion-collapse collapse show"
            : "accordion-collapse collapse"
        }
        aria-labelledby="comment-header"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          <div id="com1" className="card comment-card">
            <div className="card-header d-flex">
              <i className="fa-solid fa-user user-avatar me-2"></i>
              <h6>{props.username}</h6>
            </div>
            <div className="card-body">
              <p className="card-text">{props.text}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
