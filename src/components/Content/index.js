import React, { useEffect, useState } from "react";
import "./countdown.css";
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
  const [days, setDays] = useState(240);
  const [hours, setHours] = useState(6);
  const [minutes, setMinutes] = useState(16);
  const [seconds, setSeconds] = useState(20);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setSeconds(59);
        setMinutes(minutes - 1);
      }
      if (minutes === 0 && seconds === 59) {
        setMinutes(59);
        setHours(hours - 1);
      }
      if (hours === 0 && minutes === 59 && seconds === 59) {
        setHours(23);
        setDays(days - 1);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [days, hours, minutes, seconds]);

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
                    Experience the future of MMO gaming in this exciting WEB3
                    strategy game. Lead your civilization thru galaxies, mining
                    and earning real crypto assets.
                  </p>
                  <div className="countdown-container">
                    <div className="countdown-box">
                      <div className="countdown-number">{days}</div>
                      <div className="countdown-label">Days</div>
                    </div>
                    <div className="countdown-box">
                      <div className="countdown-number">{hours}</div>
                      <div className="countdown-label">Hours</div>
                    </div>
                    <div className="countdown-box">
                      <div className="countdown-number">{minutes}</div>
                      <div className="countdown-label">Minutes</div>
                    </div>
                    <div className="countdown-box">
                      <div className="countdown-number">{seconds}</div>
                      <div className="countdown-label">Seconds</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="mpl-box-md bg-light" id="our-works">
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
                <a
                  className="mpl-gallery-item"
                  href={IMG1}
                  data-fancybox="gallery"
                  data-animation-effect="fade"
                >
                  <span className="mpl-image">
                    <img src={Work1} alt="" />
                  </span>
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
                  </svg>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <a
                  className="mpl-gallery-item"
                  href={IMG2}
                  data-fancybox="gallery"
                  data-animation-effect="fade"
                >
                  <span className="mpl-image">
                    <img src={Work2} alt="" />
                  </span>
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
                  </svg>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <a
                  className="mpl-gallery-item"
                  href={IMG3}
                  data-fancybox="gallery"
                  data-animation-effect="fade"
                >
                  <span className="mpl-image">
                    <img src={Work3} alt="" />
                  </span>
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
                  </svg>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <a
                  className="mpl-gallery-item"
                  href={IMG4}
                  data-fancybox="gallery"
                  data-animation-effect="fade"
                >
                  <span className="mpl-image">
                    <img src={Work4} alt="" />
                  </span>
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
                  </svg>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <a
                  className="mpl-gallery-item"
                  href={IMG5}
                  data-fancybox="gallery"
                  data-animation-effect="fade"
                >
                  <span className="mpl-image">
                    <img src={Work5} alt="" />
                  </span>
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
                  </svg>
                </a>
              </div>
              <div className="col-12 col-md-6 col-lg-4" data-sr-item="gallery">
                <a
                  className="mpl-gallery-item"
                  href={IMG6}
                  data-fancybox="gallery"
                  data-animation-effect="fade"
                >
                  <span className="mpl-image">
                    <img src={Work6} alt="" />
                  </span>
                  <svg
                    className="icon"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V8M21 8V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H16M16 21H19C19.5304 21 20.0391 20.7893 20.4142 20.4142C20.7893 20.0391 21 19.5304 21 19V16M3 16V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H8" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
