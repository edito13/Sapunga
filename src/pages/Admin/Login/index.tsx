import React, { FormEvent, useRef } from "react";
import { BlueButton } from "../../../Components/BlueButton/style";
import { Container } from "./style";

const index = () => {
  const nameFill = useRef<HTMLInputElement>(null);
  const codeFill = useRef<HTMLInputElement>(null);

  const SignIn = async (event: FormEvent) => {
    event.preventDefault();

    const useName = nameFill.current?.value;
    const userCode = codeFill.current?.value;

    alert(`O usuário: ${useName} colocou o código: ${userCode}`);
  };

  return (
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
  );
};

export default index;
