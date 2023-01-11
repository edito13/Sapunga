import React from "react";
import Menu from "../Menu";
import ButtonQuemSomos from "../Btn-Quem-somos";
import { Header } from "./style";

const index = () => {
  return (
    <Header>
      <div>
        <Menu />
        <h1>SAPUNGA</h1>
        <p>Comércio & Serviços, Lda.</p>
        <div>
          <ButtonQuemSomos />
        </div>
      </div>
    </Header>
  );
};

export default index;
