import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TitleContainer } from "./style";

interface props {
  children: string;
}

const index: React.FC<props> = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <TitleContainer data-aos="zoom-in-down">
      <h2>{children}</h2>
    </TitleContainer>
  );
};

export default index;
