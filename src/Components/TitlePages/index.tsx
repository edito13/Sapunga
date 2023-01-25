import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TitlePages } from "./style";

interface props {
  children: string;
}

const index: React.FC<props> = ({ children }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <TitlePages data-aos="fade-right">
      <h1>{children}</h1>
    </TitlePages>
  );
};

export default index;
