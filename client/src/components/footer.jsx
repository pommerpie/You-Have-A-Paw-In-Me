// src/components/Footer.js
import React from 'react';
import './styles/footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
  return (
    <footer className='container mt-4'>
      <section className='content'>
        <div className='logo'>
          <img src="images/logo.svg" alt="" />
          <p>&copy; 2024 Therapy Animal Support Fund</p>
        </div>

        <div className="icons">
          <p className="social-container">
            <a
              href="#"
              className="youtube social"
            >
              <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a
              href="#"
              className="facebook social"
            >
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a
              href="#"
              className="instagram social"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="#" className="twitter social">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
