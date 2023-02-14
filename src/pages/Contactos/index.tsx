import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../../Components/Header";
import TitlePages from "../../Components/TitlePages";
import Footer from "../../Components/Footer";
import { Container } from "./style";
import BlueButton from "../../Components/BlueButton";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Container>
        <TitlePages Icon={<FaPhoneAlt style={{ fontSize: "1.6em" }} />}>
          Contactos
        </TitlePages>
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
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
                in repellendus veritatis nemo placeat consequatur mollitia eum,
                totam aperiam libero ad consequuntur aliquid laudantium sapiente
                aliquam soluta incidunt, minima itaque?
              </p>
            </div>
          </div>
          <form>
            <div className="content">
              <fieldset data-aos="zoom-in-right" data-aos-delay="200">
                <caption>Dados Pessoais</caption>
                <input
                  type="text"
                  placeholder="Nome Completo"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                />
                <input
                  type="email"
                  placeholder="exemplo@gmail.com"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
                <input
                  type="number"
                  placeholder="Número de Telefone"
                  data-aos="zoom-in"
                  data-aos-delay="250"
                />
              </fieldset>
              <fieldset data-aos="zoom-in-left" data-aos-delay="200">
                <caption>Mensagem</caption>
                <textarea
                  placeholder="Escreva alguma coisa para nós!"
                  data-aos="zoom-in"
                  data-aos-delay="100"
                ></textarea>
              </fieldset>
            </div>
            <div data-aos="zoom-in" data-aos-delay="100">
              <BlueButton Icon={<FaPaperPlane />}>Enviar mensagem</BlueButton>
            </div>
          </form>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default index;
