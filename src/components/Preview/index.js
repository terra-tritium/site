import React from "react";
import Work1 from "../../assets/work-1-760x560.jpg";
import Work2 from "../../assets/work-2-760x560.jpg";
import Work3 from "../../assets/work-3-760x560.jpg";
import Work4 from "../../assets/work-4-760x560.jpg";
import Work5 from "../../assets/work-5-760x560.jpg";
import Work6 from "../../assets/work-6-760x560.jpg";


function Preview() {


  return (
    <div className="content-wrap">
      <div>
        <div className="mpl-box-md bg-light" id="preview">
          <div
            className="container text-center"
            data-sr="works"
            data-sr-duration="1200"
            data-sr-distance="20"
          >
            <h2 className="display-2 mb-60" data-sr-item="works">
              Preview
            </h2>
            <div
              className="row vgap"
              data-sr="gallery"
              data-sr-interval="120"
              data-sr-duration="1200"
              data-sr-distance="20"
            >
              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <span className="mpl-image">
                  <img src={Work1} alt="" />
                </span>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <span className="mpl-image">
                  <img src={Work2} alt="" />
                </span>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <span className="mpl-image">
                  <img src={Work3} alt="" />
                </span>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <span className="mpl-image">
                  <img src={Work4} alt="" />
                </span>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <span className="mpl-image">
                  <img src={Work5} alt="" />
                </span>
              </div>

              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <span className="mpl-image">
                  <img src={Work6} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Preview;
