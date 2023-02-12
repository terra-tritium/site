import React from "react";
import "./style.css";

function News() {
  return (
    <div className="content-wrap">
      <div>
        <div className="mpl-box-md bg-light" id="news">
          <div
            className="container text-center"
            data-sr="works"
            data-sr-duration="1200"
            data-sr-distance="20"
          >
            <h2 className="display-2 mb-60" data-sr-item="works">
              News
            </h2>
            <div className="news-page__container">
              <div className="news-page__card">
                <div className="news-page__card-img-container">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="News thumbnail"
                  />
                </div>
                <h2 className="news-page__card-title">
                  Descoberta de Vida Alienígena
                </h2>
                <p className="news-page__card-description">
                  Uma equipe de cientistas da NASA anunciou a descoberta de
                  evidências de vida em um planeta em outro sistema solar.
                </p>
              </div>
              <div className="news-page__card">
                <div className="news-page__card-img-container">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="News thumbnail"
                  />
                </div>
                <h2 className="news-page__card-title">
                  Nova Tecnologia de Propulsão Espacial
                </h2>
                <p className="news-page__card-description">
                  A empresa privada SpaceX anunciou uma nova tecnologia de
                  propulsão que permitirá viagens interplanetárias mais rápidas
                  e eficientes.
                </p>
              </div>
              <div className="news-page__card">
                <div className="news-page__card-img-container">
                  <img
                    src="https://via.placeholder.com/150"
                    alt="News thumbnail"
                  />
                </div>
                <h2 className="news-page__card-title">
                  Primeira Missão Tripulada a Marte
                </h2>
                <p className="news-page__card-description">
                  A NASA anunciou planos para enviar a primeira missão tripulada
                  a Marte em 2030, com a colaboração de países parceiros ao
                  redor do mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
