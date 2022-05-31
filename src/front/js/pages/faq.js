import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/faq.css";
import { Navbar } from "../component/navbar";
import { Link } from "react-router-dom";

export const Faq = () => {
  const { store, actions } = useContext(Context);
  const { show, setShow } = useState(false);

  return (
    <div className="container">
      <h1 id="faq-title" className="text-center">
        Preguntas Frecuentes
      </h1>
      {/* FAQ usuarias */}
      <div id="faq-users">
        <h3>Usuarias</h3>
        {store.faq.map((faqs) => {
          return (
            <div className="accordion" id="user-questions" key={faqs.id}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={faqs.question_id}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`${"#"}` + faqs.answer_id}
                    aria-expanded="false"
                    aria-controls={faqs.answer_id}
                    onClick={() => {
                      setShow === true;
                    }}
                  >
                    {faqs.question}
                  </button>
                </h2>
                <div
                  id={faqs.answer_id}
                  className={
                    show === true
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  aria-labelledby={faqs.question_id}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{faqs.answer}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ empresas */}
      <div id="faq-business">
        <h3>Empresas</h3>
        {store.bfaq.map((bfaqs) => {
          return (
            <div className="accordion" id="business-questions" key={bfaqs.id}>
              <div className="accordion-item">
                <h2 className="accordion-header" id={bfaqs.question_id}>
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`${"#"}` + bfaqs.answer_id}
                    aria-expanded="false"
                    aria-controls={bfaqs.answer_id}
                    onClick={() => {
                      setShow === true;
                    }}
                  >
                    {bfaqs.question}
                  </button>
                </h2>
                <div
                  id={bfaqs.answer_id}
                  className={
                    show === true
                      ? "accordion-collapse collapse show"
                      : "accordion-collapse collapse"
                  }
                  aria-labelledby={bfaqs.question_id}
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">{bfaqs.answer}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
