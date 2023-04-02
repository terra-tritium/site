import React, { useState, useEffect } from "react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Logo1 from "../../assets/logo1.png";
import Logo2 from "../../assets/logo2.png";
import Logo3 from "../../assets/logo3.png";
import Logo4 from "../../assets/logo5.png";
import Logo5 from "../../assets/logo6.png";
import "./style.css";

SwiperCore.use([Autoplay, Pagination]);

function Carousel() {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const mySwiper = new Swiper(".swiper-container", {
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      spaceBetween: 80,
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
    });
  }, []);

  return (
    <div className="mpl-carousel mpl-carousel-vertical-center text-center swiper-container">
  <div className="swiper-wrapper">
    {logos.map((logo, index) => (
      <div key={index} className="swiper-slide">
        <img src={logo} alt={`Logo ${index}`} />
      </div>
    ))}
  </div>
  <div className="swiper-button-prev"></div>
  <div className="swiper-button-next"></div>
</div>
  );
}

export default Carousel;
