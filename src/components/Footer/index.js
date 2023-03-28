import React from "react";
import FooterImg from '../../assets/bg-footer.jpg'
import Facebook from '../../assets/facebook.png'
import Gmail from '../../assets/gmail.png'
import Twitter from '../../assets/twitter.png'
import Twitch from '../../assets/twitch.png'
import Discord from '../../assets/discord.png'
import Telegram from '../../assets/telegram.png'
import Youtube from '../../assets/youtube.png'
import Instagram from '../../assets/instagram.png'

import './style.css'

function Footer() {
  return (
    <>
    <div className="mpl-box-md bg-light" id="community">
      <div className="container">
        <h2 className="display-2 mb-60 text-center">
          Community
        </h2>
    <footer className="mpl-footer mpl-footer-parallax mpl-footer-social">
      <div className="mpl-image" data-speed="0.9" data-img-position="50% 0%">
        <img src={FooterImg} alt="" className="jarallax-img" />
      </div>
      <div className="mpl-footer-wrapper">
        <div className="mpl-footer-container container">
          <div className="mpl-footer-content">
            <div className="row vgasp" data-sr="footer" data-sr-interval="120" data-sr-duration="1200" data-sr-distance="20">
              <div className="col-6 col-sm-3" data-sr-item="footer">
                <a href="https://discord.gg/Ud6xgDrm" className="mpl-social">
                  <span className="mpl-social-icon">
                  <img src={Discord} className="mpl-image-icon" alt=""/>
                  </span>
                  
                </a>
              </div>
              <div className="col-6 col-sm-3" data-sr-item="footer">
                <a href="https://t.me/terratritium" className="mpl-social">
                  <span className="mpl-social-icon">
                  <img src={Telegram} className="mpl-image-icon" alt=""/>
                  </span>
                  
                </a>
              </div>
              <div className="col-6 col-sm-3" data-sr-item="footer">
                <a href="https://www.youtube.com" className="mpl-social">
                  <span className="mpl-social-icon">
                  <img src={Youtube} className="mpl-image-icon" alt=""/>
                  </span>
                  
                </a>
              </div>
              <div className="col-6 col-sm-3" data-sr-item="footer">
                <a href="https://www.twitch.tv/terratritium " className="mpl-social">
                  <span className="mpl-social-icon">
                  <img src={Twitch} className="mpl-image-icon" alt=""/>
                  </span>
                  
                </a>
              </div>
              <div className="col-6 col-sm-3" data-sr-item="footer">
                <a href="https://www.facebook.com/profile.php?id=100089593271691" className="mpl-social">
                  <span className="mpl-social-icon">
                  <img src={Facebook} className="mpl-image-icon" alt=""/>
                  </span>
                  
                </a>
              </div>
              <div className="col-6 col-sm-3" data-sr-item="footer">
                <a href="https://www.instagram.com" className="mpl-social">
                  <span className="mpl-social-icon">
                  <img src={Instagram} className="mpl-image-icon" alt=""/>
                  </span>
                  
                </a>
              </div>
              <div className="col-6 col-sm-3" data-sr-item="footer">
                <a href="https://twitter.com/terratritium" className="mpl-social">
                  <span className="mpl-social-icon">
                  <img src={Twitter} className="mpl-image-icon" alt=""/>
                  </span>
                  
                </a>
              </div>
              <div className="col-6 col-sm-3" data-sr-item="footer">
                <a href="mailto:terratritium@gmail.com" className="mpl-social">
                  <span className="mpl-social-icon">
                  <img src={Gmail} className="mpl-image-icon" alt=""/>
                  </span>
                  
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </div>
    </div>
    </>
  );
}

export default Footer;
