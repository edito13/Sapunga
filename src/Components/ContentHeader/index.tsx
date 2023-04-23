import React, { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlueButton from "../BlueButton";
import { Container } from "./style";

interface Props {
  image: number;
}

const index: React.FC<Props> = ({ image }) => {
  const text = "SAPUNGA";
  const delay = 150;

  const [currentText, setCurrentText] = useState("");
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentPosition < text.length) {
        setCurrentText((prev) => prev + text.charAt(currentPosition));
        setCurrentPosition((prev) => prev + 1);
      } else {
        clearInterval(interval);
      }
    }, delay);

    return () => clearInterval(interval);
  }, [currentPosition, delay, text]);

  return (
    <Container image={image}>
      <div>
        <h1 data-aos="zoom-in-down">{currentText || ""}</h1>
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
