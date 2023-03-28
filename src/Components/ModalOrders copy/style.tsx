import styled from "styled-components";
import { Dialog } from "@mui/material";

interface Props {
  url: string;
}

export const MainModal = styled(Dialog)`
  && .MuiDialog-paperWidthSm {
    width: 100%;
    max-width: 450px;
  }
`;

export const Container = styled.div`
  padding: 1.7em 1.7em 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  width: 100%;

  .title {
    div {
      display: flex;
      align-items: center;
      justify-content: center;
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
      width: 20%;
      margin: 0.6em auto 0;
      background: #333;
    }
  }

  .items {
    margin-top: 1em;

    & > div {
      display: flex;
      justify-content: space-between;
      align-items: center;

      & > div {
        display: flex;
        align-items: center;
        gap: 0.8em;

        div p:last-child {
          font-size: 0.8em;
        }
      }

      button {
        justify-self: center;

        svg {
          font-size: 0.8em;
        }
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .total {
      display: flex;
      align-items: center;
      gap: 0.5em;

      p:first-child {
        font-weight: bold;
      }
    }
  }
`;

export const ImgProduct = styled.div`
  background: url("${({ url }: Props) => url}") no-repeat;
  background-position: center;
  background-size: cover;
  padding: 25px;
  border-radius: 50%;
`;
