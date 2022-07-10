import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const CheckboxTiamati = (props) => {
  const { store, actions } = useContext(Context);
  const [answerIndex, setAnswerIndex] = useState(0);
  const [subAnswers, setSubAnswers] = useState({});

  const getAnswerIndex = () => {
    for (let index in store.birthplan_answer) {
      if (store.birthplan_answer[index].id == props.answer_id) {
        setAnswerIndex(index);
      }
    }
  };
  const getSubsectionAnswers = () => {
    let sub = [];
    store.birthplan_answer.map((ans) => {
      if (ans.birthplan_subsection_id == props.subsection_id) {
        sub.push(ans);
      }
    });
    setSubAnswers(sub);
  };
  useEffect(() => {
    getAnswerIndex();
    getSubsectionAnswers();
  }, []);

  console.log(answerIndex);

  return (
    <div>
      <input
        className="form-check-input"
        type={store.birthplan_answer[answerIndex].answer_type}
        checked={store.birthplan_answer[answerIndex].checked}
        id={store.birthplan_answer[answerIndex].id}
        onChange={() => {
          for (let answer_index in store.birthplan_answer) {
            if (
              store.birthplan_answer[answer_index].birthplan_subsection_id ==
              props.subsection_id
            ) {
              if (store.birthplan_answer[answer_index].id != props.answer_id) {
                actions.setAnswer(
                  false,
                  store.birthplan_answer[answer_index].id
                );
              } else {
                actions.setAnswer(
                  "change",
                  store.birthplan_answer[answer_index].id
                );
              }
            }
          }
        }}
      />
      <label
        className="form-check-label"
        htmlFor={store.birthplan_answer[answerIndex].id}
      >
        {store.birthplan_answer[answerIndex].answer_text}
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
  subsection_id: propTypes.any,
};
