import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/birthplan.css";
import { Navbar } from "../component/navbar";
import { CheckboxTiamati } from "../component/checkboxTiamati";
import { MultiSelectTiamati } from "../component/multiSelectTiamati";
import { Link } from "react-router-dom";
import logo from "../../../img/logo/logo.png";

export const Birthplan = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [formInfo, setFormInfo] = useState({});
  const [sectionIndex, setSectionIndex] = useState(0);
  const [sections, setSections] = useState([]);

  if (sectionIndex == 2) {
    console.log(sections[sectionIndex - 2].answer[0]);
  }

  useEffect(() => {
    actions.verify();
    setFormInfo({ ...formInfo, user_id: localStorage.getItem("ID") });
  }, []);

  const saveBirthplanForm = async () => {
    const response = await fetch(store.url + "/birthplan_form", {
      body: JSON.stringify(formInfo),
      method: "POST",
      headers: {
        "Content-Type": "application/json",

        authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    const data = response.json();
  };

  return (
    <div className="container" id="section-container">
      <div className="row" id="birthplan">
        {/* Menu */}
        <nav
          className="navbar navbar-light fixed-top position-relative"
          id="plan-menu"
        >
          <div>
            <div>
              <button id="pdf-button" className="btn btn-lg">
                Generar plan de parto
              </button>
            </div>
          </div>

          <div id="menu-buttons">
            <button
              id="before-button"
              className="btn btn-lg me-2"
              onClick={() => {
                if (sectionIndex !== 0) {
                  setSectionIndex((sectionIndex) => sectionIndex - 1);
                }
              }}
            >
              Anterior
            </button>
            <button
              id="after-button"
              className="btn btn-lg"
              onClick={() => {
                if (sectionIndex !== sections.length + 1) {
                  setSectionIndex((sectionIndex) => sectionIndex + 1);
                }
              }}
            >
              Siguiente
            </button>
          </div>
        </nav>
        {/* Sections */}
        {sectionIndex == 0 ? (
          // Welcome
          <div id="welcome" className="text-center mt-4">
            <h2 id="welcome-title">
              Bienvenida a tu plan de parto interactivo
            </h2>
            <h4 id="welcome-text" className="m-auto mt-4">
              Estas son las instrucciones a seguir:
            </h4>
            <ol className="list-group-numbered">
              <li className="list-group-item mb-2 instructions">
                Lee cuidadosamente las opciones
              </li>
              <li className="list-group-item mb-2 instructions">
                Reproduce el vídeo explicatorio
              </li>
              <li className="list-group-item mb-2 instructions">
                Selecciona la opción u opciones que prefieras
              </li>
              <li className="list-group-item mb-2 instructions">
                Dale al botón "Generar plan de parto" para descargar tu PDF
              </li>
            </ol>
          </div>
        ) : sectionIndex == 1 ? (
          // Form
          <div id="form" className="text-center">
            <h1>FORMULARIO</h1>
            <div className="input-group mb-3">
              <span className="input-group-text" id="name">
                Nombre y apellidos
              </span>
              <input
                type="text"
                className="form-control "
                onChange={(e) =>
                  setFormInfo({ ...formInfo, full_name: e.target.value })
                }
              />
            </div>

            <div className="row mb-3">
              <div className="col input-group">
                <span className="input-group-text" id="age">
                  Edad
                </span>
                <input
                  type="number"
                  className="form-control "
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, age: e.target.value })
                  }
                />
              </div>
              <div className="col input-group">
                <span className="input-group-text" id="phone">
                  Teléfono de contacto
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, phone: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col input-group">
                <span className="input-group-text" id="pregnancies">
                  Nº de embarazos
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, pregnancy_num: e.target.value })
                  }
                />
              </div>
              <div className="col input-group">
                <span className="input-group-text" id="births">
                  Nº de partos
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({ ...formInfo, birth_num: e.target.value })
                  }
                />
              </div>
              <div className="col input-group">
                <span className="input-group-text" id="interruptions">
                  Nº de abortos
                </span>
                <input
                  type="number"
                  className="form-control"
                  onChange={(e) =>
                    setFormInfo({
                      ...formInfo,
                      interruption_num: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="birthdate">
                Fecha probable de parto
              </span>
              <input
                type="date"
                className="form-control"
                onChange={(e) =>
                  setFormInfo({ ...formInfo, birth_date: e.target.value })
                }
              />
            </div>

            <button
              id="save-form-button"
              className="btn btn-lg mb-3"
              onClick={() => {
                saveBirthplanForm();
              }}
            >
              Guardar
            </button>
          </div>
        ) : (
          //Section
          <div id={sections[sectionIndex - 2].id}>
            <div className="row">
              <div className="video col">
                <iframe
                  width="640"
                  height="360"
                  frameBorder="0"
                  allow=" fullscreen"
                  src={sections[sectionIndex - 2].video}
                  controls
                />
              </div>
              <div id="section-description" className="col mt-3">
                <h2 id="section-title" className="mb-4">
                  {sections[sectionIndex - 2].title}
                </h2>
                <h3 id="section-subtitle" className="mb-3">
                  {sections[sectionIndex - 2].subtitle}
                </h3>
                <h6> {sections[sectionIndex - 2].choose} </h6>
                <div id="section-answers">
                  <div
                    id={sections[sectionIndex - 2].answer[0].id}
                    className="form-check answer"
                  >
                    {sections[sectionIndex - 2].answer.map((ans) => {
                      if (ans.type == "checkbox" && ans.multiselect == false) {
                        return (
                          <CheckboxTiamati
                            section_id={sections[sectionIndex - 2].id}
                            sections={sections}
                            setSections={setSections}
                            answer={ans}
                            key={ans.id}
                          />
                        );
                      } else if (
                        ans.type == "checkbox" &&
                        ans.multiselect == true
                      ) {
                        return (
                          <MultiSelectTiamati
                            section_id={sections[sectionIndex - 2].id}
                            sections={sections}
                            setSections={setSections}
                            answer={ans}
                            key={ans.id}
                          />
                        );
                      }
                    })}
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
                      {sections[sectionIndex - 2].comments.map((com) => {
                        return (
                          <div
                            id={com.id}
                            className="card comment-card"
                            key={com.id}
                          >
                            <div className="card-header d-flex">
                              <i className="fa-solid fa-user user-avatar me-2"></i>
                              <h6>{com.user}</h6>
                            </div>
                            <div className="card-body">
                              <p className="card-text">{com.text}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
