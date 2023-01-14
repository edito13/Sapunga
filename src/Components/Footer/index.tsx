import React from "react";
import { BiAt, BiMapPin } from "react-icons/bi";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { ImPhone } from "react-icons/im";
import { FooterContainer, SendButton } from "./style";

const index = () => {
  return (
    <FooterContainer>
      <div className="ContentContainer">
        <div className="CompanyInfo">
          <img src="./assets/Images/SAPUNGA LOGO.png" alt="sapunga" />
          <p>Produção agrícola, serviços e produtos gráficos.</p>
          <div>
            <BiMapPin />
            <p>
              Luhongo, <span>Catumbela.</span>
            </p>
          </div>
        </div>
        <div>
          <h4>Links rápidos</h4>
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Quem somos?</a>
            </li>
            <li>
              <a href="">Produtos</a>
            </li>
            <li>
              <a href="">Serviços</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
        <div>
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
        <div className="Contact-us">
          <h4>Contacte-nos</h4>
          <p>
            Entre em contacto connosco escrevendo ou acessando as nossas{" "}
            <span>mídias sociais.</span>
          </p>
          <div className="Newslatter">
            <input type="text" placeholder="email@gmail.com" />
            <SendButton startIcon={<FaRegPaperPlane />}>Enviar</SendButton>
          </div>
          <div className="Contacts">
            <div>
              <ImPhone />
              <p>+244 941 059 086</p>
            </div>
            <div>
              <BiAt />
              <p>sapunga@gmail.com</p>
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
    </FooterContainer>
  );
};

export default index;
