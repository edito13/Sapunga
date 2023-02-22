import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container } from "./style";
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { BsBagFill } from "react-icons/bs";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <div className="introduce">
        <img
          data-aos="zoom-in-right"
          src="../assets/Images/painel man.svg"
          alt="Black man"
        />
        <div data-aos="zoom-in-left" data-aos-delay="150" className="text">
          <h3>Olá Edito</h3>
          <p>Bem-vindo ao seu painel admin</p>
        </div>
      </div>
      <div className="statistic-container">
        <div className="statistic-item">
          <div className="title">
            <FaUsers />
            <p>Usuarios</p>
          </div>
          <span>900</span>
        </div>
        <div className="statistic-item">
          <div className="title">
            <BsBagFill />
            <p>Produtos</p>
          </div>
          <span>09</span>
        </div>
        <div className="statistic-item">
          <div className="title">
            <FaShoppingCart />
            <p>Encomendas</p>
          </div>
          <span>20</span>
        </div>
      </div>
    </Container>
  );
};

export default index;
