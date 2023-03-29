import React, { useCallback, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IconButton } from "@mui/material";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router";
import { ButtonOrder, Container, Imagem } from "./style";
import { ProductsData } from "../../interfaces";
import { BaseUrl } from "../../assets/api";
import { Money } from "../../assets/ConvertMoney";
import ModalLoading from "../ModalLoading";

interface Props {
  index: number;
  product: ProductsData;
}

const index: React.FC<Props> = ({ index, product }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();
  const [OpenModal, setOpenModal] = useState(false);

  const CloseModal = useCallback(() => {
    setOpenModal(false);
    navigate("/encomendar/" + product._id);
  }, [OpenModal]);

  return (
    <>
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
          <ButtonOrder
            variant="contained"
            startIcon={<FaShoppingCart />}
            onClick={() => setOpenModal(true)}
            data-aos="slide-left"
            disableElevation
          />
        </div>
      </Container>
      {OpenModal && <ModalLoading open={OpenModal} onClose={CloseModal} />}
    </>
  );
};

export default index;
