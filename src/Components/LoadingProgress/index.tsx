import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Loading } from "./style";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Loading
        data-aos="zoom-in"
        data-aos-delay="150"
        style={{ width: "3.7em", height: "3.7em" }}
      />
      <p data-aos="zoom-in" data-aos-delay="250">
        Aguarde...
      </p>
    </Container>
  );
};

export default index;
