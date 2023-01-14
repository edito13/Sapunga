import React, { useState } from "react";
import Header from "../../Components/Header";
import { Container, ImageContainer, ImgDescribe } from "./style";
import VioletButton from "../../Components/VioletButton";
import TitleSections from "../../Components/TitleSections";
import { FaShoppingCart } from "react-icons/fa";
import Footer from "../../Components/Footer";
import Slogan from "../../Components/Slogan";

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
      <section className="Quem-somos">
        <TitleSections>Quem somos?</TitleSections>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
            voluptatem laboriosam autem consequuntur ducimus sed velit vitae,
            odit obcaecati sint eaque dolorum error, sapiente inventore?
            Voluptatem dignissimos eos rerum asperiores! Voluptate asperiores
            cum at mollitia veniam. Ab deserunt aperiam ipsum blanditiis tempore
            pariatur assumenda a earum eaque nulla quae quia quidem
            exercitationem repellendus, perspiciatis iusto quisquam odit!
            Tenetur, est odit! Reprehenderit facere sed quia, quod natus quos
            perferendis officia expedita? Ducimus doloribus assumenda minus
            corporis nulla necessitatibus culpa accusamus quis quo vitae quos
            numquam, laboriosam sint quam quod! Magnam.
          </p>
          <ImgDescribe />
        </div>
      </section>
      <section className="Services">
        <TitleSections>Serviços</TitleSections>
        <div className="agricultura">
          <div className="content">
            <h3>Agricultura</h3>
            <ul>
              <li><span></span><p>Plantação em grandes hectares</p></li>
              <li><span></span><p>Plantação em grandes hectares</p></li>
              <li><span></span><p>Plantação em grandes hectares</p></li>
              <li><span></span><p>Plantação em grandes hectares</p></li>
              <li><span></span><p>Plantação em grandes hectares</p></li>
            </ul>
            <p>Ficou interessado? <a className="Green" href="">Contacta-nos.</a></p>
          </div>
        </div>
        <div className="grafica">
          <div className="content">
            <h3>Gráfica</h3>
            <ul>
              <li><span></span><p>Plantação em grandes hectares</p></li>
              <li><span></span><p>Plantação em grandes hectares</p></li>
              <li><span></span><p>Plantação em grandes hectares</p></li>
              <li><span></span><p>Plantação em grandes hectares</p></li>
              <li><span></span><p>Plantação em grandes hectares</p></li>
            </ul>
            <p>Ficou interessado? <a className="LightViolet" href="">Contacta-nos.</a></p>
          </div>
        </div>
        <div className="banner"></div>
      </section>
      <Slogan />
      <Footer />
    </Container>
  );
};

export default Home;