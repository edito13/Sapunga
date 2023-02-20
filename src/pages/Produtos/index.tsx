import React from "react";
import Header from "../../Components/Header";
import ProductItem from "../../Components/ProductItem";
import Footer from "../../Components/Footer";
import TitlePages from "../../Components/TitlePages";
import { FaShoppingBag } from "react-icons/fa";
import { ProductsContainer } from "./style";

const index = () => {
  const Products = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <Header />
      <TitlePages Icon={<FaShoppingBag style={{ fontSize: "1.6em" }} />}>
        Produtos
      </TitlePages>
      <ProductsContainer>
        {Products.map((item, index) => (
          <ProductItem key={index} index={index + 1} />
        ))}
      </ProductsContainer>
      <Footer />
    </>
  );
};

export default index;
