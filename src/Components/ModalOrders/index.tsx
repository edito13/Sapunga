import React, { useEffect, useState } from "react";
import LoadingProgress from "../LoadingProgress";
import { BlueButton } from "../BlueButton/style";
import { Container, MainModal } from "./style";
import { FaShoppingCart } from "react-icons/fa";

interface Props {
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ open, onClose }) => {
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(false);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingCounter]);

  useEffect(() => {
    if (LoadingCounter <= 3) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  return (
    <MainModal open={open} onClose={onClose}>
      <Container>
        <div className="title">
          <div>
            <FaShoppingCart />
            <h1>Carrinho de Encomendas</h1>
          </div>
        </div>
        {LoadingStatus ? (
          <LoadingProgress />
        ) : (
          <div className="items">
            <p>Nenhum produto foi encomendado ainda.</p>
          </div>
        )}
      </Container>
    </MainModal>
  );
};

export default index;
