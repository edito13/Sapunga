import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { BsFacebook, BsInstagram, BsTwitter, BsWhatsapp } from "react-icons/bs";
import { FaFacebook, FaGoogle, FaPaperPlane } from "react-icons/fa";
import { Container } from "./style";
import { BlueButton } from "../../Components/BlueButton/style";
import ModalCheckLogin from "../../Components/ModalCheckLogin";
import api from "../../assets/api";
import { logarUsuario } from "../../store/Users/users.reducer";

interface Props {
  token: string;
}

const Login: React.FC<Props> = ({ token }) => {
  useEffect(() => {
    if (token) navigate("/");
  }, []);

  const [cookies, setCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const [OpenModal, setOpenModal] = useState<boolean>(false);
  const [Error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    if (!OpenModal) {
      const token = cookies.user;
      if (token) navigate("/");
    }
  }, [OpenModal]);

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

      const login = await api.VerifyLogin({ email, password });

      if (login.status === 500) setError(login.erro);
      else if (login.status === 200) {
        setError("");
        const user = login.user;
        const token = login.token;

        dispatch(logarUsuario({ user, token }));
        setCookie("user", token, { path: "/" });
        localStorage.setItem("user", JSON.stringify(user));
        console.log(login);
      }
    } catch (error) {
      setError(error as string);
    } finally {
      setOpenModal(true);
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
              <div data-aos="fade-right" data-aos-delay="50">
                <label htmlFor="email">E-mail ou Telefone</label>
                <input
                  type="email"
                  id="email"
                  placeholder="email@gmail.com"
                  ref={emailFill}
                  required
                />
              </div>
              <div data-aos="fade-left" data-aos-delay="100">
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
