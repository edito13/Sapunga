import React from "react";
import Menu from "../Menu";
import { Header } from "./style";
import { VioletButton } from "../VioletButton/style";

const index = () => {
  return (
    <Header>
      <div>
        <Menu />
        <h1>SAPUNGA</h1>
        <p>Comércio & Serviços, Lda.</p>
        <div>
          <VioletButton>Quem somos?</VioletButton>
        </div>
      </div>
    </Header>
  );
};

export default index;
