import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../Components/Header";
import TitlePages from "../../Components/TitlePages";
import Footer from "../../Components/Footer";
import { Container } from "./style";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Header />
      <TitlePages>Contactos</TitlePages>
      <form>
        <fieldset>
          <caption>Dados Pessoais</caption>
          <input
            type="text"
            placeholder="Nome Completo"
            data-aos="slide-up"
            data-aos-delay="50"
          />
          <input
            type="email"
            placeholder="exemplo@gmail.com"
            data-aos="slide-up"
            data-aos-delay="100"
          />
          <input
            type="number"
            placeholder="Número de Telefone"
            data-aos="slide-up"
            data-aos-delay="150"
          />
        </fieldset>
        <fieldset>
          <caption>Mensagem</caption>
          <textarea
            placeholder="Escreva alguma coisa para nós!"
            data-aos="slide-up"
          ></textarea>
        </fieldset>
      </form>
      <Footer />
    </Container>
  );
};

export default index;
