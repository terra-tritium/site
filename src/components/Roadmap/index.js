import React from "react";
import RoadmapImg from '../../assets/roadmap.jpg'
import StarBackground from '../StarBackground'



function Roadmap() {
  return (    
    
      <div className="mpl-box-md bg-light1" id="roadmap">
        <div
          className="container text-center"
          data-sr="works"
          data-sr-duration="1200"
          data-sr-distance="20"
        >
          <h2 className="display-2 mb-60" data-sr-item="works">
            Rodmap
          </h2>
          <div
            className="row vgap"
            data-sr="gallery"
            data-sr-interval="120"
            data-sr-duration="1200"
            data-sr-distance="20"
          >
            <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
              
                <span >
                  <img className="mpl-image-rodmap" src={RoadmapImg} alt="" />
                </span>
              
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Roadmap;
