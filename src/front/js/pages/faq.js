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
      <div id="faq-usuarias">
        <h3>Usuarias</h3>
        <p>
          <a
            className="faq-question"
            data-bs-toggle="collapse"
            href="#question1"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </a>
        </p>
        <div className="collapse" id="question1">
          <div className="card card-body">
            Praesent volutpat euismod massa ut varius. In sem quam, tincidunt in
            sollicitudin vitae, malesuada a nunc. Vivamus vitae sapien lacus.
            Nulla interdum lorem non porttitor gravida. Aenean posuere sapien
            nec est feugiat mollis. Nullam nisl nisi, fringilla eget sagittis
            eget, lacinia sit amet tortor. Duis vestibulum nisi lacus, nec
            ullamcorper purus ullamcorper vitae.
          </div>
        </div>

        <p>
          <a
            className="faq-question"
            data-bs-toggle="collapse"
            href="#question2"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </a>
        </p>
        <div className="collapse" id="question2">
          <div className="card card-body">
            Praesent volutpat euismod massa ut varius. In sem quam, tincidunt in
            sollicitudin vitae, malesuada a nunc. Vivamus vitae sapien lacus.
            Nulla interdum lorem non porttitor gravida. Aenean posuere sapien
            nec est feugiat mollis. Nullam nisl nisi, fringilla eget sagittis
            eget, lacinia sit amet tortor. Duis vestibulum nisi lacus, nec
            ullamcorper purus ullamcorper vitae.
          </div>
        </div>

        <p>
          <a
            className="faq-question"
            data-bs-toggle="collapse"
            href="#question3"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </a>
        </p>
        <div className="collapse" id="question3">
          <div className="card card-body">
            Praesent volutpat euismod massa ut varius. In sem quam, tincidunt in
            sollicitudin vitae, malesuada a nunc. Vivamus vitae sapien lacus.
            Nulla interdum lorem non porttitor gravida. Aenean posuere sapien
            nec est feugiat mollis. Nullam nisl nisi, fringilla eget sagittis
            eget, lacinia sit amet tortor. Duis vestibulum nisi lacus, nec
            ullamcorper purus ullamcorper vitae.
          </div>
        </div>

        <p>
          <a
            className="faq-question"
            data-bs-toggle="collapse"
            href="#question4"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </a>
        </p>
        <div className="collapse" id="question4">
          <div className="card card-body">
            Praesent volutpat euismod massa ut varius. In sem quam, tincidunt in
            sollicitudin vitae, malesuada a nunc. Vivamus vitae sapien lacus.
            Nulla interdum lorem non porttitor gravida. Aenean posuere sapien
            nec est feugiat mollis. Nullam nisl nisi, fringilla eget sagittis
            eget, lacinia sit amet tortor. Duis vestibulum nisi lacus, nec
            ullamcorper purus ullamcorper vitae.
          </div>
        </div>
      </div>

      {/* FAQ empresas */}
      <div id="faq-empresas">
        <h3>Empresas</h3>
        <p>
          <a
            className="faq-question"
            data-bs-toggle="collapse"
            href="#question5"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </a>
        </p>
        <div className="collapse" id="question5">
          <div className="card card-body">
            Praesent volutpat euismod massa ut varius. In sem quam, tincidunt in
            sollicitudin vitae, malesuada a nunc. Vivamus vitae sapien lacus.
            Nulla interdum lorem non porttitor gravida. Aenean posuere sapien
            nec est feugiat mollis. Nullam nisl nisi, fringilla eget sagittis
            eget, lacinia sit amet tortor. Duis vestibulum nisi lacus, nec
            ullamcorper purus ullamcorper vitae.
          </div>
        </div>

        <p>
          <a
            className="faq-question"
            data-bs-toggle="collapse"
            href="#question6"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </a>
        </p>
        <div className="collapse" id="question6">
          <div className="card card-body">
            Praesent volutpat euismod massa ut varius. In sem quam, tincidunt in
            sollicitudin vitae, malesuada a nunc. Vivamus vitae sapien lacus.
            Nulla interdum lorem non porttitor gravida. Aenean posuere sapien
            nec est feugiat mollis. Nullam nisl nisi, fringilla eget sagittis
            eget, lacinia sit amet tortor. Duis vestibulum nisi lacus, nec
            ullamcorper purus ullamcorper vitae.
          </div>
        </div>

        <p>
          <a
            className="faq-question"
            data-bs-toggle="collapse"
            href="#question7"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </a>
        </p>
        <div className="collapse" id="question7">
          <div className="card card-body">
            Praesent volutpat euismod massa ut varius. In sem quam, tincidunt in
            sollicitudin vitae, malesuada a nunc. Vivamus vitae sapien lacus.
            Nulla interdum lorem non porttitor gravida. Aenean posuere sapien
            nec est feugiat mollis. Nullam nisl nisi, fringilla eget sagittis
            eget, lacinia sit amet tortor. Duis vestibulum nisi lacus, nec
            ullamcorper purus ullamcorper vitae.
          </div>
        </div>

        <p>
          <a
            className="faq-question"
            data-bs-toggle="collapse"
            href="#question8"
            role="button"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
          </a>
        </p>
        <div className="collapse" id="question8">
          <div className="card card-body">
            Praesent volutpat euismod massa ut varius. In sem quam, tincidunt in
            sollicitudin vitae, malesuada a nunc. Vivamus vitae sapien lacus.
            Nulla interdum lorem non porttitor gravida. Aenean posuere sapien
            nec est feugiat mollis. Nullam nisl nisi, fringilla eget sagittis
            eget, lacinia sit amet tortor. Duis vestibulum nisi lacus, nec
            ullamcorper purus ullamcorper vitae.
          </div>
        </div>
      </div>
    </div>
  );
};
