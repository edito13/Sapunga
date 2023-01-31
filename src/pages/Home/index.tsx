import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../Components/Header";
import VioletButton from "../../Components/VioletButton";
import TitleSections from "../../Components/TitleSections";
import Slogan from "../../Components/Slogan";
import Footer from "../../Components/Footer";
import { Container, ImageContainer, ImgDescribe } from "./style";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Header />
      <div className="main">
        <section className="Introduce-banner">
          <ImageContainer data-aos="zoom-in-right" />
          <div className="content" data-aos="zoom-in-left">
            <p>
              Produção agrícola, serviços e produtos gráficos de alta{" "}
              <span className="DarkViolet">qualidade</span>.
            </p>
            <p>
              Crie sua conta aqui no nosso site e ganha 10% de{" "}
              <span className="Green">desconto</span>.
            </p>
            <div>
              <VioletButton Icon={<FaShoppingCart />}>Produtos</VioletButton>
              <a href="">CRIAR CONTA?</a>
            </div>
          </div>
        </section>
        <section className="Quem-somos">
          <TitleSections>Quem somos?</TitleSections>
          <div className="content">
            <p data-aos="slide-up" data-aos-delay="150">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
              voluptatem laboriosam autem consequuntur ducimus sed velit vitae,
              odit obcaecati sint eaque dolorum error, sapiente inventore?
              Voluptatem dignissimos eos rerum asperiores! Voluptate asperiores
              cum at mollitia veniam. Ab deserunt aperiam ipsum blanditiis
              tempore pariatur assumenda a earum eaque nulla quae quia quidem
              exercitationem repellendus, perspiciatis iusto quisquam odit!
              Tenetur, est odit! Reprehenderit facere sed quia, quod natus quos
              perferendis officia expedita? Ducimus doloribus assumenda minus
              corporis nulla necessitatibus culpa accusamus quis quo vitae quos
              numquam, laboriosam sint quam quod! Magnam.
            </p>
            <ImgDescribe />
          </div>
        </section>
      </div>
      <section className="Services">
        <TitleSections>Serviços</TitleSections>
        <div className="agricultura" data-aos="zoom-in-right">
          <div className="content">
            <h3>Agricultura</h3>
            <ul>
              <li>
                <span></span>
                <p>Produção agrícola</p>
              </li>
              <li>
                <span></span>
                <p>Montagem de sistema de irrigação</p>
              </li>
              <li>
                <span></span>
                <p>Montagem de estaleiros</p>
              </li>
              <li>
                <span></span>
                <p>Construão de tanques</p>
              </li>
              <li>
                <span></span>
                <p>Consultória agrícola</p>
              </li>
            </ul>
            <p>
              Ficou interessado?{" "}
              <a className="Green" href="">
                Contacta-nos.
              </a>
            </p>
          </div>
        </div>
        <div className="grafica" data-aos="zoom-in-left">
          <div className="content">
            <h3>Gráfica</h3>
            <ul>
              <li>
                <span></span>
                <p>Criação de logotipos, flyers e mais</p>
              </li>
              <li>
                <span></span>
                <p>Timbragem & bordado de t-shirts</p>
              </li>
              <li>
                <span></span>
                <p>Decoração de viaturas</p>
              </li>
              <li>
                <span></span>
                <p>Produção de uniformes</p>
              </li>
              <li>
                <span></span>
                <p>Manuntenção de impressoras e mais.</p>
              </li>
            </ul>
            <p>
              Ficou interessado?{" "}
              <a className="LightViolet" href="">
                Contacta-nos.
              </a>
            </p>
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
