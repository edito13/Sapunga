import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { BiAt, BiMapPin } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaPaperPlane } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { Link } from "react-router-dom";
import { FooterContainer, SendButton } from "./style";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <FooterContainer>
      <div>
        <div className="ContentContainer">
          <div className="CompanyInfo" data-aos="zoom-in-up">
            <img src="./assets/Images/SAPUNGA LOGO.png" alt="sapunga" />
            <p>Produção agrícola, serviços e produtos gráficos.</p>
            <div>
              <BiMapPin />
              <p>
                Luhongo, <span>Catumbela.</span>
              </p>
            </div>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="50">
            <h4>Links rápidos</h4>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/quem_somos"}>Quem somos?</Link>
              </li>
              <li>
                <Link to={"/produtos"}>Produtos</Link>
              </li>
              <li>
                <Link to={"/servicos"}>Serviços</Link>
              </li>
              <li>
                <Link to={"/contactos"}>Contacto</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
              <li>
                <Link to={"/criar_conta"}>Criar conta</Link>
              </li>
            </ul>
          </div>
          <div data-aos="zoom-in-up" data-aos-delay="100">
            <h4>Serviços</h4>
            <ul>
              <li>
                <a href="">Produção Agrícola</a>
              </li>
              <li>
                <a href="">Personalização gráfica</a>
              </li>
              <li>
                <a href="">Venda de equipamentos</a>
              </li>
              <li>
                <a href="">E outros</a>
              </li>
            </ul>
          </div>
          <div
            className="Contact-us"
            data-aos="zoom-in-up"
            data-aos-delay="150"
          >
            <h4>Contacte-nos</h4>
            <p>
              Entre em contacto connosco escrevendo ou acessando as nossas{" "}
              <span>mídias sociais.</span>
            </p>
            <div className="Newslatter">
              <input type="text" placeholder="email@gmail.com" />
              <SendButton startIcon={<FaPaperPlane />}>Enviar</SendButton>
            </div>
            <div className="Contacts">
              <div>
                <ImPhone />
                <p>+244 941 059 086</p>
              </div>
              <div>
                <BiAt />
                <p>sapungaservicos@gmail.com</p>
              </div>
            </div>
            <div className="social-media">
              <div>
                <BsFacebook />
              </div>
              <div>
                <BsInstagram />
              </div>
              <div>
                <BsWhatsapp />
              </div>
              <div>
                <BsTwitter />
              </div>
            </div>
          </div>
        </div>
        <div className="Copyright">
          <p>
            © Copyright Sapunga, <span>{new Date().getFullYear()}</span>
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default index;
