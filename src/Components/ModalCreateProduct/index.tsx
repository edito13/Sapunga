import React, {
  ChangeEvent,
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { UsersData } from "../../interfaces";
import LoadingProgress from "../LoadingProgress";
import { Container, ImgProduct, MainModal } from "./style";
import { selectUserSigned } from "../../store/Users/users.reducer";
import api, { BaseUrl } from "../../assets/api";
import { BlueButton } from "../BlueButton/style";
import { BsBagPlusFill } from "react-icons/bs";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { SelectCategories } from "../../store/Categories/categories.reducer";
import { addProducts } from "../../store/Products/products.reducer";

interface Props {
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user"]);
  const user: UsersData = useSelector(selectUserSigned);
  const categories = useSelector(SelectCategories);
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [UrlImage, setUrlImage] = useState<string>("");
  const defaultURL = "../assets/Images/addFoto.png";
  const FILE = useRef<HTMLInputElement>(null);
  const nameFill = useRef<HTMLInputElement>(null);
  const precoFill = useRef<HTMLInputElement>(null);
  const describeFill = useRef<HTMLTextAreaElement>(null);
  const categoryFill = useRef<HTMLSelectElement>(null);

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
    alert("Uploading image...");

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

  const CreateProduct = async (event: FormEvent) => {
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

      const response = await api.CreateProduct({
        name,
        price: +preco,
        categoryID,
        urlPhoto,
        describe,
      });

      dispatch(addProducts(response));
      setLoadingStatus(true);
      setTimeout(() => onClose(), 800);
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
            <form onSubmit={CreateProduct}>
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
                <input type="text" ref={nameFill} id="name" />
              </div>
              <div>
                <label htmlFor="price">Preço:</label>
                <input type="number" ref={precoFill} id="price" />
              </div>
              <div>
                {/* <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    // value={age}
                    // onChange={handleChange}
                    label="Age"
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl> */}
                <label htmlFor="category">Categoria:</label>
                <select id="category" ref={categoryFill}>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="desc">Descrição:</label>
                <textarea id="desc" ref={describeFill}></textarea>
              </div>
              <div>
                <BlueButton type="submit" startIcon={<BsBagPlusFill />}>
                  Criar Produto
                </BlueButton>
                <Button onClick={onClose} disableElevation>
                  Cancelar
                </Button>
              </div>
            </form>
          </main>
        )}
      </Container>
    </MainModal>
  );
};

export default index;
