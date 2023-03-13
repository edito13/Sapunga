import styled from "styled-components";
import { Dialog } from "@mui/material";

export const MainModal = styled(Dialog)`
  && .MuiDialog-paperWidthSm {
    width: 100%;
    max-width: 400px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 150px;
  width: 100%;
  padding: 1em;

  .Content {
    display: flex;
    flex-direction: column;
    gap: 1em;

    img {
      width: 100%;
      max-width: 170px;
      margin: 0 auto 0.6em;
    }

    p {
      text-align: center;
      font-size: 1.2em;
      color: #333;
    }

    .btns {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 1em;

      button {
        text-transform: capitalize;
        font-size: 1.1em;
      }

      button:first-child {
        color: #d80000;
        padding: 0.3em 0.8em;

        &:hover {
          background: #eee;
        }
      }

      button:last-child {
        background: linear-gradient(#00005b, #00008e);
        color: #fff;
        padding: 0.3em 1.8em;
      }
    }
  }
`;
