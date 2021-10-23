import React from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="nav-copywright-wrapper">
      <div className="footer_navs">
        <div>
          <h4>About Us</h4>
          <p>
            Yuswas is a renowned construction company with a long term trademark <br />
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
        <div className="services_footer">
          <h4>Services</h4>
          <ul>
            <li><Link>Construction</Link></li>
            <li><Link>House Renovation</Link></li>
            <li><Link>Painting</Link></li>
            <li><Link>Architecture Design</Link></li>

          </ul>
        </div>
        <div className="services_footer">
          <h4>About</h4>
          <ul>
            <li><Link>Staff</Link></li>
            <li><Link>Team</Link></li>
            <li><Link>Careers</Link></li>
          </ul>
        </div>
      </div>
      <div className="copywright"><p>Copyright ©2021 All rights reserved | Website created by Ingene Consults</p></div>
      </div>
      
      <div className="footer_quoteform">
        <div className="footer_quoteform-container">
        <div><input type="text" placeholder='Your Name' /></div>
        <div><input type="text" placeholder='Your Email' /></div>
        <div><input type="text" placeholder='Subject' /></div>
        <div><textarea type="text" placeholder='Message' className='message'/></div>
        <div><button type='submit'>SEND</button></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
