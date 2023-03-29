import React, { useEffect, useState } from "react";
import LoadingProgress from "../LoadingProgress";
import { Container, MainModal } from "./style";

interface Props {
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ open, onClose }) => {
  const [LoadingCounter, setLoadingCounter] = useState(1);

  useEffect(() => {
    const time = setInterval(
      () => setLoadingCounter((count) => count + 1),
      1000
    );

    return () => clearInterval(time);
  }, [LoadingCounter]);

  useEffect(() => {
    if (LoadingCounter >= 3) onClose();
  }, [LoadingCounter]);
  return (
    <MainModal open={open} onClose={onClose}>
      <Container>
        <LoadingProgress />
      </Container>
    </MainModal>
  );
};

export default index;
