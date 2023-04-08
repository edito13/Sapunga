import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import AOS from "aos";
import { useSelector } from "react-redux";
import { Table } from "@mantine/core";
import { BiSearch } from "react-icons/bi";
import { BsBagFill, BsFillPlusCircleFill } from "react-icons/bs";
import { BaseUrl } from "../../../assets/api";
import { Title } from "../style";
import { Container } from "./style";
import { Money } from "../../../assets/ConvertMoney";
import { ProductsData } from "../../../interfaces";
import { selectAllProducts } from "../../../store/Products/products.reducer";
import ModalCreateProduct from "../../../Components/ModalCreateProduct";
import { BlueButton } from "../../../Components/BlueButton/style";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Painel Admin - Produtos";
  }, []);

  // const [IsActive, setIsActive] = useState(false);
  const [OpenModal, setOpenModal] = useState(false);

  const CloseModal = useCallback(() => setOpenModal(false), [OpenModal]);

  const [Products, setProducts] = useState<ProductsData[]>(
    useSelector(selectAllProducts)
  );
  const [Search, setSearch] = useState<string>("");

  const SearchProducts = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearch(newValue);

    const FilteredProducts = Products.filter((product) => {
      const productItem = product.name.toLocaleLowerCase();
      const value = newValue.toLocaleLowerCase();
      if (newValue === "") return productItem;
      return productItem.includes(value);
    });
    setProducts(FilteredProducts);
    console.log(newValue);
    console.log(FilteredProducts);
  };

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
        <div className="Header">
          <Title data-aos="fade-right" data-aos-delay="100">
            <BsBagFill />
            <h1>Produtos</h1>
          </Title>
          <div className="SearchButton">
            <label htmlFor="search">
              <BiSearch />
            </label>
            <input
              type="text"
              id="search"
              value={Search}
              onChange={SearchProducts}
              placeholder="Pesquise um produto"
            />
          </div>
          <BlueButton
            onClick={() => setOpenModal(true)}
            startIcon={<BsFillPlusCircleFill />}
          >
            Novo Produto
          </BlueButton>
        </div>
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
