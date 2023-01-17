import React from "react";
import Menu from "../Menu";
import { Header } from "./style";
import { VioletButton } from "../VioletButton/style";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <Header>
      <div>
        <Menu />
        <h1>SAPUNGA</h1>
        <p>Comércio & Serviços, Lda.</p>
        <div>
          <Link to={'/quem_somos'}>
            <VioletButton>Quem somos?</VioletButton>
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default index;
