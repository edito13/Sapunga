import React from "react";
import { Container } from "./style";

const index = () => {
  return (
    <Container>
      <div className="text">
        <h3 data-aos="slide-right" data-aos-delay="50">
          Uma melhor <span className="LightBlue">experiência</span>
        </h3>
        <p data-aos="slide-right" data-aos-delay="100">
          Focamo-nos em criar uma experiência de qualidade e sensacional, não
          apenas em nossas instalações, mas, também no nosso site e nossas
          mídias-sociais a fim de mostrar o nosso melhor e a nossa
          responsabilidade para com os nossos clientes.
        </p>
      </div>
      <img
        data-aos="slide-left"
        src="assets/Images/Sapunga-mobile.png"
        alt="IPhone14 Sapunga"
      />
    </Container>
  );
};

export default index;
