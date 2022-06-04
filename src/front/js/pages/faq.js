
import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/faq.css";
import { Navbar } from "../component/navbar";
import { Qa } from "../component/qa";
import { Link } from "react-router-dom";

export const Faq = () => {
  const { store, actions } = useContext(Context);
  const { show, setShow } = useState(false);

  useEffect(() => {
    actions.getUserFaq();
  }, []);

  useEffect(() => {
    actions.getBusinessFaq();
  }, []);

  return (
    <div className="container">
      <h1 id="faq-title" className="text-center">
        Preguntas Frecuentes
      </h1>
      {/* FAQ usuarias */}
      <div id="faq-users">
        <h3>Usuarias</h3>
        {store.user_faq.map((faqs) => {
          return (
            <div className="accordion" id="user-questions" key={faqs.id}>
              <Qa
                question_id={faqs.question_id}
                question={faqs.question}
                answer_id={faqs.answer_id}
                answer={faqs.answer}
              />
            </div>
          );
        })}
      </div>

      {/* FAQ empresas */}
      <div id="faq-business">
        <h3>Empresas</h3>
        {store.business_faq.map((bfaqs) => {
          return (
            <div className="accordion" id="business-questions" key={bfaqs.id}>
              <Qa
                question_id={bfaqs.question_id}
                question={bfaqs.question}
                answer_id={bfaqs.answer_id}
                answer={bfaqs.answer}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
