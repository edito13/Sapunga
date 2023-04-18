import React, {
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { Container } from "./style";
import Header from "../../Components/Header";
import TitlePages from "../../Components/TitlePages";
import Footer from "../../Components/Footer";
import ModalCheck from "../../Components/ModalCheck";
import ToTop from "../../Components/ToTop";
import { BlueButton } from "../../Components/BlueButton/style";
import { IsAuthenticed } from "../../store/Users/users.reducer";
import api from "../../assets/api";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [cookies] = useCookies(["user"]);
  const isAuthenticed = useSelector(IsAuthenticed);

  const successMessage =
    "A mensagem foi enviada com successo, retornaremos assim que for possível.";

  const [OpenModal, setOpenModal] = useState<boolean>(false);
  const [Error, setError] = useState<string>("");

  const onClose = useCallback(() => setOpenModal(false), [OpenModal]);

  const messageField = useRef<HTMLTextAreaElement>(null);
  const SendMessage = async (event: FormEvent) => {
    event.preventDefault();

    const message = messageField.current?.value;

    try {
      if (!message) throw "O campo de mensagem está vazio, preencha-o.";

      setError("");
      const response = await api.SendMessage({ message, token: cookies.user });
      console.log(response);
    } catch (error) {
      setError(error as string);
    } finally {
      setOpenModal(true);
    }
  };

  return (
    <>
      <Header />
      <ToTop />
      <Container>
        <TitlePages Icon={<FaPhoneAlt style={{ fontSize: "1.6em" }} />}>
          Contactos
        </TitlePages>
        <div className="main">
          <div className="Introduce">
            <img
              src="assets/Images/Black Men Office Video Chat.svg"
              alt="Black Men Office Video Chat"
              data-aos="zoom-in-right"
            />
            <div className="text">
              <h3 data-aos="zoom-in-left" data-aos-delay="100">
                Estamos acompanhando <span className="DarkViolet">tudo!</span>
              </h3>
              <p data-aos="zoom-in-left" data-aos-delay="150">
                Fique descançado que estamos aqui do outro lado, aguardando e
                fornecendo tudo que possas precisar, no caso de alguma dúvida,
                por favor não exite. Submeta ao formulário e envia uma mensagem
                para nós que será um grande prazer ajuda-lo.
              </p>
              <p data-aos="zoom-in-left" data-aos-delay="200">
                A Sapunga agradece!
              </p>
            </div>
          </div>
          <div>
            <div className="location">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1947.9277597739901!2d13.52278066727513!3d-12.459341146756229!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1bb1d5fcc34e282f%3A0xd0ea5a9b9c77861f!2sSAPUNGA%20-%20Com%C3%A9rcio%20e%20Sevi%C3%A7os%2C%20LDA!5e0!3m2!1spt-PT!2sao!4v1681741375914!5m2!1spt-PT!2sao"
                width="600"
                height="450"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
            <form onSubmit={SendMessage}>
              <label>Mensagem</label>
              <p>Envie uma mensagem para nós apartir daqui.</p>
              <textarea
                ref={messageField}
                placeholder="Escreva alguma coisa para nós!"
                data-aos="zoom-in"
                data-aos-delay="100"
                disabled={isAuthenticed ? false : true}
              ></textarea>
              <div data-aos="zoom-in" data-aos-delay="100">
                <BlueButton
                  variant="contained"
                  type="submit"
                  startIcon={<FaPaperPlane />}
                  disableElevation
                  disabled={isAuthenticed ? false : true}
                >
                  Enviar
                </BlueButton>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <Footer />
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

export default index;
