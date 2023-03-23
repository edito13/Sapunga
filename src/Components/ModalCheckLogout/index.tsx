import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button } from "@mui/material";
import LoadingProgress from "../LoadingProgress";
import { Container, MainModal } from "./style";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/Users/users.reducer";

interface Props {
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ open, onClose }) => {
  const [, , removeCookie] = useCookies(["user"]);
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingCounter]);

  useEffect(() => {
    if (LoadingCounter <= 2) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  const ToLogout = () => {
    dispatch(logoutUser);
    removeCookie("user");
    localStorage.removeItem("user");
    setLoadingStatus(true);
    setTimeout(() => {
      onClose()
      setTimeout(() => window.location.reload(),500)
    }, 700);
  };

  return (
    <MainModal open={open}>
      <Container>
        {LoadingStatus ? (
          <LoadingProgress />
        ) : (
          <div className="Content">
            <img width={200} src="./assets/Images/logo ori.png" alt="Sapunga" />
            <p>Você tem a certeza que quer terminar sessão?</p>
            <div className="btns">
              <Button onClick={onClose}>Cancelar</Button>
              <Button onClick={ToLogout}>Sim, tenho</Button>
            </div>
          </div>
        )}
      </Container>
    </MainModal>
  );
};

export default index;
