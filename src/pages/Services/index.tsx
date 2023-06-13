import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPeopleCarry } from "react-icons/fa";
import Header from "../../Components/Header";
import Slogan from "../../Components/Slogan";
import Footer from "../../Components/Footer";
import TitlePages from "../../Components/TitlePages";
import { Container, ImgService } from "./style";
import ToTop from "../../Components/ToTop";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <ToTop />
      <Container>
        <TitlePages Icon={<FaPeopleCarry />}>Serviços</TitlePages>
        <div className="services">
          <section id="producao">
            <div className="content" data-aos="fade-right">
              <h3>Produção Agrícola & Comércio</h3>
              <p>
                Oferecemos serviços completos de produção agrícola e comércio de
                produtos agrícolas. Cultivamos uma variedade diversificada de
                alimentos agrícolas, utilizando práticas sustentáveis e
                tecnologias avançadas. Além disso, mantemos parcerias
                estratégicas com fornecedores confiáveis para fornecer uma ampla
                gama de produtos agrícolas de alta qualidade. Priorizamos a
                qualidade, segurança alimentar e satisfação do cliente, com
                preços competitivos e opções personalizadas de embalagem e
                logística. Entre em contato conosco para obter mais informações
                sobre nossos serviços abrangentes.
              </p>
            </div>
            <ImgService src="9" data-aos="zoom-in-left" />
          </section>
          <section id="personalizacao">
            <ImgService src="7" data-aos="zoom-in-right" />
            <div className="content" data-aos="fade-left">
              <h3>Personalização Gráfica</h3>
              <p>
                Nossa empresa oferece serviços de personalização gráfica para
                atender às suas necessidades. Com uma equipe especializada,
                fornecemos soluções personalizadas de impressão em t-shirts,
                uniformes e materiais gráficos. Utilizamos técnicas avançadas e
                materiais de alta qualidade para garantir resultados
                excepcionais. Seja para fins promocionais, eventos especiais ou
                identidade corporativa, estamos prontos para transformar suas
                ideias em realidade. Entre em contato conosco para obter mais
                informações sobre nossos serviços de personalização gráfica e
                descubra como podemos atender às suas necessidades criativas de
                forma única e profissional.
              </p>
            </div>
          </section>
          <section id="instalacao">
            <div className="content" data-aos="fade-right">
              <h3>Instalação & Venda de Equipamentos</h3>
              <p>
                Oferecemos serviços completos de instalação e venda de
                equipamentos para cultivo agrícola. Nossa equipe especializada
                está pronta para ajudar no planejamento, instalação e manutenção
                de equipamentos agrícolas, garantindo eficiência e produtividade
                em suas operações. Além disso, fornecemos uma ampla seleção de
                equipamentos agrícolas de alta qualidade, desde tratores e
                implementos até sistemas de irrigação e ferramentas
                especializadas. Combinando conhecimento técnico e experiência,
                estamos comprometidos em fornecer soluções personalizadas para
                atender às suas necessidades agrícolas. Entre em contato conosco
                para obter mais informações sobre nossos serviços de instalação
                e venda de equipamentos agrícolas e descubra como podemos
                impulsionar o seu cultivo de forma eficiente e sustentável.
              </p>
            </div>
            <ImgService src="10" data-aos="zoom-in-left" />
          </section>
          <section id="timbragem">
            <ImgService src="8" data-aos="zoom-in-right" />
            <div className="content" data-aos="fade-left">
              <h3>Timbragem & Bordado</h3>
              <p>
                Somos especializados em serviços de timbragem e bordado
                personalizados. Nossa equipe habilidosa utiliza técnicas de alta
                qualidade para adicionar logotipos, designs e detalhes especiais
                em t-shirts, uniformes e outros produtos têxteis. Com atenção
                aos detalhes e uma variedade de opções de cores e estilos de
                bordado, garantimos resultados excepcionais que agregam valor à
                sua marca ou evento. Seja para fins promocionais, identidade
                corporativa ou personalização individual, estamos prontos para
                transformar suas peças em verdadeiras obras de arte têxtil.
                Entre em contato conosco para obter mais informações sobre
                nossos serviços de timbragem e bordado, e descubra como podemos
                elevar a qualidade e o impacto visual dos seus produtos.
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
