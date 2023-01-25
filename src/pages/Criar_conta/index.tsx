import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
            Registra-se já e aproveite tudo que temos a{" "}
            <span className="LightViolet">disponível.</span>
          </p>
          <img
            src="./assets/Images/online consulting.svg"
            alt="Consulta online"
            data-aos="fade-right"
            data-aos-delay="450"
          />
        </div>
        <div className="content" data-aos="fade-left" data-aos-duration="1000">
          <h3>Criar conta</h3>
          <form>
            <div data-aos="fade-right" data-aos-delay="50">
              <label htmlFor="nome">Nome de usuário</label>
              <input type="text" id="nome" placeholder="Digite seu nome" />
            </div>
            <div data-aos="fade-left" data-aos-delay="100">
              <label htmlFor="email">E-mail ou Telefone</label>
              <input type="text" id="email" placeholder="email@gmail.com" />
            </div>
            <div className="senhas">
              <div data-aos="fade-right" data-aos-delay="150">
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  placeholder="Digite sua senha"
                />
              </div>
              <div data-aos="fade-left" data-aos-delay="200">
                <label htmlFor="confsenha">Confirmar</label>
                <input
                  type="password"
                  id="confsenha"
                  placeholder="Cofirme sua senha"
                />
              </div>
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
              Criar conta
            </VioletButton>
            <p>
              Já tem uma conta?{" "}
              <Link to={"/login"}>
                <span className="LightViolet">LOGAR.</span>
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
