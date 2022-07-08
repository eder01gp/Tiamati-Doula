import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const CheckboxTiamati = ({ section, answer, setSection }) => {
  const { store, actions } = useContext(Context);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    actions.getBirthplanSection();
    actions.getBirthplanAnswer();
  }, []);

  return (
    <div>
      <input
        className="form-check-input"
        type="Checkbox"
        checked={isChecked}
        id={store.getBirthplanAnswer.id}
        onChange={() => {
          let newSections = [];
          for (let section_index in { section }) {
            if (section[section_index].id != section_id) {
              newSections.push(section[section_index]);
            } else {
              let newAnswers = [];
              for (let answer_index in { answer }) {
                if (answer[answer_index].id != answer.id) {
                  newAnswers.push({
                    ...answer[answer_index],
                    checked: false,
                    input_text:
                      typeof answer[answer_index].input_text === "string" ||
                      answer[answer_index].input_text instanceof String
                        ? ""
                        : null,
                  });
                } else {
                  newAnswers.push({
                    ...answer[answer_index],
                    checked: true,
                  });
                }
              }
              newSections.push({
                ...section[section_index],
                answer: newAnswers,
              });
            }
          }
          setSection(newSections);
        }}
      />
      <label className="form-check-label" htmlFor={answer.id}>
        {props.children}
        {answer.input_text != null ? (
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
        ) : null}
      </label>
    </div>
  );
};
