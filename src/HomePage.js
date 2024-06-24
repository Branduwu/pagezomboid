import React from 'react';
import './HomePage.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'animate.css/animate.min.css';
import background from './assets/image.jpg';
import discordIcon from './assets/discord.png';
import rulesIcon from './assets/rules.png';
import serverIcon from './assets/server.png';
import imagen2 from './assets/imagen2.png';
import imagen3 from './assets/imagen3.png';
import imagen4 from './assets/imagen4.png';

const HomePage = () => {
  const handleMouseOver = (e) => {
    e.target.src += "&autoplay=1";
  };

  const handleMouseOut = (e) => {
    e.target.src = e.target.src.replace("&autoplay=1", "");
  };

  return (
    <div className="homepage" style={{ backgroundImage: `url(${background})` }}>
      <div className="welcome-text animate__animated animate__fadeInDown">
        Bienvenido a Dead State
      </div>
      <div className="carousel-container">
        <Carousel autoPlay infiniteLoop>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/PDQJgoY9ENI?si=tXq67YPUYoqX8Im6"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              title="Video 1"
            ></iframe>
            <p className="legend">¡Cuidado con los zombis en la esquina!</p>
          </div>
          <div>
            <img src={imagen2} alt="Imagen 2" />
            <p className="legend">¿Listo para sobrevivir otra noche?</p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XlWJkvtc4S0?si=ZsSIkPaUG4BFZz4G"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              title="Video 2"
            ></iframe>
            <p className="legend">¡Construye tu refugio antes de que anochezca!</p>
          </div>
          <div>
            <img src={imagen3} alt="Imagen 3" />
            <p className="legend">No olvides saquear los supermercados.</p>
          </div>
          <div>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/yUS4wP5wJOY?si=i-Uq68OCIbcmSjDk"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              title="Video 3"
            ></iframe>
            <p className="legend">¿Qué tan lejos llegarás en esta carrera?</p>
          </div>
          <div>
            <img src={imagen4} alt="Imagen 4" />
            <p className="legend">Siempre ten un plan de escape.</p>
          </div>
        </Carousel>
      </div>
      <div className="links">
        <a href="/rules" className="link-item">
          <img src={rulesIcon} alt="Reglas" />
          <p>Nuestras Reglas</p>
        </a>
        <a href="https://discord.gg/ZRaq23u5" className="link-item" target="_blank" rel="noopener noreferrer">
          <img src={discordIcon} alt="Discord" />
          <p>Discord</p>
        </a>
        <a href="https://discord.gg/X4JpqHRw" className="link-item" target="_blank" rel="noopener noreferrer">
          <img src={serverIcon} alt="Servidor" />
          <p>IP del Server</p>
        </a>
      </div>
      <div className="footer">
        <p>Todos los derechos reservados a Brand</p>
      </div>
    </div>
  );
};

export default HomePage;
