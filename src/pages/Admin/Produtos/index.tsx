import React, { useCallback, useEffect, useRef, useState } from "react";
import AOS from "aos";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "@mantine/core";
import { IconButton } from "@mui/material";
import { FaTrash } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import { BsBagFill, BsFillPlusCircleFill } from "react-icons/bs";
import api, { BaseUrl } from "../../../assets/api";
import { Title } from "../style";
import { Container } from "./style";
import { Money } from "../../../assets/ConvertMoney";
import { ProductsData } from "../../../interfaces";
import {
  addProducts,
  selectAllProducts,
} from "../../../store/Products/products.reducer";
import ModalCreateProduct from "../../../Components/ModalCreateProduct";
import { BlueButton } from "../../../Components/BlueButton/style";
import LoadingProgress from "../../../Components/LoadingProgress";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Painel Admin - Produtos";
  }, []);

  const dispatch = useDispatch();
  const SearchField = useRef<HTMLInputElement>(null);

  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      800
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter <= 1) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  const [OpenModal, setOpenModal] = useState(false);

  const CloseModal = useCallback(() => setOpenModal(false), [OpenModal]);

  const [Products, setProducts] = useState<ProductsData[]>(
    useSelector(selectAllProducts)
  );

  const SearchProducts = () => {
    const SearchValue = SearchField.current?.value as string;

    const FilteredProducts = Products.filter((product) => {
      const productItem = product.name.toLocaleLowerCase();
      const value = SearchValue.toLocaleLowerCase();
      if (value === "") return product;
      return productItem.includes(value);
    });
    setProducts(FilteredProducts);
    setLoadingStatus(true);
  };

  const DeleteProduct = async (id: string) => {
    const response = await api.DeleteProduct(id);
    dispatch(addProducts(response));
    setProducts(response);
    setLoadingStatus(true);
  };

  const getProducts = useCallback(
    (products: ProductsData[]) => setProducts(products),
    [Products]
  );

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
      <td>
        <IconButton onClick={() => DeleteProduct(product._id)}>
          <FaTrash />
        </IconButton>
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
          <div className="SearchButton" data-aos="zoom-in" data-aos-delay="150">
            <input
              type="text"
              id="search"
              ref={SearchField}
              placeholder="Pesquise um produto"
            />
            <BlueButton onClick={SearchProducts}>
              <BiSearch />
            </BlueButton>
          </div>
          <BlueButton
            onClick={() => setOpenModal(true)}
            startIcon={<BsFillPlusCircleFill />}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Novo Produto
          </BlueButton>
        </div>
        {LoadingStatus ? (
          <LoadingProgress />
        ) : (
          <>
            {Products.length ? (
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
                    <th>Acções</th>
                  </tr>
                </thead>
                <tbody>{rows}</tbody>
              </Table>
            ) : (
              <p>Nenhum Produto foi cadastrado ainda.</p>
            )}
          </>
        )}
      </Container>
      {OpenModal && (
        <ModalCreateProduct
          open={OpenModal}
          onClose={CloseModal}
          getProducts={getProducts}
        />
      )}
    </>
  );
};

export default index;
