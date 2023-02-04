import React from "react";
import Logo from "../../assets/logo-studio.svg";
import "./style.css";

function Nav() {
  
  return (
    <nav className="mpl-navbar-top mpl-navbar">
      <div className="mpl-navbar-mobile-overlay"></div>
      <div className="container mpl-navbar-container">
        <a href="#" className="mpl-navbar-toggle"></a>
        <div className="mpl-navbar-brand">
          <a href="/">
            <img src={Logo} />
          </a>
        </div>
        <div className="mpl-navbar-content">
          <ul className="mpl-navbar-nav">
            <li>
              <a href="#preview" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> Preview </span>
              </a>
            </li>
            <li>
              <a href="#roadmap" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> Roadmap </span>
              </a>
            </li>
            <li>
              <a href="#team" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> Team </span>
              </a>
            </li>

            <li>
              <a href="#support" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> Support </span>
              </a>
            </li>

            <li>
              <a href="#community" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> Community </span>
              </a>
            </li>
            <li>
              <a href="#news" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> News </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
