import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { BirthplanAnswers } from "./birthplanAnswers";
import { BirthplanComment } from "./birthplanComment";
import "../../styles/birthplan.css";
import "../../styles/index.css";

export const BirthplanSection = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [section, setSection] = useState(store.birthplan_section.id);

  useEffect(() => {
    actions.getBirthplanSection();
    actions.getBirthplanAnswer();
    actions.getBirthplanComment();
  }, []);

  return (
    <div>
      <div className="video row mb-5">
        <iframe
          width="640"
          height="360"
          frameBorder="0"
          allow=" fullscreen"
          src={store.birthplan_section.video}
          controls
        />
      </div>

      <div id="answers">
        <h2>{store.birthplan_section.subtitle}</h2>
        <div className="form-check answer"></div>
      </div>

      <div id="comments" className="accordion"></div>
    </div>
  );
};
