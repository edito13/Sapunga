import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaGoogle, FaPaperPlane } from "react-icons/fa";
import { Container } from "./style";
import { BlueButton } from "../../Components/BlueButton/style";
import ModalCheck from "../../Components/ModalCheck";
import api from "../../assets/api";
import { SignUser } from "../../store/Users/users.reducer";
import FirebaseLogin from "../../assets/Firebase";
import { Data } from "../../interfaces";

interface Props {}

const Login: React.FC<Props> = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [cookies, setCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const [OpenModal, setOpenModal] = useState<boolean>(false);
  const [Error, setError] = useState<string>("");

  useEffect(() => {
    if (!OpenModal) {
      const token = cookies.user;
      if (token) setTimeout(() => window.location.reload(), 700);
    }
  }, [OpenModal]);

  const successMessage = "Seu login foi feito com sucesso.";

  const onClose = useCallback(() => setOpenModal(false), [OpenModal]);

  const emailFill = useRef<HTMLInputElement>(null);
  const passwordFill = useRef<HTMLInputElement>(null);

  const Logar = async (e: FormEvent) => {
    e.preventDefault();

    const email = emailFill.current?.value;
    const password = passwordFill.current?.value;

    try {
      if (!email) throw "Preencha o email correctamente.";
      else if (!password) throw "Preencha a senha correctamente.";

      const login = await api.CheckLogin({ email, password });

      if (login.error) return setError(login.error);

      // if not error is catched, so all is okay.
      setError("");
      const { user, token } = login;

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

  const LogarGoogle = async () => {
    const user: Data | null = (await FirebaseLogin.GoogleLogar()).user;

    if (user) {
      const { email } = user;
      const userEmail = email as string;

      try {
        const login = await api.CheckLoginGoogle(userEmail);

        if (login.error) return setError(login.error);
        // if not error is catched, so all is okay.

        setError("");
        const { user, token } = login;

        setCookie("user", token, { path: "/" });
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        dispatch(SignUser({ user, token }));
      } catch (error) {
        setError(error as string);
      } finally {
        setOpenModal(true);
      }
    } else {
      alert("Error");
    }
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
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  ref={emailFill}
                  required
                />
              </div>
              <div>
                <label htmlFor="senha">Senha</label>
                <input
                  type="password"
                  id="senha"
                  placeholder="Senha"
                  ref={passwordFill}
                  required
                />
              </div>
              <BlueButton
                type="submit"
                startIcon={<FaPaperPlane />}
                variant="contained"
                fullWidth
                disableElevation
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
                <div onClick={LogarGoogle}>
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
