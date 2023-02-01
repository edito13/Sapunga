import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TitlePages from "../../Components/TitlePages";
import { FaShoppingBag } from "react-icons/fa";

const index = () => {
  return (
    <>
      <Header />
      <TitlePages Icon={<FaShoppingBag style={{ fontSize: "1.6em" }} />}>
        Produtos
      </TitlePages>
      <Footer />
    </>
  );
};

export default index;
