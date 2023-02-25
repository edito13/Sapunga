import React, { useEffect, useState } from "react";
import LoadingProgress from "../LoadingProgress";
import { BlueButton } from "../BlueButton/style";
import { Container, MainModal } from "./style";

interface Props {
  erro: string;
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ erro, open, onClose }) => {
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
    if (LoadingCounter <= 5) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);

  return (
    <MainModal open={open} onClose={onClose}>
      <Container>
        {LoadingStatus ? (
          <LoadingProgress />
        ) : (
          <p>{erro ? erro : "Seu login foi feito com sucesso"}</p>
        )}
      </Container>
    </MainModal>
  );
};

export default index;
