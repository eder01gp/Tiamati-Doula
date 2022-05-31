import React, { Component } from "react";
import { Link } from "react-router-dom";
import whatsapp from "../../../img/logo/whatsapp.png";
import insta from "/workspace/Tiamati-Doula/src/img/logo/Instagram.png";

export const Footer = () => (
  <footer className="footer text-center fixed-bottom">
    <h2 id="contacto-title">Contacto</h2>
    <h4 id="footer-phone">+34 644 75 46 71</h4>
    <h4 id="footer-email">hello@tiamati.com</h4>
    <Link to="" id="footer-insta-link">
      <img src={insta} id="insta-logo" />
    </Link>

    <a
      href="https://wa.me/34636519226"
      className="whatsapp_float fixed-bottom"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={whatsapp} alt="whatsapp logo" id="whatsapp-logo" />
    </a>
  </footer>
);
