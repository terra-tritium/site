import React  from "react";
import BannerImg from "../../assets/bg-banner.jpg";
import LogoImg from "../../assets/logoBanner.svg";


function Banner() {

  
  return (
    
    <div className="content-wrap">
      <div>
        <section className="mpl-banner mpl-banner-top mpl-banner-parallax">
          <div className="mpl-image" data-speed="0.8">
            <img src={BannerImg} alt="" className="jarallax-img" />
          </div>
          <div className="mpl-banner-content mpl-box-lg pt-60">
            <div
              className="container"
              data-sr="banner"
              data-sr-interval="200"
              data-sr-duration="1200"
              data-sr-distance="20"
            >
              <div className="row justify-content-center">
                <div className="col-12 col-lg-9 text-center">
                <img src={LogoImg} alt="" className="logo-img" />
                  <p className="lead" data-sr-item="banner">
                    Experience the future of MMO gaming in this exciting WEB3
                    strategy game. Lead your civilization thru galaxies, mining
                    and earning real crypto assets.
                  </p>
                  </div>
              </div>
            </div>
          </div>
        </section> 
        
      </div>
    </div>
  );
}

export default Banner;
