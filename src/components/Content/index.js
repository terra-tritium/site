import React from "react";
import Banner from "../../assets/bg-banner.jpg";
import Work1 from "../../assets/work-1-760x560.jpg";
import Work2 from "../../assets/work-2-760x560.jpg";
import Work3 from "../../assets/work-3-760x560.jpg";
import Work4 from "../../assets/work-4-760x560.jpg";
import Work5 from "../../assets/work-5-760x560.jpg";
import Work6 from "../../assets/work-6-760x560.jpg";
import IMG1 from "../../assets/work-1-1920x1080.jpg";
import IMG2 from "../../assets/work-2-1920x1080.jpg";
import IMG3 from "../../assets/work-3-1920x1080.jpg";
import IMG4 from "../../assets/work-4-1920x1080.jpg";
import IMG5 from "../../assets/work-5-1920x1080.jpg";
import IMG6 from "../../assets/work-6-1920x1080.jpg";



function Content() {
  return (
    
    <div className="content-wrap">
      <div>
        <section className="mpl-banner mpl-banner-top mpl-banner-parallax">
          <div className="mpl-image" data-speed="0.8">
            <img src={Banner} alt="" className="jarallax-img" />
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
        <div className="mpl-box-sm">
                    <div className="container">
                        <div className="row justify-content-center hgap-lg vgap-lg">
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="mpl-number">
                                    <div className="h2 mpl-count">54</div>
                                    <div>Awards</div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="mpl-number">
                                    <div className="h2 mpl-count">780+</div>
                                    <div>Happy Clients</div>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="mpl-number">
                                    <div className="h2 mpl-count">1648</div>
                                    <div>Projects Done</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <div className="mpl-box-md bg-light" id="our-works">
        <div className="container text-center" data-sr="works" data-sr-duration="1200" data-sr-distance="20">
        <h2 className="display-2 mb-60" data-sr-item="works">Our Works</h2>
        <div className="row vgap" data-sr="gallery" data-sr-interval="120" data-sr-duration="1200" data-sr-distance="20">
          <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
            <a className="mpl-gallery-item" href={IMG1} data-fancybox="gallery" data-animation-effect="fade">
              <span className="mpl-image">
                <img src={Work1} alt="" />
              </span>
              <svg className="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
              </svg>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
            <a className="mpl-gallery-item" href={IMG2} data-fancybox="gallery" data-animation-effect="fade">
              <span className="mpl-image">
                <img src={Work2} alt="" />
              </span>
              <svg className="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
               </svg>
           </a>
           </div>
           <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
            <a className="mpl-gallery-item" href={IMG3} data-fancybox="gallery" data-animation-effect="fade">
              <span className="mpl-image">
                <img src={Work3} alt="" />
              </span>
              <svg className="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
               </svg>
           </a>
           </div>
           <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
            <a className="mpl-gallery-item" href={IMG4} data-fancybox="gallery" data-animation-effect="fade">
              <span className="mpl-image">
                <img src={Work4} alt="" />
              </span>
              <svg className="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
               </svg>
           </a>
           </div>
           <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
            <a className="mpl-gallery-item" href={IMG5} data-fancybox="gallery" data-animation-effect="fade">
              <span className="mpl-image">
                <img src={Work5} alt="" />
              </span>
              <svg className="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
               </svg>
           </a>
           </div>
           <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
            <a className="mpl-gallery-item" href={IMG6} data-fancybox="gallery" data-animation-effect="fade">
              <span className="mpl-image">
                <img src={Work6} alt="" />
              </span>
              <svg className="icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
               </svg>
           </a>
           </div>
           <div className="row justify-content-center">
             <div className="col-12 col-lg-8">
                <h3 className="display-3 mt-60" data-sr-item="works">Project Moon</h3>
                <p data-sr-item="works">I form beginning place you're god, be give were one dry dominion divide behold called have. Together own great together earth winged their. Of firmament seasons thing seed For.</p>
             
            </div>
            </div>
        </div>
    </div>
    </div>
  </div>      
</div>  
  


  );
}

export default Content;
