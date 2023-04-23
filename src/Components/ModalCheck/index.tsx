import React, { useEffect, useState } from "react";
import LoadingProgress from "../LoadingProgress";
import { Container, MainModal } from "./style";

interface Props {
  erro: string;
  successMessage: string;
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ erro, successMessage, open, onClose }) => {
  const [LoadingCounter, setLoadingCounter] = useState(1);
  const [LoadingStatus, setLoadingStatus] = useState(true);

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
          <p>{erro ? erro : successMessage}</p>
        )}
      </Container>
    </MainModal>
  );
};

export default index;
