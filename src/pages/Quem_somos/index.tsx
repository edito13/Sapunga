import React from "react";
import Header from "../../Components/Header";
// import Slogan from "../../Components/Slogan";
import Footer from "../../Components/Footer";
import TitlePages from "../../Components/TitlePages";
import { FaUsers } from "react-icons/fa";

const index = () => {
  return (
    <>
      <Header />
      <TitlePages Icon={<FaUsers />}>Quem somos</TitlePages>
      <Footer />
    </>
  );
};

export default index;
