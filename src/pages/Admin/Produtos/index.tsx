import React from "react";
import { useSelector } from "react-redux";
import { Table } from "@mantine/core";
import { BsBagFill } from "react-icons/bs";
import { BaseUrl } from "../../../assets/api";
import { Title } from "../style";
import { Container } from "./style";
import { Money } from "../../../assets/ConvertMoney";
import { ProductsData } from "../../../interfaces";
import { selectAllProducts } from "../../../store/Products/products.reducer";

const index = () => {
  const Products: ProductsData[] = useSelector(selectAllProducts);

  const rows = Products.map((product, index) => (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.describe.substring(10) + "..."}</td>
      <td>{Money(product.price)}</td>
      <td style={{ margin: "0px" }}>
        <img
          style={{ maxWidth: "50px", maxHeight: "50px" }}
          src={`${BaseUrl}${product.urlPhoto}`}
          alt=""
        />
      </td>
    </tr>
  ));

  return (
    <Container>
      <Title>
        <BsBagFill />
        <h1>Produtos</h1>
      </Title>
      <Table style={{ background: "#fdfdfd", borderRadius: "8px" }}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Desc</th>
            <th>Preço</th>
            <th>Imagem</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </Container>
  );
};

export default index;
