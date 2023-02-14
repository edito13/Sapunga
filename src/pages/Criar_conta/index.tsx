import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaGoogle, FaPaperPlane } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Container } from "./style";
import { BlueButton } from "../../Components/BlueButton/style";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Container>
      <div>
        <div className="post" data-aos="fade-right" data-aos-duration="1000">
          <img
            src="./assets/Images/Two Black Men Using Laptop.svg"
            alt="Black Man using phone"
            data-aos="fade-right"
            data-aos-delay="450"
          />
          <p data-aos="fade-right" data-aos-delay="300">
            Registra-se já e aproveite tudo que temos{" "}
            <span className="LightViolet">disponível.</span>
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
            <BlueButton
              type="submit"
              startIcon={<FaPaperPlane />}
              variant="contained"
              fullWidth
              disableElevation
              data-aos="zoom-in"
              data-aos-delay="150"
            >
              Registrar-se
            </BlueButton>
          </form>
          <div>
            <Link to={"/login"} className="AccountLink">
              <p>
                Já tem uma conta? <span className="LightViolet">LOGAR.</span>
              </p>
            </Link>
            <div className="or">
              <hr />
              Ou
              <hr />
            </div>
            <div className="midiaLogin">
              <div>
                <FaGoogle />
                <p>Google</p>
              </div>
              <div>
                <FaFacebook />
                <p>Facebook</p>
              </div>
            </div>
          </div>
          <p>Sapunga | Todos os direitos reservados</p>
        </div>
      </div>
    </Container>
  );
};

export default Login;
