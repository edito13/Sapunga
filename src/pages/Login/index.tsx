import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@mui/material";
import { Container } from "./style";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { VioletButton } from "../../Components/VioletButton/style";
import { FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <div>
        <div className="post" data-aos="fade-right" data-aos-duration="1000">
          <p data-aos="fade-right" data-aos-delay="300">
            Crie sua conta aqui no nosso site e ganhe 10% de{" "}
            <span className="Green">desconto.</span>
          </p>
          <Link to={"/criar_conta"} data-aos="fade-right" data-aos-delay="450">
            <VioletButton>Criar Conta</VioletButton>
          </Link>
        </div>
        <div className="content" data-aos="fade-left" data-aos-duration="1000">
          <h3>Iniciar Sessão</h3>
          <form>
            <div data-aos="fade-right" data-aos-delay="50">
              <label htmlFor="email">E-mail ou Telefone</label>
              <input type="text" id="email" placeholder="email@gmail.com" />
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <label htmlFor="senha">Senha</label>
              <input type="password" id="senha" placeholder="Senha" />
            </div>
            <VioletButton
              type="submit"
              startIcon={<FaRegPaperPlane />}
              variant="contained"
              fullWidth
              disableElevation
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              Logar
            </VioletButton>
            <p>
              Ainda não tem uma conta?{" "}
              <Link to={"/criar_conta"}>
                <span className="LightViolet">CRIAR CONTA.</span>
              </Link>
            </p>
            <div className="sociais-media">
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
          </form>
          <p>Sapunga | Todos os direitos reservados</p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
