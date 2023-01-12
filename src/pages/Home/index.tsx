import React, { useState } from "react";
import Header from "../../Components/Header";
import { Container, ImageContainer } from "./style";
import VioletButton from "../../Components/VioletButton";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  return (
    <Container>
      <Header />
      <section className="Introduce-banner">
        <ImageContainer />
        <div className="content">
          <p>
            Produção agrícola, serviços e produtos gráficos de alta{" "}
            <span className="DarkViolet">qualidade</span>.
          </p>
          <p>
            Crie sua conta aqui no nosso site e ganha 10% de{" "}
            <span className="Green">desconto</span>.
          </p>
          <VioletButton Icon={<FaShoppingCart />}>Produtos</VioletButton>
          <a href="">CRIAR CONTA?</a>
        </div>
      </section>
      
    </Container>
  );
};

export default Home;
