import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../Components/Header";
import VioletButton from "../../Components/BlueButton";
import TitleSections from "../../Components/TitleSections";
import MobilePost from "../../Components/MobilePost";
import Slogan from "../../Components/Slogan";
import Footer from "../../Components/Footer";
import { Container, ImageContainer, ImgDescribe } from "./style";
import { FaShoppingCart } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <div className="main">
          <section className="Introduce-banner">
            <ImageContainer data-aos="slide-right" />
            <div className="content" data-aos="slide-left">
              <p>
                Produção agrícola, serviços e produtos gráficos de alta{" "}
                <span className="DarkBlue">qualidade</span>.
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
              <div data-aos="slide-up" data-aos-delay="150">
                <p>
                  <b>SAPUNGA - Comércio & Serviços, Lda</b>, é uma empresa jovem
                  de direito angolano, com mais de 2 anos de experiência no
                  mercado nacional, à realizar serviços de alta qualidade
                  centradas em <b>Comunicação e Imagem</b>,{" "}
                  <b>Assistência técnica e tecnológica em Informática</b>,{" "}
                  <b>Produção Agrícola</b> e Fornecimento de materiais para
                  escritório e produção agrícola.
                </p>
                <p>
                  O nosso lema é{" "}
                  <i>
                    actuar no mercado, comercializando e prestando os nossos
                    serviços com responsabilidade e rigor.
                  </i>{" "}
                  Para tal, contamos com uma equipe de mais de 20 profissionais
                  altamente qualificados em nossas colocações, fornecendo
                  produtos e serviços especialmente para quem busca conforto,
                  qualidade e segurança. Desenvolvidos com a mais alta
                  tecnologia, sendo eles destinados para aquele que sempre está
                  em busca de melhores produtos e serviços com os melhores
                  preços.
                </p>
              </div>
              <ImgDescribe data-aos="zoom-in" />
            </div>
          </section>
        </div>
        <section className="Services">
          <TitleSections>Serviços</TitleSections>
          <div className="agricultura" data-aos="slide-right">
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
          <div className="grafica" data-aos="slide-left">
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
                <a className="LightBlue" href="">
                  Contacta-nos.
                </a>
              </p>
            </div>
          </div>
          <div className="banner"></div>
        </section>
        <MobilePost />
      </Container>
      <Slogan />
      <Footer />
    </>
  );
};

export default Home;
