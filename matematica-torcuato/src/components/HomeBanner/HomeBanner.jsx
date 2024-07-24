import { useEffect, useState } from "react";
import homepage1 from "../../assets/imgs/homepage3.jfif";
import { Button } from 'keep-react';

const HomeBanner = () => {
  // Usar booleano en lugar de string para mouseHover
  const [mouseHover, setMouseHover] = useState(false);

  // Función para manejar el hover
  const handleMouseEnter = () => {
    setMouseHover(true);
  };

  const handleMouseLeave = () => {
    setMouseHover(false);
  };



  return (
    <div className="flex flex-col lg:flex-row bg-gradient-to-br from-cyan-500 to-pink-500">
      <div className="flex flex-col items-center mx-10 lg:ml-36 lg:mt-40 lg:w-[700px]">
        <h1 className="text-2xl font-Montserrat text-center lg:text-6xl text-white">
          Es hora de llevar tus estudios al <span className="text-pink-300">siguiente nivel</span>
        </h1>
        <p className="my-8 font-Nunito text-center lg:mt-20 lg:text-2xl text-white">
          ¿Te está costando ese parcial? ¿Estás en clase y piensas si elegiste la carrera correcta? Estás en el lugar correcto. Resolución de prácticas de CBC y clases.
        </p>
        <Button 
          className="rounded-xl" 
          onMouseEnter={handleMouseEnter} 
          onMouseLeave={handleMouseLeave}
          color={mouseHover ? "success" : "primary"}
        >
          Ver Cursos
        </Button>
      </div>
      <div>
        <img 
          className="lg:h-[600px] lg:w-[800px] lg:ml-20" 
          src={homepage1}
          alt="Banner" 
        />
      </div>
    </div>
  );
};

export default HomeBanner;
