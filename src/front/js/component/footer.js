import React, { Component } from "react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="footer text-center fixed-bottom">
    <h2>Contacto</h2>
    <h4 id="footer-phone">+34 644 75 46 71</h4>
    <h4 id="footer-email">hello@tiamati.com</h4>
    <Link to="" id="footer-insta-link">
      <i class="fa-brands fa-instagram"></i>
    </Link>
  </footer>
);
