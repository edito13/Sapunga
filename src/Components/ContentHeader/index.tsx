import React from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlueButton from "../BlueButton";
import { Container } from "./style";

interface Props {
  image: number;
}

const index: React.FC<Props> = ({ image }) => {
  return (
    <Container image={image}>
      <div>
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
    </Container>
  );
};

export default index;
