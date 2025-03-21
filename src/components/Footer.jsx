import React from "react";

const Footer = () => {
  return (
    <section className="footer">
      <div className="section__container footer__container">
        <div className="footer__col">
          <a href="#" className="footer__logo">
            <img src="images/logo_white.svg" alt="logo" />
          </a>
          <ul className="footer__links">
            <li>
              <a href="tel:+2126552074218">
                <span>
                  <i className="ri-customer-service-line"></i>
                </span>{" "}
                +212 655 207 418
              </a>
            </li>
            <li>
              <a href="mailto:azilrababe@gmail.com">
                <span>
                  <i className="ri-mail-line"></i>
                </span>{" "}
                azilrababe@gmail.com
              </a>
            </li>
            <li>
              <a href="#">
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                kenitra, Morocco
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">services</a>
            </li>
            <li>
              <a href="#">classes</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Opening Hours</h4>
          <ul className="footer__links">
            <li>Weekdays 6am - 12am</li>
            <li>Weekends 7am - 10pm</li>
          </ul>
        </div>
      </div>
      <div className="footer__bar">
        Copyright © 2025 Zenova. All rights reserved.
      </div>
    </section>
  );
};

export default Footer;
