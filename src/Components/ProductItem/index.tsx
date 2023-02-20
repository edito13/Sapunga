import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconButton } from "@mui/material";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Container, Imagem } from "./style";

interface Props {
  index: number;
}

const index: React.FC<Props> = ({ index }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container data-aos="zoom-in" data-aos-delay={`${(index + 1) * 100}`}>
      <Imagem data-aos="slide-down" src={`./assets/Images/${index}.jpg`} />
      <div>
        <p>Planta</p>
        <span>40.000,00kz</span>
      </div>
      <div className="btns">
        <IconButton data-aos="slide-right">
          <FaHeart />
        </IconButton>
        <div data-aos="slide-left">
          <FaShoppingCart />
        </div>
      </div>
    </Container>
  );
};

export default index;
