import React, { useState, useEffect } from "react";
import BannerImg1 from "../../assets/bg-banner-1.jpg";
import BannerImg2 from "../../assets/bg-banner-2.jpg";
import BannerImg3 from "../../assets/bg-banner-3.jpg";
import LogoImg from "../../assets/logoBanner.svg";

function Banner() {
  const [bannerImg, setBannerImg] = useState("");

  useEffect(() => {
    const bannerImgs = [BannerImg1, BannerImg2, BannerImg3];
    const randomIndex = Math.floor(Math.random() * bannerImgs.length);
    setBannerImg(bannerImgs[randomIndex]);
  }, []);

  return (
    <div className="content-wrap">
      <div>
        <section className="mpl-banner mpl-banner-top mpl-banner-parallax">
          <div className="mpl-image" data-speed="0.8">
            <img src={bannerImg} alt="" className="jarallax-img" />
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
