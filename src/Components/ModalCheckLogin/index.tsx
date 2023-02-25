import React from "react";
import LoadingProgress from "../LoadingProgress";
import { BlueButton } from "../BlueButton/style";
import { Container, MainModal } from "./style";

interface Props {
  open: boolean;
  onClose: () => void;
}

const index: React.FC<Props> = ({ open, onClose }) => {
  return (
    <MainModal open={open} onClose={onClose}>
      <Container>
        <LoadingProgress />
      </Container>
    </MainModal>
  );
};

export default index;
