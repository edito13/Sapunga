import React from "react";
import Header from "../../Components/Header";
import Slogan from "../../Components/Slogan";
import Footer from "../../Components/Footer";
import { TitlePages } from "../../Components/TitlePages/style";
import { Container, ImgService } from "./style";

const index = () => {
  return (
    <Container>
      <Header />
      <TitlePages>
        <h1>Serviços</h1>
      </TitlePages>
      <div className="services">
        <section>
          <div className="content">
            <h3>Produção Agrícola & Comércio</h3>
            <p>
              E a quarta e última: "Quando algo termina, acaba". Simplesmente
              assim. Se algo acabou em nossas vidas, é para nossa evolução,
              portanto é melhor desistir, seguir em frente e avançar já
              enriquecidos com essa experiência. Acho que não é por acaso que
              você está lendo isso. Acho que não é por acaso que você está lendo
              isso.
            </p>
          </div>
        </section>
        <section>
          <ImgService src="7" />
          <div className="content">
            <h3>Personalização Gráfica</h3>
            <p>
              E a quarta e última: "Quando algo termina, acaba". Simplesmente
              assim. Se algo acabou em nossas vidas, é para nossa evolução,
              portanto é melhor desistir, seguir em frente e avançar já
              enriquecidos com essa experiência. Acho que não é por acaso que
              você está lendo isso. Acho que não é por acaso que você está lendo
              isso.
            </p>
          </div>
        </section>
        <section>
          <div className="content">
            <h3>Instalação & Venda de Equipamentos</h3>
            <p>
              E a quarta e última: "Quando algo termina, acaba". Simplesmente
              assim. Se algo acabou em nossas vidas, é para nossa evolução,
              portanto é melhor desistir, seguir em frente e avançar já
              enriquecidos com essa experiência. Acho que não é por acaso que
              você está lendo isso. Acho que não é por acaso que você está lendo
              isso.
            </p>
          </div>
        </section>
        <section>
          <ImgService src="8" />
          <div className="content">
            <h3>Timbragem & Bordado</h3>
            <p>
              E a quarta e última: "Quando algo termina, acaba". Simplesmente
              assim. Se algo acabou em nossas vidas, é para nossa evolução,
              portanto é melhor desistir, seguir em frente e avançar já
              enriquecidos com essa experiência. Acho que não é por acaso que
              você está lendo isso. Acho que não é por acaso que você está lendo
              isso.
            </p>
          </div>
        </section>
      </div>
      <Slogan />
      <Footer />
    </Container>
  );
};

export default index;
