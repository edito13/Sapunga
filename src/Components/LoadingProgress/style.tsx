import styled from "styled-components";
import { CircularProgress } from "@mui/material";

export const Container = styled.div`
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.4em;

  p {
    font-size: 1.2em;
  }
`;

export const Loading = styled(CircularProgress)`
  && {
    color: #000066;
  }
`;
