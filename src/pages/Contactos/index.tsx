import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../Components/Header";
import TitlePages from "../../Components/TitlePages";
import Footer from "../../Components/Footer";
import { Container } from "./style";
import VioletButton from "../../Components/VioletButton";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <Header />
      <TitlePages>Contactos</TitlePages>
      <div className="main">
        <div className="Introduce">
          <img
            src="assets/Images/Black Men Office Video Chat.svg"
            alt="Black Men Office Video Chat"
            data-aos="zoom-in-right"
          />
          <div className="text">
            <h3 data-aos="zoom-in-left" data-aos-delay="100">
              Estamos acompanhando <span className="DarkViolet">tudo!</span>
            </h3>
            <p data-aos="zoom-in-left" data-aos-delay="150">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit in
              repellendus veritatis nemo placeat consequatur mollitia eum, totam
              aperiam libero ad consequuntur aliquid laudantium sapiente aliquam
              soluta incidunt, minima itaque?
            </p>
          </div>
        </div>
        <form>
          <div className="content">
            <fieldset data-aos="zoom-in-left">
              <caption>Dados Pessoais</caption>
              <input
                type="text"
                placeholder="Nome Completo"
                data-aos="zoom-in"
                data-aos-delay="50"
              />
              <input
                type="email"
                placeholder="exemplo@gmail.com"
                data-aos="zoom-in"
                data-aos-delay="100"
              />
              <input
                type="number"
                placeholder="Número de Telefone"
                data-aos="zoom-in"
                data-aos-delay="150"
              />
            </fieldset>
            <fieldset data-aos="zoom-in-right">
              <caption>Mensagem</caption>
              <textarea
                placeholder="Escreva alguma coisa para nós!"
                data-aos="zoom-in"
                data-aos-delay="50"
              ></textarea>
            </fieldset>
          </div>
          <div data-aos="zoom-in" data-aos-delay="50">
            <VioletButton>Enviar mensagem</VioletButton>
          </div>
        </form>
      </div>
      <Footer />
    </Container>
  );
};

export default index;
