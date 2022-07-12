import React, { useEffect, useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/birthplan.css";
import "../../styles/index.css";
import { Navbar } from "../component/navbar";
import { CheckboxTiamati } from "../component/checkboxTiamati";
import { MultiSelectTiamati } from "../component/multiSelectTiamati";
import { Link } from "react-router-dom";
import logo from "../../../img/logo/logo.png";
import { BirthplanSection } from "../component/birthplanSection";
import { BirthplanComment } from "../component/birthplanComment";

export const Birthplan = () => {
  const { store, actions } = useContext(Context);
  const [sectionIndex, setSectionIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    actions.getBirthplanSection();
    actions.getBirthplanAnswer();
    actions.getBirthplanComment();
    actions.getBirthplanSubsection();
  }, []);

  return (
    <div>
      {/* Menu */}
      <nav
        className="navbar navbar-light fixed-top position-relative"
        id="plan-menu"
      >
        <div>
          <div>
            <button id="pdf-button" className="btn-fill">
              Generar plan de parto
            </button>
          </div>
        </div>

        {store.birthplan_section[sectionIndex] ? (
          <h1 id="title">{store.birthplan_section[sectionIndex].title}</h1>
        ) : null}

        <div id="menu-buttons">
          <button
            id="before-button"
            className="btn-slide i me-2"
            onClick={() => {}}
          >
            <i className="icon-arrow-left"></i>
            Anterior
          </button>
          <button id="after-button" className="btn-slide" onClick={() => {}}>
            Siguiente
            <i className="icon-arrow-right"></i>
          </button>
        </div>
      </nav>

      {/* Section */}
      <BirthplanSection
        section={store.birthplan_section[sectionIndex]}
        sectionIndex={sectionIndex}
        subsections={store.birthplan_subsection}
      ></BirthplanSection>

      <div id="comments" className="accordion">
        <BirthplanComment />
      </div>
    </div>
  );
};
