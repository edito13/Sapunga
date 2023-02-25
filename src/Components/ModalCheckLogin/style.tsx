import styled from "styled-components";
import { Dialog } from "@mui/material";

export const MainModal = styled(Dialog)`
  && .MuiDialog-paperWidthSm {
    width: 100%;
    max-width: 40vw;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 100%;
`;
