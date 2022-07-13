import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/birthplan.css";
import "../../styles/index.css";
import { CheckboxTiamati } from "./checkboxTiamati";
import { MultiSelectTiamati } from "./multiSelectTiamati";

export const BirthplanSubsection = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="mb-3">
      {store.birthplan_subsection.map((sub) => {
        if (sub.id == props.subsection) {
          return (
            <div>
              <h3>{sub.subtitle}</h3>
              {store.birthplan_answer.map((answer, index) => {
                if (answer.birthplan_subsection_id == sub.id) {
                  if (answer.multiselect) {
                    return <MultiSelectTiamati answer_index = {index} key={index}/>;
                  } else {
                    return (
                      <CheckboxTiamati
                        answer_id={answer.id}
                        answer_index={index}
                        subsection_id={sub.id}
                        key={index}
                      />
                    );
                  }
                }
              })}
            </div>
          );
        }
      })}
    </div>
  );
};

BirthplanSubsection.propTypes = {
  subsection: PropTypes.any,
};
