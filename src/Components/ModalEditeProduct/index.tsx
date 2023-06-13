import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { BsBagPlusFill } from "react-icons/bs";
import { ProductsData } from "../../interfaces";
import LoadingProgress from "../LoadingProgress";
import api, { BaseUrl } from "../../assets/api";
import { SelectCategories } from "../../store/Categories/categories.reducer";
import {
  addProducts,
  selectAllProducts,
} from "../../store/Products/products.reducer";
import { BlueButton } from "../BlueButton/style";
import { Container, ImgProduct, MainModal } from "./style";
import PopoverContainer from "../PopoverComponent";

interface Props {
  open: boolean;
  id_product: string;
  onClose: () => void;
  getProducts: (products: ProductsData[]) => void;
}

const index: React.FC<Props> = ({ open, onClose, id_product, getProducts }) => {
  const dispatch = useDispatch();
  const AllProducts = useSelector(selectAllProducts);
  const Product: ProductsData = useMemo(
    () => AllProducts.filter((product) => product._id === id_product)[0],
    [id_product]
  );
  const categories = useSelector(SelectCategories);
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [UrlImage, setUrlImage] = useState<string>(Product.urlPhoto);
  const defaultURL = "../assets/Images/addFoto.png";
  const FILE = useRef<HTMLInputElement>(null);
  const nameFill = useRef<HTMLInputElement>(null);
  const precoFill = useRef<HTMLInputElement>(null);
  const describeFill = useRef<HTMLTextAreaElement>(null);
  const categoryFill = useRef<HTMLSelectElement>(null);

  const [anchorEl, setAnchorEl] = useState(false);

  // Desactivar Popover
  const handleClosePop = () => setAnchorEl(false);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingStatus]);

  useEffect(() => {
    if (LoadingCounter <= 1) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  const UploadIMG = async () => {
    const FD = new FormData();
    try {
      if (!FILE.current?.files) throw "Imagem não enviada";

      // Uploading the file
      const Filename = FILE.current.name;
      const File = FILE.current.files[0];

      FD.append(Filename, File);

      const response = await api.UploadFile(FD);
      const { url } = response;
      setUrlImage(url);
    } catch (error) {
      console.log(error);
    }
  };

  const EditeProduct = async (event: FormEvent) => {
    event.preventDefault();

    const name = nameFill.current?.value;
    const preco = precoFill.current?.value;
    const categoryID = categoryFill.current?.value;
    const urlPhoto = UrlImage ? UrlImage : "";
    const describe = describeFill.current?.value;

    try {
      if (!name) throw "Você precisa enviar um nome";
      else if (!preco) throw "Você precisa enviar um preço";
      else if (!describe) throw "Você precisa enviar uma descrição";
      else if (!categoryID) throw "Você escolher uma categoria";
      else if (!urlPhoto) throw "O produto precisa ter uma foto";

      const response = await api.EditeProduct({
        id: id_product,
        name,
        price: +preco,
        categoryID,
        urlPhoto,
        describe,
      });

      dispatch(addProducts(response));
      getProducts(response);
      setLoadingStatus(true);
      setTimeout(() => {
        setAnchorEl(true);
        setTimeout(() => onClose(), 800);
      });
    } catch (error) {
      alert(error);
    }
  };

  return (
    <MainModal open={open} onClose={onClose}>
      <Container>
        {LoadingStatus ? (
          <LoadingProgress />
        ) : (
          <main>
            <form onSubmit={EditeProduct}>
              <div>
                <label htmlFor="photo">
                  <ImgProduct
                    url={UrlImage ? `${BaseUrl}${UrlImage}` : defaultURL}
                  />
                </label>
                <input
                  type="file"
                  id="photo"
                  name="file"
                  ref={FILE}
                  accept=".jpg, .jpeg, .png, .gif"
                  hidden
                  onChange={UploadIMG}
                />
              </div>
              <div>
                <label htmlFor="name">Nome do Produto:</label>
                <input
                  type="text"
                  defaultValue={Product.name}
                  ref={nameFill}
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="price">Preço:</label>
                <input
                  type="number"
                  defaultValue={Product.price}
                  ref={precoFill}
                  id="price"
                />
              </div>
              <div>
                <label htmlFor="category">Categoria:</label>
                <select
                  id="category"
                  ref={categoryFill}
                  defaultValue={Product.category._id}
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="desc">Descrição:</label>
                <textarea
                  id="desc"
                  ref={describeFill}
                  defaultValue={Product.describe}
                ></textarea>
              </div>
              <div>
                <BlueButton type="submit" startIcon={<BsBagPlusFill />}>
                  Editar Produto
                </BlueButton>
                <Button onClick={onClose} disableElevation>
                  Cancelar
                </Button>
              </div>
            </form>
          </main>
        )}
        <PopoverContainer
          open={anchorEl}
          onClose={handleClosePop}
          msg="Produto cadastrado com sucesso."
        />
      </Container>
    </MainModal>
  );
};

export default index;
