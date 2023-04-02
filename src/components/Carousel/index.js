import React from "react";
import Logo1 from '../../assets/logo1.png'
import Logo2 from '../../assets/logo2.png'
import Logo3 from '../../assets/logo3.png'
import Logo4 from '../../assets/logo5.png'
import Logo5 from '../../assets/logo6.png'
import "./style.css";

function Carousel() {

    return (
        <div className="mpl-box-sm bg-light1">
            <div className="sponsors">
                <h2 className="display-2 mb-60 text-center" data-sr data-sr-duration="1200" data-sr-distance="20">
                    Partners & Sponsors
                </h2>
            </div>


            <div className="container">
                <div className="mpl-carousel mpl-carousel-vertical-center text-center"
                    data-gap="30"
                    data-autoplay="5000"
                    data-loop="true"
                    data-slides="1"
                    data-breakpoints="1200:7,992:6,767:5,575:4,440:3,320:2">
                    <a href="https://www.garudanodes.com/" class="mpl-link-brand"><img src={Logo1} className="logo1" alt="" /></a>
                    <a href="https://openai.com/blog/chatgpt" class="mpl-link-brand"><img src={Logo2} className="logo2" alt="" /></a>
                    <a href="https://threejs.org/" class="mpl-link-brand"><img src={Logo3} className="logo3" alt="" /></a>
                    <a href="https://www.rust-lang.org/" class="mpl-link-brand"><img src={Logo4} className="logo4" alt="" /></a>
                    <a href="https://coinmarketcap.com/currencies/terra-luna/" class="mpl-link-brand"><img src={Logo5} className="logo5" alt="" /></a>
                </div>
            </div>
        </div>

    );
}

export default Carousel;
