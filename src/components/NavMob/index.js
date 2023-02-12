import React from "react";
import Logo from "../../assets/logo-studio.svg";


function NavMob() {
  
  return (
    <nav className="mpl-navbar mpl-navbar-mobile">
            <div className="mpl-navbar-container">
                <div className="mpl-navbar-head">
                    <a href="index.html" className="mpl-navbar-brand">
                        <img src={Logo} alt=""/>
                    </a>  
                    <a href="#" className="mpl-navbar-toggle">
                        <span></span><span></span><span></span><span></span>
                    </a>                  
                </div>
                <div className="mpl-navbar-body">
                    <ul className="mpl-navbar-nav">
                        <li>
                            <a href="#preview" className="mpl-nav-link mpl-nav-link-collapse mpl-collapsed" role="button">
                                <span className="mpl-nav-link-name"> Preview </span>
                             </a>
                        </li>                   
                        <li>
                            <a href="#roadmap" className="mpl-nav-link mpl-nav-link-collapse mpl-collapsed" role="button">
                                <span className="mpl-nav-link-name"> Roadmap </span>
                            </a>
                        </li>
                        <li>
                            <a href="#team" className="mpl-nav-link mpl-nav-link-collapse mpl-collapsed" role="button">
                                <span className="mpl-nav-link-name"> Team </span>
                            </a>
                        </li>

                        <li>
                            <a href="#support" className="mpl-nav-link mpl-nav-link-collapse mpl-collapsed" role="button">
                                <span className="mpl-nav-link-name"> Support </span>
                            </a>
                        </li>

                        <li>
                            <a href="#community" className="mpl-nav-link mpl-nav-link-collapse mpl-collapsed" role="button">
                                <span className="mpl-nav-link-name"> Community </span>
                            </a>
                        </li>
                        <li>
                            <a href="#news" className="mpl-nav-link mpl-nav-link-collapse mpl-collapsed" role="button">
                                <span className="mpl-nav-link-name"> News </span>
                        </a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavMob;
