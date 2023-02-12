import React, { useEffect } from "react";
import './style.css'


let preloaderTimer = null;

function Preloader() {
  useEffect(() => {
    const $preloader = document.querySelector(".mpl-preloader");
    const $preloaderProgress = document.querySelector(".mpl-preloader-progress div");
    $preloaderProgress.style.transitionDuration = '2s';
    $preloaderProgress.style.width = '100%';

    function closePreloader() {
      clearTimeout(preloaderTimer);
      $preloader.classList.add("mpl-preloader-hide");
    }

    if ($preloader) {
      preloaderTimer = setTimeout(closePreloader, 3000);
    }
  }, []);

  return (
    <>
      <div className="mpl-preloader">
        <div className="mpl-preloader-content">
          <div className="mpl-preloader-title display-1 h1">Terra Tritium</div>
          <div className="mpl-preloader-progress">
            <div></div>
          </div>
        </div>
      </div>
      <div className="mpl-preloader-bg">
        
      </div>
    </>
  );
}

export default Preloader;