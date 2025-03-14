import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">
            <img
              src="images/logo_white.svg"
              alt="Zenova Logo - Dark Mode"
              className="logo-white"
            />
            <img
              src="images/logo_black.svg"
              alt="Zenova Logo - Light Mode"
              className="logo-dark"
            />
          </a>
        </div>
        <div className="nav__menu__btn" id="menu-btn">
          <i className="ri-menu-fold-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links">
        <li>
          <a href="#home" className="nav__highlight">
            Home
          </a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#service">Services</a>
        </li>
        <li>
          <a href="#classes">Classes</a>
        </li>
        <li>
          <a href="#contact">Gallery</a>
        </li>
        <li>
          <a href="#">Join Us</a>
        </li>
      </ul>
      <div className="nav__btns">
        <button className="btn">Join Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
