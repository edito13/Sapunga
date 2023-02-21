import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../Components/NavBar";
import { Container } from "./style";

const index = () => {
  return (
    <Container>
      <NavBar />
      <Outlet />
    </Container>
  );
};

export default index;
