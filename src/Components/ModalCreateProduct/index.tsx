import React, {
  ChangeEvent,
  FormEvent,
  ReactNode,
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

interface Props {
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const [cookies] = useCookies(["user"]);
  const user: UsersData = useSelector(selectUserSigned);
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);
  const [UrlImage, setUrlImage] = useState<string>("");
  const FILE = useRef<HTMLInputElement>(null);
  const defaultURL = "../assets/Images/addFoto.png";

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

  const [age, setage] = useState();
  const [Category, setCategory] = useState("");
  const handleChange = (event: ChangeEvent<HTMLSelectElement>) =>
    setCategory(event.target.value);

  const CreateProduct = async (event: FormEvent) => {
    event.preventDefault();
    alert("Creating Product...");
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
                <input type="text" id="name" placeholder="Nome do Produto" />
              </div>
              <div>
                <label htmlFor="price">Preço:</label>
                <input type="number" id="price" placeholder="1000" />
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
                <select id="category" value={Category} onChange={handleChange}>
                  <option value="Electrônicos">Electrônicos</option>
                  <option value="Medicamentos">Medicamentos</option>
                  <option value="Automôveis">Automôveis</option>
                  <option value="Casas">Casas</option>
                </select>
              </div>
              <div>
                <label htmlFor="desc">Descrição:</label>
                <textarea id="desc" placeholder="Descreva o Produto"></textarea>
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
