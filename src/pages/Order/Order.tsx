import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { ProductsData } from "../../interfaces";
import { selectAllProducts } from "../../store/Products/products.reducer";
import { Container, ContainerProduct } from "./style";

interface Props {}

export default ({}: Props) => {
  const { id } = useParams();
  const Products: ProductsData[] = useSelector(selectAllProducts);
  const [Product, setProduct] = useState<ProductsData>();

  useEffect(() => {
    const product = Products.filter((product) => product._id === id)[0];
    setProduct(product);
  }, [id]);

  return (
    <Container>
      <div className="introduce">
        <img src="../assets/Images/buy1.png" alt="" />
        <h1>Hello World: {Product?.name}</h1>
      </div>
      <ContainerProduct></ContainerProduct>
    </Container>
  );
};
