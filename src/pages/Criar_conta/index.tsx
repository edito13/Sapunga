import React, { FormEvent, useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { FaGoogle, FaPaperPlane } from "react-icons/fa";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { Container } from "./style";
import { BlueButton } from "../../Components/BlueButton/style";
import ModalCheck from "../../Components/ModalCheck";
import api from "../../assets/api";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { SignUser } from "../../store/Users/users.reducer";
import FirebaseLogin from "../../assets/Firebase";
import { Data } from "../../interfaces";

const Login = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const successMessage = "Sua conta foi criada com sucesso.";

  const [cookies, setCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const nameFill = useRef<HTMLInputElement>(null);
  const emailFill = useRef<HTMLInputElement>(null);
  const passwordFill = useRef<HTMLInputElement>(null);
  const confirmPasswordFill = useRef<HTMLInputElement>(null);

  const [OpenModal, setOpenModal] = useState<boolean>(false);
  const [Error, setError] = useState<string>("");

  const onClose = () => setOpenModal(false);

  const CreateAcount = async (e: FormEvent) => {
    e.preventDefault();

    const name = nameFill.current?.value;
    const email = emailFill.current?.value;
    const password = passwordFill.current?.value;
    const confirmPassword = confirmPasswordFill.current?.value;

    try {
      if (!name) throw "O campo de nome está vazio, preencha-o.";
      else if (!email) throw "O campo de email está vazio, preencha-o.";
      else if (!password) throw "O campo de senha está vazio, preencha-o.";
      else if (!confirmPassword)
        throw "O campo de confirmar senha está vazio, preencha-o.";
      else if (password !== confirmPassword)
        throw "As senhas são diferentes, use mesma senha.";

      // // If all validation are ok, then we can continue

      const { data } = await axios(
        `https://api.usebouncer.com/v1.1/email/verify?email=${email}&timeout=10`,
        {
          headers: {
            "x-api-key": "52Y4VdBtNhNqcdDFoI8AeG92vJAvZqeGFabYp8gf",
          },
        }
      );

      if (!data) throw "Este e-mail não existe, insira um e-mail existente.";

      const response = await api.CreateAcount({ name, email, password });

      if (response.error) return setError(response.error);
      setError("");
      const { user, token } = response;

      setCookie("user", token, { path: "/" });
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      dispatch(SignUser({ user, token }));
    } catch (error) {
      setError(error as string);
    } finally {
      setOpenModal(true);
    }
  };
  const CreateAcountByGoogle = async () => {
    const user: Data | null = (await FirebaseLogin.GoogleLogar()).user;

    if (user) {
      const { email, displayName } = user;
      const userEmail = email as string;
      const name = displayName as string;

      try {
        const response = await api.CreateAcount({
          email: userEmail,
          name,
        });

        if (response.error) return setError(response.error);
        // if not error is catched, so all is okay.

        setError("");
        const { user, token } = response;

        setCookie("user", token, { path: "/" });
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        dispatch(SignUser({ user, token }));
      } catch (error) {
        setError(error as string);
      } finally {
        setOpenModal(true);
      }
    }
  };

  return (
    <>
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
              <span className="LightBlue">disponível.</span>
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
          <div
            className="content"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h3>Criar conta</h3>
            <form onSubmit={CreateAcount}>
              <div>
                <label htmlFor="nome">Nome de usuário</label>
                <input
                  type="text"
                  id="nome"
                  ref={nameFill}
                  placeholder="Digite seu nome"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="text"
                  id="email"
                  ref={emailFill}
                  placeholder="email@gmail.com"
                  required
                />
              </div>
              <div className="senhas">
                <div>
                  <label htmlFor="senha">Senha</label>
                  <input
                    type="password"
                    id="senha"
                    ref={passwordFill}
                    placeholder="Digite sua senha"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="confsenha">Confirmar</label>
                  <input
                    type="password"
                    id="confsenha"
                    ref={confirmPasswordFill}
                    placeholder="Cofirme sua senha"
                    required
                  />
                </div>
              </div>
              <BlueButton
                type="submit"
                startIcon={<FaPaperPlane />}
                variant="contained"
                fullWidth
                disableElevation
              >
                Registrar-se
              </BlueButton>
            </form>
            <div>
              <Link to={"/login"} className="AccountLink">
                <p>
                  Já tem uma conta? <span className="LightBlue">LOGAR.</span>
                </p>
              </Link>
              <div className="or">
                <hr />
                Ou
                <hr />
              </div>
              <div className="midiaLogin">
                <div onClick={CreateAcountByGoogle}>
                  <FaGoogle />
                  <p>Usar o Google</p>
                </div>
              </div>
            </div>
            <p>Sapunga | Todos os direitos reservados</p>
          </div>
        </div>
      </Container>
      {OpenModal && (
        <ModalCheck
          erro={Error}
          successMessage={successMessage}
          open={OpenModal}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default Login;
