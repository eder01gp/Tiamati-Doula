import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/faq.css";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";

export const Faq = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <h1 id="faq-title" className="text-center">
        Preguntas Frecuentes
      </h1>
      {/* FAQ usuarias */}
      <div id="faq-users">
        <h3>Usuarias</h3>
        <div className="accordion" id="user-questions">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Sed placerat ante in orci varius fringilla. Nullam varius ligula
                nec rutrum convallis. Nam est neque, semper vitae velit nec,
                accumsan scelerisque mi. Integer egestas vestibulum posuere.
                Curabitur laoreet, lacus ut iaculis consectetur, odio dui
                posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Sed placerat ante in orci varius fringilla. Nullam varius ligula
                nec rutrum convallis. Nam est neque, semper vitae velit nec,
                accumsan scelerisque mi. Integer egestas vestibulum posuere.
                Curabitur laoreet, lacus ut iaculis consectetur, odio dui
                posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ empresas */}
      <div id="faq-business">
        <h3>Empresas</h3>
        <div className="accordion" id="business-questions">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="true"
                aria-controls="collapseThree"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse show"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Sed placerat ante in orci varius fringilla. Nullam varius ligula
                nec rutrum convallis. Nam est neque, semper vitae velit nec,
                accumsan scelerisque mi. Integer egestas vestibulum posuere.
                Curabitur laoreet, lacus ut iaculis consectetur, odio dui
                posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="true"
                aria-controls="collapseFour"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse show"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Sed placerat ante in orci varius fringilla. Nullam varius ligula
                nec rutrum convallis. Nam est neque, semper vitae velit nec,
                accumsan scelerisque mi. Integer egestas vestibulum posuere.
                Curabitur laoreet, lacus ut iaculis consectetur, odio dui
                posuere lacus, a molestie lorem ex at justo. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
