import React, { useState } from "react";
import PropTypes from "prop-types";

export const MultiSelectTiamati = ({
  answer,
  setSections,
  sections,
  section_id,
}) => {
  return (
    <div>
      <input
        className="form-check-input"
        type={answer.type}
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
                  sections[section_index].answer[answer_index].id == answer.id
                ) {
                  newAnswers.push({
                    ...sections[section_index].answer[answer_index],
                    checked: !answer.checked,
                  });
                } else {
                  newAnswers.push(sections[section_index].answer[answer_index]);
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
      </label>
    </div>
  );
};
