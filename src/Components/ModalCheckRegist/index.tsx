import React, { useEffect, useState } from "react";
import LoadingProgress from "../LoadingProgress";
import { Container, MainModal } from "./style";

interface Props {
  open: boolean;
  onClose: () => void;
  erro: string | null;
}

const index: React.FC<Props> = ({ open, erro, onClose }) => {
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
    if (LoadingCounter <= 2) setLoadingStatus(true);
    else setLoadingStatus(false);
  }, [LoadingCounter]);
  return (
    <MainModal open={open} onClose={onClose}>
      <Container>
        {LoadingStatus ? (
          <LoadingProgress />
        ) : (
          <p>{erro ? erro : "Sua conta foi criada com sucesso!"}</p>
        )}
      </Container>
    </MainModal>
  );
};

export default index;
