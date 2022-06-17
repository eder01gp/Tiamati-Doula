import React from "react";
import whatsapp from "../../../img/logo/whatsapp.png";
import insta from "../../../img/logo/Instagram.png";

export const Footer = () => (
  <footer className="footer text-center">
    <h2 id="contacto-title">Contacto</h2>
    <h4 id="footer-phone">+34 644 75 46 71</h4>
    <h4 id="footer-email">hello@tiamati.com</h4>
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
        window.open("https://wa.me/34615077934");
      }}
    />
  </footer>
);
