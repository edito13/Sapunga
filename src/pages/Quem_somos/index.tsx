import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUsers } from "react-icons/fa";
import Header from "../../Components/Header";
import TitlePages from "../../Components/TitlePages";
import MobilePost from "../../Components/MobilePost";
import Footer from "../../Components/Footer";
import { Text } from "./style";
import ToTop from "../../Components/ToTop";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <ToTop />
      <TitlePages Icon={<FaUsers />}>Quem somos</TitlePages>
      <MobilePost />
      <Text>
        <p data-aos="zoom-in-up" data-aos-delay="100">
          <b>SAPUNGA - Comércio & Serviços, Lda</b>, é uma empresa jovem de
          direito angolano, com mais de 2 anos de experiência no mercado
          nacional, à realizar serviços de alta qualidade centradas em
          Comunicação e Imagem (Serviços Gráficos), Assistência técnica e
          tecnológica em Informática (Montagem e reparação de materiais
          informáticos), Produção Agrícola e Fornecimento de materiais para
          escritório e produção agrícola.
        </p>
        <p data-aos="zoom-in-up" data-aos-delay="200">
          O nosso lema é actuar no mercado, comercializando e prestando os
          nossos serviços com responsabilidade e rigor. Para tal, contamos com
          uma equipe de mais de 20 profissionais altamente qualificados em
          nossas colocações.
        </p>
        <p data-aos="zoom-in-up" data-aos-delay="300">
          Nossos produtos e serviços são feitos especialmente para quem busca
          conforto, qualidade e segurança. Desenvolvidos com a mais alta
          tecnologia, sendo eles destinados para instituições/entidades
          empresariais ou até mesmo pessoas em particular, que sempre estão em
          busca de melhores produtos e serviços com os melhores preços.
        </p>
      </Text>
      <Footer />
    </>
  );
};

export default index;
