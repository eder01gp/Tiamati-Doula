import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const CheckboxTiamati = (props) => {
  const { store, actions } = useContext(Context);

  return (
    <div className="">
      <input
        className="form-check-input mx-1"
        type={store.birthplan_answer[props.answer_index].answer_type}
        checked={store.birthplan_answer[props.answer_index].checked}
        id={store.birthplan_answer[props.answer_index].id}
        onChange={() => {
          for (let ans_index in store.birthplan_answer) {
            if (
              store.birthplan_answer[ans_index].birthplan_subsection_id ==
              props.subsection_id
            ) {
              if (store.birthplan_answer[ans_index].id != props.answer_id) {
                actions.setAnswer(
                  false,
                  store.birthplan_answer[ans_index].id
                );
              } else {
                actions.setAnswer(
                  !store.birthplan_answer[ans_index].checked,
                  store.birthplan_answer[ans_index].id
                );
              }
            }
          }
        }}
      />
      <label
        className="form-check-label d-inline"
        htmlFor={store.birthplan_answer[props.answer_index].id}
      >
        {store.birthplan_answer[props.answer_index].answer_text}
        {/* {answer.input_text != null ? (
          <input
            type="text"
            className="ms-3"
            value={answer.input_text}
            onChange={(e) => {
              if (answer.checked == true) {
                setSection(
                  section.map((sect) => {
                    if (sect.id != section_id) {
                      return sect;
                    } else {
                      return {
                        ...sect,
                        answer: sect.answer.map((answ) => {
                          if (answ.id != answer.id) {
                            return answ;
                          } else {
                            return { ...answ, input_text: e.target.value };
                          }
                        }),
                      };
                    }
                  })
                );
              }
            }}
          ></input>
        ) : null} */}
      </label>
    </div>
  );
};

CheckboxTiamati.propTypes = {
  answer_id: propTypes.any,
  answer_index: propTypes.any,
  subsection_id: propTypes.any,
};
