import M from "materialize-css";
import React, { useEffect } from "react";

function Carousel() {
  useEffect(() => {
    // Inicializa el Carousel al montar el componente
    const elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {});
  }, []);

  return (
    <div className="carousel">
      <a className="carousel-item" href="#one!">
        <h1>Hola Mundo</h1>
        <img src="vite.svg" alt="Nature 1" />
      </a>
      <a className="carousel-item" href="#two!">
        <h1>Hola Mundo</h1>
        <img src="vite.svg" alt="Nature 2" />
      </a>
      <a className="carousel-item" href="#three!">
        <h1>Hola Mundo</h1>
        <img src="vite.svg" alt="Nature 3" />
      </a>
      <a className="carousel-item" href="#four!">
        <h1>Hola Mundo</h1>
        <img src="vite.svg" alt="Nature 4" />
      </a>
      <a className="carousel-item" href="#five!">
        <h1>Hola Mundo</h1>
        <img src="vite.svg" alt="Nature 5" />
      </a>
    </div>
  );
}

export default Carousel;
