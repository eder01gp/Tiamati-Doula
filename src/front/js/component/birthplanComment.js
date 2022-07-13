import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const BirthplanComment = (props) => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(()=>{
    setShowComments(false);
    store.birthplan_comment.map((comment)=>{
      if (comment.birthplan_section_id==store.birthplan_section[props.sectionIndex].id){
        setShowComments(true);
      }
    })
  },[props.sectionIndex]);

  return (
    <div>
      {showComments?
      (<div className="accordion-item">
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
        >
          {store.birthplan_comment.map((comment, index)=>{
            if (comment.birthplan_section_id==store.birthplan_section[props.sectionIndex].id){
              return (
              <div className="accordion-body" key={index}>
                <div id="com1" className="card comment-card">
                  <div className="card-header d-flex">
                    <i className="fa-solid fa-user user-avatar me-2"></i>
                    <h6>{comment.user_id}</h6>
                  </div>
                  <div className="card-body">
                    <p className="card-text">{comment.comment_text}</p>
                  </div>
                </div>
              </div>)
            }
          })}

        </div>
      </div>)
      :null}
    </div>
  );
};

BirthplanComment.propTypes = {
  sectionIndex: propTypes.any,
};