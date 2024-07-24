import React from "react";
import bienvenida from "../../assets/imgs/bienvenida.png"

const Bienvenida = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center pt-40">
        <img
          className="lg:h-[500px] lg:w-[700px] lg:ml-20 "
          src={bienvenida}
          alt="Banner"
        />
        <div className="flex flex-col items-center mx-10 mb-10 lg:ml-36 lg:mt-40 lg:w-[700px]">
          <h2 className="text-2xl font-Montserrat text-center lg:text-6xl">
            ¡Bienvenidos/as!
          </h2>
          <p className="my-8 font-Nunito text-center lg:mt-20 lg:text-2xl">
            En Matematica Torcuato, nos dedicamos a ofrecer clases y cursos
            particulares de matemática, álgebra y análisis matemático de CBC,
            asi como la oportunidad de clases particulares y resolucion de.
            Nuestro objetivo es ayudarte a alcanzar el éxito académico y
            desarrollar una comprensión profunda de estas áreas fundamentales
          </p>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Bienvenida;
