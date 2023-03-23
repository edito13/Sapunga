import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconButton } from "@mui/material";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { Container, Imagem } from "./style";
import { ProductsData } from "../../interfaces";
import { BaseUrl } from "../../assets/api";
import { Money } from "../../assets/ConvertMoney";

interface Props {
  index: number;
  product: ProductsData;
}

const index: React.FC<Props> = ({ index, product }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container data-aos="zoom-in" data-aos-delay={`${(index + 1) * 100}`}>
      <Imagem data-aos="slide-down" src={`${BaseUrl}${product.urlPhoto}`} />
      <div>
        <p>{product.name}</p>
        <span>{Money(product.price)}</span>
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
