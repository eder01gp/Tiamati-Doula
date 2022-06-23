import React from "react";
import whatsapp from "../../../img/logo/whatsapp.png";
import insta from "../../../img/logo/Instagram.png";

export const Footer = () => (
  <footer className="footer text-center">
    <div className="row">
      <a id="footer-phone" href="tel:+34 644 75 46 71" className="col-12 mb-2">
        +34 644 75 46 71
      </a>
      <a
        id="footer-email"
        href="mailto:hello@tiamati.com"
        className="col-12 mb-2"
      >
        hello@tiamati.com
      </a>
    </div>

    <img
      src={insta}
      id="insta-logo"
      onClick={() => {
        window.open("https://www.instagram.com/doulatiamati/");
      }}
    />

    <img
      src={whatsapp}
      id="whatsapp-logo"
      className="whatsapp_float fixed-bottom"
      rel="noopener noreferrer"
      onClick={() => {
        window.open("https://wa.me/34644754671");
      }}
    />
  </footer>
);
