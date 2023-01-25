import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "../Menu";
import { Header } from "./style";
import { VioletButton } from "../VioletButton/style";
import { Link } from "react-router-dom";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Header>
      <div>
        <Menu />
        <h1 data-aos="zoom-in-down">SAPUNGA</h1>
        <p data-aos="zoom-in-down" data-aos-delay="150">
          Comércio & Serviços, Lda.
        </p>
        <div data-aos="zoom-in-down" data-aos-delay="250">
          <Link to={"/quem_somos"}>
            <VioletButton>Quem somos?</VioletButton>
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default index;
