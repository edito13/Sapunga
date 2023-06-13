import React, { useCallback, useEffect, useRef, useState } from "react";
import AOS from "aos";
import { useDispatch, useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import { BiSearch } from "react-icons/bi";
import {
  BsBagFill,
  BsFillPlusCircleFill,
  BsPencilSquare,
  BsTrashFill,
} from "react-icons/bs";
import api, { BaseUrl } from "../../../assets/api";
import { Title } from "../style";
import { Container, Table } from "./style";
import { Money } from "../../../assets/ConvertMoney";
import { ProductsData } from "../../../interfaces";
import {
  addProducts,
  selectAllProducts,
} from "../../../store/Products/products.reducer";
import ModalCreateProduct from "../../../Components/ModalCreateProduct";
import ModalEditeProduct from "../../../Components/ModalEditeProduct";
import { BlueButton } from "../../../Components/BlueButton/style";
import LoadingProgress from "../../../Components/LoadingProgress";
import PopoverContainer from "../../../Components/PopoverComponent";
import { NodeEnvironment } from "../../../types";
import "aos/dist/aos.css";

const index = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    document.title = "Painel Admin - Produtos";
  }, []);

  const dispatch = useDispatch();
  const env = process.env.NODE_ENV as NodeEnvironment;
  const SearchField = useRef<HTMLInputElement>(null);

  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [anchorEl, setAnchorEl] = useState(false);

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

  const [OpenCreateProductModal, setOpenCreateProductModal] = useState(false);
  const [OpenEditeProductModal, setOpenEditeProductModal] = useState(false);

  const CloseCreateModal = useCallback(
    () => setOpenCreateProductModal(false),
    [OpenCreateProductModal]
  );
  const CloseEditeModal = useCallback(
    () => setOpenEditeProductModal(false),
    [OpenEditeProductModal]
  );

  const OpenEditeModal = (_id: string) => {
    setIdProduct(_id);
    setOpenEditeProductModal(true);
  };

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

  const [Products, setProducts] = useState<ProductsData[]>(
    useSelector(selectAllProducts)
  );

  const [IdProduct, setIdProduct] = useState<string>("");

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
      <td>{product.describe.substring(0, 20) + "..."}</td>
      <td>{product.category.name}</td>
      <td>{Money(product.price)}</td>
      <td style={{ margin: "0px" }}>
        <img
          style={{ maxWidth: "50px", maxHeight: "50px" }}
          src={
            env === "development"
              ? `${BaseUrl}${product.urlPhoto}`
              : `${product.urlPhoto}`
          }
          alt=""
        />
      </td>
      <td>
        <IconButton onClick={() => DeleteProduct(product._id)}>
          <BsTrashFill />
        </IconButton>
        <IconButton onClick={() => OpenEditeModal(product._id)}>
          <BsPencilSquare />
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
            onClick={() => setOpenCreateProductModal(true)}
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
      <PopoverContainer
        open={anchorEl}
        onClose={handleClosePop}
        msg="Produto cadastrado com sucesso."
      />
      {OpenCreateProductModal && (
        <ModalCreateProduct
          open={OpenCreateProductModal}
          onClose={CloseCreateModal}
          getProducts={getProducts}
        />
      )}
      {OpenEditeProductModal && (
        <ModalEditeProduct
          open={OpenEditeProductModal}
          onClose={CloseEditeModal}
          id_product={IdProduct}
          getProducts={getProducts}
        />
      )}
    </>
  );
};

export default index;
