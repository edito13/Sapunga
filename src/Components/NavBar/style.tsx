import styled from "styled-components";
import { Button } from "@mui/material";

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  max-width: 260px;
  background: #f2f2f2;
  padding: 2em;

  img {
    max-width: 200px;
    margin-bottom: 4em;
  }
`;

export const ListItem = styled(Button)`
  && {
    color: #000;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 1.1em;
    gap: 0.3em;
    justify-content: flex-start;
    padding: 0.5em 0 0.5em 1em;
    transition: all.0.3s ease-in-out;
    border-left: 5px solid transparent;
  }

  &&.active {
    border-left-color: #000066;
    background: #013ee728;
    color: #000066;
  }
`;
