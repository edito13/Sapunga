import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  max-width: 250px;
  background: #1d1e20;
  padding: 2em 1.5em;

  nav ul li + li {
    border-top: 1px solid #fff;
  }
`;

export const ListItem = styled(Button)`
  && {
    color: #fff;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 1.1em;
    justify-content: flex-start;
    padding: 0.7em 0;
  }
`;
