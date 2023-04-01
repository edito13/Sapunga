import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useCookies } from "react-cookie";
import { useSelector, useDispatch } from "react-redux";
import { UsersData } from "../../interfaces";
import LoadingProgress from "../LoadingProgress";
import { Container, ImgProduct, MainModal } from "./style";
import { selectUserSigned } from "../../store/Users/users.reducer";
import api, { BaseUrl } from "../../assets/api";
import { BlueButton } from "../BlueButton/style";
import { BsBagPlusFill } from "react-icons/bs";
import { Button } from "@mui/material";

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
                <input type="text" id="name" />
              </div>
              <div>
                <label htmlFor="price">Preço:</label>
                <input type="number" id="price" />
              </div>
              <div>
                <label htmlFor="desc">Descrição:</label>
                <textarea id="desc"></textarea>
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
