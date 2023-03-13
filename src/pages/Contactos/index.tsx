import React, { useEffect, useRef } from "react";
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

  const nameFill = useRef<HTMLInputElement>(null);
  const emailFill = useRef<HTMLInputElement>(null);
  const phoneNumberFill = useRef<HTMLInputElement>(null);

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
                Fique descançado que estamos aqui do outro lado, aguardando e
                fornecendo tudo que possas precisar, no caso de alguma dúvida,
                por favor não exite. Submeta ao formulário e envia uma mensagem
                para nós que será um grande prazer ajuda-lo.
              </p>
              <p data-aos="zoom-in-left" data-aos-delay="200">
                A Sapunga agradece!
              </p>
            </div>
          </div>
          <form>
            <div className="content">
              <fieldset data-aos="zoom-in-right" data-aos-delay="200">
                <legend>Dados Pessoais</legend>
                <input
                  type="text"
                  ref={nameFill}
                  placeholder="Nome Completo"
                  data-aos="zoom-in"
                  data-aos-delay="150"
                />
                <input
                  type="email"
                  ref={emailFill}
                  placeholder="exemplo@gmail.com"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                />
                <input
                  type="number"
                  ref={phoneNumberFill}
                  placeholder="Número de Telefone"
                  data-aos="zoom-in"
                  data-aos-delay="250"
                />
              </fieldset>
              <fieldset data-aos="zoom-in-left" data-aos-delay="200">
                <legend>Mensagem</legend>
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
