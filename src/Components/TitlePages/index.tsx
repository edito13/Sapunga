import React from "react";
import { TitlePages } from "./style";

interface props {
  children: string;
}

const index: React.FC<props> = ({ children }) => {
  return (
    <TitlePages data-aos="fade-right">
      <h1>{children}</h1>
    </TitlePages>
  );
};

export default index;
