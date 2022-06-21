import React from "react";
import PropTypes from "prop-types";

export const CheckboxTiamati = ({
  answer,
  sections,
  setSections,
  section_id,
}) => {
  return (
    <div>
      <input
        className="form-check-input"
        type={answer.type}
        checked={answer.checked}
        id={answer.id}
        onChange={() => {
          let newSections = [];
          for (let section_index in sections) {
            if (sections[section_index].id != section_id) {
              newSections.push(sections[section_index]);
            } else {
              let newAnswers = [];
              for (let answer_index in sections[section_index].answer) {
                if (
                  sections[section_index].answer[answer_index].id != answer.id
                ) {
                  newAnswers.push({
                    ...sections[section_index].answer[answer_index],
                    checked: false,
                    input_text:
                      typeof sections[section_index].answer[answer_index]
                        .input_text === "string" ||
                      sections[section_index].answer[answer_index]
                        .input_text instanceof String
                        ? ""
                        : null,
                  });
                } else {
                  newAnswers.push({
                    ...sections[section_index].answer[answer_index],
                    checked: true,
                  });
                }
              }
              newSections.push({
                ...sections[section_index],
                answer: newAnswers,
              });
            }
          }
          setSections(newSections);
        }}
      />
      <label className="form-check-label" htmlFor={answer.id}>
        {answer.text}
        {answer.input_text != null ? (
          <input
            type="text"
            className="ms-3"
            value={answer.input_text}
            onChange={(e) => {
              if (answer.checked == true) {
                setSections(
                  sections.map((sect) => {
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
