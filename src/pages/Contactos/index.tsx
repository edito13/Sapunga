import React from "react";
import Header from "../../Components/Header";
import Slogan from "../../Components/Slogan";
import Footer from "../../Components/Footer";
import { TitlePages } from "../../Components/TitlePages/style";

const index = () => {

  return (
    <>
      <Header />
      <TitlePages>
        <h1>Contactos</h1>
      </TitlePages>
      <Slogan />
      <Footer />
    </>
  );
};

export default index;
