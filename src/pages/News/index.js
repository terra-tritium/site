import React from 'react';


function News() {
  return (
    
    <div className="news-page">
        
      <h1 className="news-page__title">Notícias Sci-Fi</h1>
      <div className="news-page__container">
        <div className="news-page__card">
          <h2 className="news-page__card-title">Descoberta de Vida Alienígena</h2>
          <p className="news-page__card-description">
            Uma equipe de cientistas da NASA anunciou a descoberta de evidências de vida em um planeta em outro sistema solar.
          </p>
        </div>
        <div className="news-page__card">
          <h2 className="news-page__card-title">Nova Tecnologia de Propulsão Espacial</h2>
          <p className="news-page__card-description">
            A empresa privada SpaceX anunciou uma nova tecnologia de propulsão que permitirá viagens interplanetárias mais rápidas e eficientes.
          </p>
        </div>
        <div className="news-page__card">
          <h2 className="news-page__card-title">Primeira Missão Tripulada a Marte</h2>
          <p className="news-page__card-description">
            A NASA anunciou planos para enviar a primeira missão tripulada a Marte em 2030, com a colaboração de países parceiros ao redor do mundo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;
