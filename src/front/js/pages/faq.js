import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/faq.css";
import { Qa } from "../component/qa";
import logo from "../../../img/logo/logo.png";

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
    <div className="container pb-4 bg-frame bg-03" id="faq-container">
      <div className="bg-T my-2">
          <div className="bg-wh-pl px-4 my-2">
            FAQ
          </div>
      </div>
      {/* FAQ usuarias */}
      <div id="faq-users">
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
{/*       <div id="faq-business">
        <h3 className="mt-3">Empresas</h3>
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
      </div> */}
    </div>
  );
};
