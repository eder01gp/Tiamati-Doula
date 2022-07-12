import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import "../../styles/birthplan.css";

export const MultiSelectTiamati = (props) => {
  const { store, actions } = useContext(Context);
  const [isChecked, setIsChecked] = useState(false);
  const [answer, setAnswer] = useState({});

  const getAnswer = () => {
    let ansobject = store.birthplan_answer.find((ans) => {
      return ans.id == props.answer_id;
    });
    setAnswer(ansobject);
  };

  useEffect(() => {
    getAnswer();
  }, []);

  return (
    <div>
      <input
        className="form-check-input"
        type={answer.answer_type}
        checked={isChecked}
        id={answer.id}
        onChange={() => {
          // let newSections = [];
          // for (let section_index in sections) {
          //   if (sections[section_index].id != section_id) {
          //     newSections.push(sections[section_index]);
          //   } else {
          //     let newAnswers = [];
          //     for (let answer_index in sections[section_index].answer) {
          //       if (
          //         sections[section_index].answer[answer_index].id == answer.id
          //       ) {
          //         newAnswers.push({
          //           ...sections[section_index].answer[answer_index],
          //           checked: !answer.checked,
          //         });
          //       } else {
          //         newAnswers.push(sections[section_index].answer[answer_index]);
          //       }
          //     }
          //     newSections.push({
          //       ...sections[section_index],
          //       answer: newAnswers,
          //     });
          //   }
          // }
          // setSections(newSections);
        }}
      />
      <label className="form-check-label" htmlFor={answer.id}>
        <p>{answer.answer_text}</p>
        {/* {answer.input_text != null ? (
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
        ) : null} */}
      </label>
    </div>
  );
};
