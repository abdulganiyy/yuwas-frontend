import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_navs">
        <div>
          <h4>About Us</h4>
          <p>
            Yuswas is a renowned construction company with a long term trademark
            for quality and satisfaction of clients.
          </p>
          <div className="social-icons">
            <span className="social-icon">
              <ion-icon name="logo-facebook"></ion-icon>
            </span>
            <span className="social-icon">
              <ion-icon name="logo-twitter"></ion-icon>
            </span>
            <span className="social-icon">
              <ion-icon name="logo-instagram"></ion-icon>
            </span>
          </div>
        </div>
      </div>
      <div className="footer_quoteform"></div>
    </footer>
  );
};

export default Footer;
