import React, { useState, useRef, useEffect } from 'react';
import './style.css';

const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  return (
    <div ref={ref}>
      <button className="hamburger" onClick={handleMenuToggle}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <a href="#" className="mpl-nav-link" onClick={handleLinkClick}>
              <span className="mpl-nav-link-name"> Home </span>
            </a>
          </li>
           
          <li>
            <a href="#roadmap" className="mpl-nav-link" onClick={handleLinkClick}>
              <span className="mpl-nav-link-name"> Roadmap </span>
            </a>
          </li>

          <li>
            <a href="#support" className="mpl-nav-link" onClick={handleLinkClick}>
              <span className="mpl-nav-link-name"> Contact Us </span>
            </a>
          </li>

          <li>
            <a href="#community" className="mpl-nav-link" onClick={handleLinkClick}>
              <span className="mpl-nav-link-name"> Community </span>
            </a>
          </li>
        </ul>
      </div>
      {isOpen && <div className="overlay" onClick={handleMenuToggle}></div>}
    </div>
  );
};

export default NavBarMobile;
