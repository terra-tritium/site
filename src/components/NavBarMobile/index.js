import React, { useState } from 'react';
import './style.css';

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="hamburger" onClick={handleMenuToggle}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
        <li>
              <a href="#" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> Home </span>
              </a>
            </li>
           
            <li>
              <a href="#roadmap" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> Roadmap </span>
              </a>
            </li>
            

            <li>
              <a href="#support" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> Contact Us </span>
              </a>
            </li>

            <li>
              <a href="#community" className="mpl-nav-link">
                <span className="mpl-nav-link-name"> Community </span>
              </a>
            </li>
            
        </ul>
      </div>
    </>
  );
};

export default NavBarMobile;
