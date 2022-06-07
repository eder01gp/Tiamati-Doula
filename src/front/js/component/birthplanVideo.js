import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/birthplan.css";
import placeholder from "../../../img/placeholder.jpg";

export const Birthplanvideo = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);

  return (
    <div id="topic">
      <div className="row">
        <div id="video" className="col-6">
          <img src={placeholder} id="placeholder-img" />
        </div>
        <div id="topic-description" className="col-6">
          <h5>Tema 1: Lorem</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lorem
            ligula, posuere sit amet purus eleifend, laoreet facilisis quam.
            Curabitur dapibus non lacus sed pulvinar. Duis et nibh pretium,
            pretium mauris non, sagittis diam. Aenean at eros convallis, rhoncus
            turpis id, dictum nulla.
          </p>
          <div id="topic-options">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Opción A
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Opción B
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
              <label className="form-check-label" htmlFor="defaultCheck1">
                Opción C
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
                <div className="card comment-card">
                  <div className="card-header d-flex">
                    <i className="fa-solid fa-user user-avatar me-2"></i>
                    <h6>Username</h6>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Donec sit amet semper nunc, non elementum odio. Nunc non
                      tincidunt justo. Suspendisse potenti. Duis consequat, ante
                      a congue molestie, dui nisl iaculis ante, a suscipit erat
                      urna sed nibh. Praesent ac dictum odio. Suspendisse
                      convallis ipsum est, non auctor magna tincidunt sit amet.
                      Proin placerat molestie condimentum. Sed in elit rhoncus,
                      cursus lacus nec, elementum lorem. Proin sit amet est
                      molestie, congue nisi non, pulvinar dui.
                    </p>
                  </div>
                </div>

                <div className="card comment-card">
                  <div className="card-header d-flex">
                    <i className="fa-solid fa-user user-avatar me-2"></i>
                    <h6>Username</h6>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Donec sit amet semper nunc, non elementum odio. Nunc non
                      tincidunt justo. Suspendisse potenti. Duis consequat, ante
                      a congue molestie, dui nisl iaculis ante, a suscipit erat
                      urna sed nibh. Praesent ac dictum odio. Suspendisse
                      convallis ipsum est, non auctor magna tincidunt sit amet.
                      Proin placerat molestie condimentum. Sed in elit rhoncus,
                      cursus lacus nec, elementum lorem. Proin sit amet est
                      molestie, congue nisi non, pulvinar dui.
                    </p>
                  </div>
                </div>

                <div className="card comment-card">
                  <div className="card-header d-flex">
                    <i className="fa-solid fa-user user-avatar me-2"></i>
                    <h6>Username</h6>
                  </div>
                  <div className="card-body">
                    <p className="card-text">
                      Donec sit amet semper nunc, non elementum odio. Nunc non
                      tincidunt justo. Suspendisse potenti. Duis consequat, ante
                      a congue molestie, dui nisl iaculis ante, a suscipit erat
                      urna sed nibh. Praesent ac dictum odio. Suspendisse
                      convallis ipsum est, non auctor magna tincidunt sit amet.
                      Proin placerat molestie condimentum. Sed in elit rhoncus,
                      cursus lacus nec, elementum lorem. Proin sit amet est
                      molestie, congue nisi non, pulvinar dui.
                    </p>
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
