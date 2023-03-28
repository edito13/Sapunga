import React from "react";
import { FaUsers } from "react-icons/fa";
import { Title } from "../style";
import { Container } from "./style";

const index = () => {
  return (
    <Container>
      <Title>
        <FaUsers />
        <h1>Usuarios</h1>
      </Title>
    </Container>
  );
};

export default index;
