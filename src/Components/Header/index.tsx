import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Menu from "../Menu";
import { Link } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { Header } from "./style";
import BlueButton from "../BlueButton";

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
            <BlueButton Icon={<FaUsers style={{ fontSize: "1.3em" }} />}>
              Quem somos?
            </BlueButton>
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default index;
