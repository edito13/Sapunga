import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "@mui/material";
import { Container } from "./style";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { VioletButton } from "../../Components/VioletButton/style";
import { FaFacebook, FaGoogle, FaRegPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <div>
        <div className="post" data-aos="fade-right" data-aos-duration="1000">
          <img
            src="assets/Images/Login Picture.png"
            alt="Black Man Ilustration"
          />
          <p data-aos="fade-right" data-aos-delay="300">
            Faça seu login e junta-te à nós em apenas um clique, é muito{" "}
            <span className="Green">fácil.</span>
          </p>
          <div
            className="sociais-media"
            data-aos="fade-right"
            data-aos-delay="450"
          >
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
          </form>
          <div>
            <Link to={"/criar_conta"} className="AccountLink">
              <p>
                Não tem uma conta?{" "}
                <span className="LightViolet">CRIAR CONTA.</span>
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
