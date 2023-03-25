import styled from "styled-components";
import { Button } from "@mui/material";

export const Menu = styled.nav`
  background: #fff;
  padding: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-left: 5px;

    img {
      max-width: 140px;
    }
  }

  & > button {
    order: 4;

    svg {
      color: #333;
      font-size: 1.4em;
    }
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6em;

    .btns {
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        font-size: 1em;
        color: #333;
      }
    }

    .btns + p {
      display: none;
    }
  }

  ul {
    display: none;
  }

  @media (min-width: 600px) {
    padding: 1em 2em;

    & > button {
      display: none;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 0.3em;

      li {
        a {
          display: block;
          font-size: 1.1em;
          color: #000;
          padding: 5px 20px;
          transition: 0.4s ease-in-out;
        }
      }

      li::after {
        content: "";
        display: block;
        height: 2px;
        width: 0;
        margin: auto;
        background: #000066;
        transition: 0.5s ease-in-out;
      }
      li:hover,
      li.active {
        a {
          color: #000066;
        }

        &::after {
          width: 50%;
        }
      }
    }

    & > div {
      .btns + p {
        display: block;
      }
    }

    h1 img {
      max-width: 170px;
    }
  }
`;

export const BtnLogout = styled(Button)`
  && {
    color: #333;

    &:hover {
      background: none;
    }
  }
`;

export const BtnSignin = styled(Button)`
  && {
    padding: .5em;
    text-transform: capitalize;
    font-size: 1.1em;
  }
`;