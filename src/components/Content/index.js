import React from "react";
import Banner from "../../assets/banner.jpg";

function Content() {
  return (
    <div className="content-wrap">
      <div className="mpl-navbar-mobile-overlay"></div>

      <div>
        <section className="mpl-banner mpl-banner-top mpl-banner-parallax">
          <div className="mpl-image" data-speed="0.8">
            <img src={Banner} />
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
                  <h1 className="display-1" data-sr-item="banner">
                    Terra Tritium
                  </h1>
                  <p className="lead" data-sr-item="banner">
                    "Experience the future of MMO gaming in this exciting WEB3
                    strategy game. Lead your civilization thru galaxies, mining
                    and earning real crypto assets."
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

export default Content;
