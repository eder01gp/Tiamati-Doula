import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/birthplan.css";
import placeholder from "../../../img/placeholder.jpg";
import PropTypes from "prop-types";

export const Birthplanvideo = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  const topic_id = props.topic_id;
  const title = props.title;
  const subtitle = props.subtitle;
  const video = props.video;
  const answer = props.answer;
  const answer_id = props.answer_id;
  const answer_type = props.answer_type;
  const answer_text = props.answer_text;
  const answer_value = props.answer_value;
  const answer_child = props.answer_child;
  const answer_child_id = props.answer_child_id;
  const answer_child_type = props.answer_child_type;
  const answer_child_text = props.answer_child_text;
  const answer_child_value = props.answer_child_value;
  const comments = props.comments;
  const comments_id = props.comments_id;
  const comments_user = props.comments_user;
  const comments_text = props.comments_text;

  return (
    <div id={topic_id}>
      <div className="row">
        <div id="video" className="col-6">
          <video width="600" controls>
            <source src={video} />
          </video>
        </div>
        <div id="topic-description" className="col-6">
          <h3 id="title">{title}</h3>
          <h5 id="subtitle">{subtitle}</h5>

          <div id="topic-options">
            <div id={answer_id} className="form-check answer">
              <input
                className="form-check-input"
                type={answer_type}
                value={answer_value}
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                {answer_text}
              </label>
            </div>
          </div>
        </div>

        <div id="comments" className="accordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="comment-header">
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
            </h2>
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
                <div id={comments_id} className="card comment-card">
                  <div className="card-header d-flex">
                    <i className="fa-solid fa-user user-avatar me-2"></i>
                    <h6>{comments_user}</h6>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{comments_text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Birthplanvideo.propTypes = {
  topic_id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  video: PropTypes.string,
  answer_id: PropTypes.number.isRequired,
  answer_type: PropTypes.string.isRequired,
  answer_text: PropTypes.string.isRequired,
  answer_value: PropTypes.bool.isRequired,
  comments_id: PropTypes.number.isRequired,
  comments_user: PropTypes.string.isRequired,
  comments_text: PropTypes.string.isRequired,
};

Birthplanvideo.defaultProps = {
  topic_id: 1,
  title: "En dilatación",
  subtitle: "Espacio Físico",
  video: "https://www.youtube.com/watch?v=crDWEskuPII",
  answer_id: 11,
  answer_type: "checkbox",
  answer_text: "Lorem ipsum dolor sit amet",
  answer_value: false,
  comments_id: 1,
  comments_user: "username",
  comments_text:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate sapien. Sed egestas, magna sit amet maximus efficitur, diam odio blandit dolor, a tristique nunc lacus in urna. Integer consectetur tincidunt molestie. In eget tellus sed ligula facilisis lobortis. Aliquam ligula felis, tempor eu vehicula nec, commodo vel sem. Donec erat massa, feugiat ac euismod ut, pellentesque nec nibh. Etiam nunc diam, interdum eget orci eget, congue eleifend nisl. Suspendisse sit amet tempus urna. Ut vitae tortor arcu. Etiam volutpat nisl id justo placerat, a rhoncus turpis bibendum.",
};
