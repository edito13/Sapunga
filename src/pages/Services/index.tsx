import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../Components/Header";
import Slogan from "../../Components/Slogan";
import Footer from "../../Components/Footer";
import TitlePages from "../../Components/TitlePages";
import { Container, ImgService } from "./style";
import { FaPeopleCarry } from "react-icons/fa";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TitlePages Icon={<FaPeopleCarry />}>Serviços</TitlePages>
        <div className="services">
          <section>
            <div className="content" data-aos="fade-right">
              <h3>Produção Agrícola & Comércio</h3>
              <p>
                E a quarta e última: "Quando algo termina, acaba". Simplesmente
                assim. Se algo acabou em nossas vidas, é para nossa evolução,
                portanto é melhor desistir, seguir em frente e avançar já
                enriquecidos com essa experiência. Acho que não é por acaso que
                você está lendo isso. Acho que não é por acaso que você está
                lendo isso.
              </p>
            </div>
            <ImgService src="9" data-aos="zoom-in-left" />
          </section>
          <section>
            <ImgService src="7" data-aos="zoom-in-right" />
            <div className="content" data-aos="fade-left">
              <h3>Personalização Gráfica</h3>
              <p>
                E a quarta e última: "Quando algo termina, acaba". Simplesmente
                assim. Se algo acabou em nossas vidas, é para nossa evolução,
                portanto é melhor desistir, seguir em frente e avançar já
                enriquecidos com essa experiência. Acho que não é por acaso que
                você está lendo isso. Acho que não é por acaso que você está
                lendo isso.
              </p>
            </div>
          </section>
          <section>
            <div className="content" data-aos="fade-right">
              <h3>Instalação & Venda de Equipamentos</h3>
              <p>
                E a quarta e última: "Quando algo termina, acaba". Simplesmente
                assim. Se algo acabou em nossas vidas, é para nossa evolução,
                portanto é melhor desistir, seguir em frente e avançar já
                enriquecidos com essa experiência. Acho que não é por acaso que
                você está lendo isso. Acho que não é por acaso que você está
                lendo isso.
              </p>
            </div>
            <ImgService src="10" data-aos="zoom-in-left" />
          </section>
          <section>
            <ImgService src="8" data-aos="zoom-in-right" />
            <div className="content" data-aos="fade-left">
              <h3>Timbragem & Bordado</h3>
              <p>
                E a quarta e última: "Quando algo termina, acaba". Simplesmente
                assim. Se algo acabou em nossas vidas, é para nossa evolução,
                portanto é melhor desistir, seguir em frente e avançar já
                enriquecidos com essa experiência. Acho que não é por acaso que
                você está lendo isso. Acho que não é por acaso que você está
                lendo isso.
              </p>
            </div>
          </section>
        </div>
      </Container>
      <Slogan />
      <Footer />
    </>
  );
};

export default index;
