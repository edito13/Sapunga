import React, { useCallback, useEffect, useState } from "react";
import AOS from "aos";
import { useSelector } from "react-redux";
import { Table } from "@mantine/core";
import { BsBagFill } from "react-icons/bs";
import { BaseUrl } from "../../../assets/api";
import { Title } from "../style";
import { Container } from "./style";
import { Money } from "../../../assets/ConvertMoney";
import { ProductsData } from "../../../interfaces";
import { selectAllProducts } from "../../../store/Products/products.reducer";
import ModalCreateProduct from "../../../Components/ModalCreateProduct";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [OpenModal, setOpenModal] = useState(true);

  const CloseModal = useCallback(() => setOpenModal(false), [OpenModal]);

  const Products: ProductsData[] = useSelector(selectAllProducts);

  const rows = Products.map((product, index) => (
    <tr key={product._id}>
      <td>{index + 1}</td>
      <td>{product.name}</td>
      <td>{product.describe.substring(10) + "..."}</td>
      <td>{product.category.name}</td>
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
    <>
      <Container>
        <Title data-aos="fade-right" data-aos-delay="100">
          <BsBagFill />
          <h1>Produtos</h1>
        </Title>
        <Table
          data-aos="zoom-in-up"
          data-aos-delay="150"
          style={{ background: "#fdfdfd", borderRadius: "8px" }}
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Descrição</th>
              <th>Categoria</th>
              <th>Preço</th>
              <th>Imagem</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Container>
      {OpenModal && (
        <ModalCreateProduct open={OpenModal} onClose={CloseModal} />
      )}
    </>
  );
};

export default index;
