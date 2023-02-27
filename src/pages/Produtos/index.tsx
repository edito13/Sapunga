import React from "react";
import Header from "../../Components/Header";
import ProductItem from "../../Components/ProductItem";
import TitlePages from "../../Components/TitlePages";
import { FaShoppingBag } from "react-icons/fa";
import { ProductsContainer } from "./style";
import Footer from "../../Components/Footer";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../../store/Products/products.reducer";

const index = () => {
  // const Products = [1, 2, 3, 4, 5, 6];

  const Products = useSelector(selectAllProducts);

  return (
    <>
      <Header />
      <TitlePages Icon={<FaShoppingBag style={{ fontSize: "1.6em" }} />}>
        Produtos
      </TitlePages>
      <ProductsContainer>
        {Products.map((item, index) => (
          <ProductItem key={index} product={item} index={index + 1} />
        ))}
      </ProductsContainer>
      <Footer />
    </>
  );
};

export default index;
