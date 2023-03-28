import React from "react";
import { Outlet } from "react-router";
import NavBar from "../../Components/NavBar";
import { Container } from "./style";

const index = () => {
  return (
    <Container>
      <NavBar />
      <main>
        <div className="introduce">
          <img
            data-aos="zoom-in-right"
            data-aos-delay="150"
            src="../assets/Images/painel man.svg"
            alt="Black man"
          />
          <div data-aos="zoom-in-left" data-aos-delay="150" className="text">
            <h3>Sapunga</h3>
            <p>Bem-vindo ao seu Painel Administrador</p>
          </div>
        </div>
        <Outlet />
      </main>
    </Container>
  );
};

export default index;
