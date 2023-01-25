import React from "react";
import Header from "../../Components/Header";
import Slogan from "../../Components/Slogan";
import Footer from "../../Components/Footer";
import TitlePages from "../../Components/TitlePages";

const index = () => {
  return (
    <>
      <Header />
      <TitlePages>Quem Somos</TitlePages>
      <Slogan />
      <Footer />
    </>
  );
};

export default index;
