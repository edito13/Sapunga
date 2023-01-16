import React from "react";
import Header from "../../Components/Header";
import Slogan from "../../Components/Slogan";
import Footer from "../../Components/Footer";
import { TitlePages } from "../../Components/TitlePages/style";
import { Container } from "./style";

const index = () => {

  return (
    <Container>
      <Header />
      <TitlePages>
        <h1>Serviços</h1>
      </TitlePages>
      <div className="services">
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </div>
      <Slogan />
      <Footer />
    </Container>
  );
};

export default index;
