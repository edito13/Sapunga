import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { Title } from "../style";
import { Container } from "./style";

const index = () => {
  return (
    <Container>
      <Title>
        <FaCartPlus />
        <h1>Encomendas</h1>
      </Title>
    </Container>
  );
};

export default index;
