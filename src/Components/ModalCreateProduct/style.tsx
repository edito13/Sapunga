import styled from "styled-components";
import { Dialog } from "@mui/material";

interface Props {
  url: string;
}

export const MainModal = styled(Dialog)`
  && .MuiDialog-paperWidthSm {
    width: 100%;
    max-width: 400px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  width: 100%;

  main {
    form {
      div {
        padding: 0 1em;

        label {
          display: block;
          font-size: 1.1em;
          margin-bottom: 0.2em;
        }

        input,
        textarea {
          width: 100%;
          border: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          font-size: 1em;
          padding: 0.4em 0.7em;
        }

        & + div {
          margin-top: 1em;
        }
      }

      div:first-child {
        padding: 0;

        label {
          cursor: pointer;
        }

        input {
          display: none;
        }
      }

      div:nth-child(5) {
        padding: 1em;
        display: flex;
        align-items: center;
        justify-content: space-between;

        button:first-child {
          padding: 0.2em 0.7em;
        }

        button:last-child {
          text-transform: capitalize;
          font-weight: 400;
          color: #333;
        }
      }
    }
  }
`;

export const ImgProduct = styled.div`
  background: url("${({ url }: Props) => url}") no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 200px;
`;
