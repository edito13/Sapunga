import React, { FormEvent, useCallback, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Container } from "./style";
import { BlueButton } from "../../Components/BlueButton/style";
import { FaFacebook, FaGoogle, FaPaperPlane } from "react-icons/fa";
import ModalCheckLogin from "../../Components/ModalCheckLogin";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [OpenModal, setOpenModal] = useState<boolean>(false);
  const [Error, setError] = useState<string>("");

  const onClose = useCallback(() => setOpenModal(false), [OpenModal]);

  const Logar = (e: FormEvent) => {
    e.preventDefault();

    setOpenModal(true);
  };

  return (
    <>
      <Container>
        <div>
          <div className="post" data-aos="fade-right" data-aos-duration="1000">
            <img
              src="assets/Images/Login Picture.png"
              alt="Black Man Ilustration"
            />
            <p data-aos="fade-right" data-aos-delay="300">
              Faça seu login e junta-te à nós em apenas um clique, é muito
              fácil.
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
          <div
            className="content"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3>Iniciar Sessão</h3>
            <form onSubmit={Logar}>
              <div data-aos="fade-right" data-aos-delay="50">
                <label htmlFor="email">E-mail ou Telefone</label>
                <input type="text" id="email" placeholder="email@gmail.com" />
              </div>
              <div data-aos="fade-left" data-aos-delay="100">
                <label htmlFor="senha">Senha</label>
                <input type="password" id="senha" placeholder="Senha" />
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
                Logar
              </BlueButton>
            </form>
            <div>
              <Link to={"/criar_conta"} className="AccountLink">
                <p>
                  Não tem uma conta?{" "}
                  <span className="LightBlue">CRIAR CONTA.</span>
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
      {OpenModal && (
        <ModalCheckLogin erro={Error} open={OpenModal} onClose={onClose} />
      )}
    </>
  );
};

export default Login;
