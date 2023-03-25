import styled from "styled-components";
import { Dialog } from "@mui/material";

export const MainModal = styled(Dialog)`
  && .MuiDialog-paperWidthSm {
    width: 100%;
    max-width: 450px;
  }
`;

export const Container = styled.div`
  padding: 1.8em 1em 0;
  min-height: 200px;
  width: 100%;

  & > .items,
  .title > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .title {
    div {
      gap: 0.8em;

      svg {
        font-size: 1.4em;
      }

      h1 {
        font-size: 1.4em;
        font-weight: 500;
      }
    }

    &::after {
      content: "";
      display: block;
      height: 2px;
      width: 25%;
      margin: 0.6em auto 0;
      background: #333;
    }
  }

  .items {
    margin-top: 2em;
  }
`;
