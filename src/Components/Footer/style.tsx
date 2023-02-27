import { Button } from "@mui/material";
import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  background: #0e0e10;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;

  img {
    max-width: 200px;
  }

  & > div {
    width: 100%;
    padding: 3em 2em 1em;
  }

  .ContentContainer {
    padding-bottom: 2em;
    border-bottom: 1px solid #eee;
    color: #fff;

    p {
      font-family: "Roboto Light";
      line-height: 1.5em;
    }

    a {
      color: #fff;
      font-family: "Roboto Light";
      cursor: pointer;
    }

    h4 {
      font-size: 1.3em;
      font-weight: 500;
      margin-bottom: 1em;

      &::after {
        content: "";
        display: block;
        margin-top: 4px;
        height: 1px;
        background: currentColor;
      }
    }

    ul li {
      list-style: inside;

      & + li {
        margin-top: 0.7em;
      }

      &:hover a {
        color: #5959d0;
      }
    }

    & > div {
      max-width: 400px;
      margin: auto;
    }

    & > div + div {
      margin-top: 2em;
    }

    .CompanyInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1em;

      & > p {
        max-width: 300px;
        text-align: center;
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.5em;

        p {
          font-size: 1.2em;
        }

        svg {
          font-size: 1.8em;
        }
      }
    }

    .Contact-us {
      .Newslatter {
        background: #fff;
        border-radius: 25px;
        padding: 0.1em;
        margin: 1em 0;
        display: flex;
        justify-content: space-between;
        flex: 1;
        max-width: 500px;

        input {
          border-radius: 25px;
          padding: 0.4em 0.8em;
          font-size: 1em;
          border: none;
        }

        button {
          margin-left: -2.4em;
        }
      }

      .Contacts {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5em;
        margin-top: 1em;

        div {
          display: flex;
          align-items: center;
          gap: 0.2em;

          svg {
            font-size: 1.2em;
          }
        }
      }

      .social-media {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1em;
        margin-top: 1.5em;

        div {
          display: flex;
          border-radius: 50%;
          background: #fff;
          padding: 8px;
          cursor: pointer;
          transition: 0.4s ease-in-out;

          svg {
            font-size: 1.2em;
            color: #000066;
          }

          &:hover {
            background: #000066;
            transform: scale(1.2);

            svg {
              color: #fff;
            }
          }
        }
      }
    }
  }

  .Copyright {
    text-align: center;
    margin-top: 1em;

    p {
      color: #fff;
      font-family: "Roboto Light";

      span {
        font-weight: 500;
      }
    }

    p + p {
      margin-top: 0.4em;
    }
  }

  @media (min-width: 510px) {
    .Copyright {
      display: flex;
      align-items: center;
      justify-content: center;

      p {
        padding: 0.5em;

        &:first-child {
          border-right: 1px solid #fff;
        }
      }

      p + p {
        margin-top: 0;
      }
    }
  }

  @media (min-width: 700px) {
    .ContentContainer {
      display: flex;
      justify-content: space-between;
      gap: 1em;
      flex-wrap: wrap;

      & > div {
        margin: 0;
      }

      & > div:first-child {
        max-width: 300px;
      }

      & > div:nth-child(2),
      & > div:nth-child(3) {
        max-width: 250px;
      }

      & > div:last-child {
        max-width: 400px;
        min-width: 250px;
      }

      .Contact-us .Contacts {
        flex-direction: row;
      }
    }
  }
`;

export const SendButton = styled(Button)`
  && {
    background: linear-gradient(#2828c4, #000066);
    color: #fff;
    padding: 8px 20px;
    text-transform: unset;
    font-size: 1em;
    font-weight: 400;
    border-radius: 25px;

    svg {
      font-size: 1em;
    }
  }
`;
