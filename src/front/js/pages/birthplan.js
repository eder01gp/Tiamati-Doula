import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/birthplan.css";
import { Navbar } from "../component/navbar";
import { CheckboxTiamati } from "../component/checkboxTiamati";
import { MultiSelectTiamati } from "../component/multiSelectTiamati";
import { TextInputTiamati } from "../component/textInputTiamati";
import { Link } from "react-router-dom";

export const Birthplan = () => {
  const { store, actions } = useContext(Context);
  const [show, setShow] = useState(false);
  const [formInfo, setFormInfo] = useState({});
  const [sectionIndex, setSectionIndex] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "En dilatación",
      subtitle: "Espacio físico",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1654338916/GI_Oksi-73_ubelvu.mp4",
      multiselect: false,
      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "Lorem ipsum dolor sit amet",
          value: false,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Consectetur adipiscing elit",
          value: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate sapien. Sed egestas, magna sit amet maximus efficitur, diam odio blandit dolor, a tristique nunc lacus in urna. Integer consectetur tincidunt molestie. In eget tellus sed ligula facilisis lobortis. Aliquam ligula felis, tempor eu vehicula nec, commodo vel sem. Donec erat massa, feugiat ac euismod ut, pellentesque nec nibh. Etiam nunc diam, interdum eget orci eget, congue eleifend nisl. Suspendisse sit amet tempus urna. Ut vitae tortor arcu. Etiam volutpat nisl id justo placerat, a rhoncus turpis bibendum.",
        },
      ],
    },
    {
      id: 2,
      title: "En dilatación",
      subtitle: "Intimidad",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1654338855/RAJB5897_iazidv.mp4",
      multiselect: false,
      answer: [
        {
          id: 1,
          type: "checkbox",
          text: "dolor sit amet",
          value: false,
        },
        {
          id: 2,
          type: "checkbox",
          text: "Vivamus quis vulputate sapien",
          value: false,
        },
        {
          id: 3,
          type: "checkbox",
          text: "Sed egestas, magna sit",
          value: false,
        },
      ],
      comments: [
        {
          id: 1,
          user: "username2",
          text: "Vivamus quis vulputate sapien. Sed egestas, magna sit amet maximus efficitur, diam odio blandit dolor, a tristique nunc lacus in urna. Integer consectetur tincidunt molestie. In eget tellus sed ligula facilisis lobortis. Aliquam ligula felis, tempor eu vehicula nec, commodo vel sem. Donec erat massa, feugiat ac euismod ut, pellentesque nec nibh. Etiam nunc diam, interdum eget orci eget, congue eleifend nisl. Suspendisse sit amet tempus urna. Ut vitae tortor arcu. Etiam volutpat nisl id justo placerat, a rhoncus turpis bibendum.",
        },
        {
          id: 1,
          user: "username3",
          text: "tristique nunc lacus in urna. Integer consectetur tincidunt molestie. In eget tellus sed ligula facilisis lobortis. Aliquam ligula felis, tempor eu vehicula nec, commodo vel sem. Donec erat massa, feugiat ac euismod ut, pellentesque nec nibh. Etiam nunc diam, interdum eget orci eget, congue eleifend nisl. Suspendisse sit amet tempus urna. Ut vitae tortor arcu. Etiam volutpat nisl id justo placerat, a rhoncus turpis bibendum.",
        },
      ],
    },
    {
      id: 3,
      title: "Tercero",
      subtitle: "El tercero",
      video:
        "https://res.cloudinary.com/dxeieqxam/video/upload/v1654338916/GI_Oksi-73_ubelvu.mp4",
      multiselect: false,
      answer: [
        {
          id: 1,
          type: "text",
          text: "ipsum dolor sit amet",
        },
        {
          id: 2,
          type: "text",
          text: "ALorem ipsum dolor sit amet",
        },
      ],
      comments: [
        {
          id: 1,
          user: "username",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis vulputate sapien. Sed egestas, magna sit amet maximus efficitur, diam odio blandit dolor, a tristique nunc lacus in urna. Integer consectetur tincidunt molestie. In eget tellus sed ligula facilisis lobortis. Aliquam ligula felis, tempor eu vehicula nec, commodo vel sem. Donec erat massa, feugiat ac euismod ut, pellentesque nec nibh. Etiam nunc diam, interdum eget orci eget, congue eleifend nisl. Suspendisse sit amet tempus urna. Ut vitae tortor arcu. Etiam volutpat nisl id justo placerat, a rhoncus turpis bibendum.",
        },
      ],
    },
  ]);
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
    <div className="container">
      <div className="row text-center" id="plan-title">
        <h1>Plan de parto interactivo</h1>
      </div>
      <div className="row" id="birthplan">
        {/* Menu */}
        <nav
          className="navbar navbar-light fixed-top position-relative"
          id="plan-menu"
        >
          <div>
            <div>
              <button className="btn btn-success">Generar plan de parto</button>
            </div>
          </div>

          <div id="menu-buttons">
            <button
              className="btn btn-primary me-2"
              onClick={() => {
                if (sectionIndex !== 0) {
                  setSectionIndex((sectionIndex) => sectionIndex - 1);
                }
              }}
            >
              Anterior
            </button>
            <button
              className="btn btn-primary"
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
          <div id="welcome" className="text-center">
            <h1>BIENVENIDA</h1>
            <p>
              Praesent in viverra elit, ac fringilla augue. Integer venenatis
              fermentum ante eu faucibus. Sed ultricies non tortor in eleifend.
              Proin ac orci congue, dapibus nibh sed, lacinia nisl. Aenean
              tincidunt leo at libero semper interdum. Donec aliquam blandit
              tortor sit amet blandit. Fusce suscipit libero ipsum, non aliquam
              nisi tempor sed. Phasellus eget risus eget nibh vehicula finibus.
              Ut consectetur risus vel lectus efficitur fermentum. Vivamus vel
              ipsum elit. Ut id purus venenatis, varius nisi sed, commodo nulla.
              Praesent auctor leo elementum nisl fringilla, ut aliquam tellus
              rhoncus.
            </p>
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
              className="btn btn-primary mb-3"
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
              <div id="video" className="col-6">
                <video width="600" controls>
                  <source src={sections[sectionIndex - 2].video} />
                </video>
              </div>
              <div id="topic-description" className="col-6">
                <h3 id="title">{sections[sectionIndex - 2].title}</h3>
                <h5 id="subtitle">{sections[sectionIndex - 2].subtitle}</h5>

                <div id="topic-answers">
                  <div
                    id={sections[sectionIndex - 2].answer[0].id}
                    className="form-check answer"
                  >
                    {sections[sectionIndex - 2].answer.map((ans) => {
                      if (ans.type == "checkbox" && !ans.multiselect) {
                        return <CheckboxTiamati />;
                      } else if (ans.type == "checkbox" && ans.multiselect) {
                        return <MultiSelectTiamati />;
                      } else {
                        return <TextInputTiamati />;
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
                          <div id={com.id} className="card comment-card">
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
