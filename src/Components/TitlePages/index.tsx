import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { TitlePages } from "./style";

interface props {
  children: string;
  Icon: React.ReactNode;
}

const index: React.FC<props> = ({ children, Icon }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <TitlePages data-aos="fade-right">
      {Icon}
      <h1>{children}</h1>
    </TitlePages>
  );
};

export default index;
