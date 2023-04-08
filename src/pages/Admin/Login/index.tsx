import React, { FormEvent, useCallback, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import api from "../../../assets/api";
import ModalLoading from "../../../Components/ModalLoading";
import { BlueButton } from "../../../Components/BlueButton/style";
import { SignInAdmin } from "../../../store/Admins/admins.reducer";
import { Container } from "./style";

const index = () => {
  const [cookies, setCookie] = useCookies(["admin"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const nameFill = useRef<HTMLInputElement>(null);
  const codeFill = useRef<HTMLInputElement>(null);

  const [OpenModal, setOpenModal] = useState(false);

  const CloseModal = useCallback(() => setOpenModal(false), [OpenModal]);

  const SignIn = async (event: FormEvent) => {
    event.preventDefault();

    const name = nameFill.current?.value;
    const code = codeFill.current?.value;

    // alert(`O usuário: ${name} colocou o código: ${code}`);

    try {
      if (!name) throw "Preencha o nome correctamente.";
      else if (!code) throw "Preencha a código correctamente.";

      setOpenModal(true);

      const login = await api.CheckLoginAdmin({ name, code });

      if (login.error) throw login.error;

      // if there is an error then it's catched, if not so all is okay.
      const admin = login.admin;
      const token = login.token_admin;
      dispatch(SignInAdmin({ admin, token }));
      setCookie("admin", token, { path: "/" });
      localStorage.setItem("admin", JSON.stringify(admin));
      setTimeout(() => {
        CloseModal();
        setTimeout(() => navigate("/admin/dashboard"), 500);
      }, 800);
    } catch (error) {
      console.log(error);
      CloseModal();
    }
  };

  return (
    <>
      <Container>
        <img src="../assets/Images/logo.png" alt="Sapunga" />
        <form onSubmit={SignIn}>
          <div>
            <label htmlFor="name">Nome de Usuário</label>
            <input type="text" id="name" ref={nameFill} />
          </div>
          <div>
            <label htmlFor="code">Código</label>
            <input type="password" id="code" ref={codeFill} />
          </div>
          <BlueButton type="submit" fullWidth>
            Entrar
          </BlueButton>
        </form>
      </Container>
      {OpenModal && <ModalLoading open={OpenModal} onClose={CloseModal} />}
    </>
  );
};

export default index;
