import React, { useEffect } from "react";
import AOS from "aos";
import { Navigate, Outlet, useNavigate } from "react-router";
import NavBar from "../../Components/NavBar";
import { Container } from "./style";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/admin/dashboard");
  }, []);

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
