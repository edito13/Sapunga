import React from "react";
import { BlueButton } from "../../../Components/BlueButton/style";
import { Container } from "./style";

const index = () => {
  return (
    <Container>
      <img src="../assets/Images/logo.png" alt="Sapunga" />
      <form action="">
        <div>
          <label htmlFor="">Nome de Usuário</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Código</label>
          <input type="password" />
        </div>
        <BlueButton fullWidth>Entrar</BlueButton>
      </form>
    </Container>
  );
};

export default index;
