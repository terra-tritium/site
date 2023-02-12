import React, { useEffect, useState } from "react";
import "./countdown.css";
import BannerImg from "../../assets/bg-banner.jpg";


function Banner() {

  const [days, setDays] = useState(239);
  const [hours, setHours] = useState(23);
  const [minutes, setMinutes] = useState(59);
  const [seconds, setSeconds] = useState(0);

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
        
      </div>
    </div>
  );
}

export default Banner;
