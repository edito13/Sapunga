import { Button } from "@mui/material";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #0e0e10;
  padding: 0 2em;

  img {
    max-width: 200px;
  }

  @media (min-width: 750px) {
    .ContentContainer {
      display: flex;
      justify-content: space-between;
      padding: 2em 0;
      border-bottom: 1px solid #eee;
      color: #fff;

      p {
        font-family: "Roboto Light";
        line-height: 1.5em;
      }

      a {
        color: #fff;
        font-family: "Roboto Light";
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

        &:hover {
          li {
            transform: scale(1.2);
          }
          a {
            color: #7d72b2;
          }
        }
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
        & > p {
          max-width: 300px;

          span {
            font-weight: 500;
          }
        }

        .Newslatter {
          background: #fff;
          border-radius: 25px;
          padding: 0.1em;
          margin: 1em 0;
          display: flex;
          justify-content: space-between;

          input {
            border-radius: 25px;
            padding: 0.4em 0.8em;
            font-size: 1em;
            border: none;
          }
        }

        .Contacts,
        .Contacts div {
          display: flex;
          align-items: center;
        }

        .Contacts {
          gap: 1em;

          div {
            gap: 0.2em;

            svg {
              font-size: 1.2em;
            }
          }
        }
      }
    }
  }

  .Copyright {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;

    p {
      color: #fff;
      font-family: "Roboto Light";
      padding: 0.5em 0.8em;

      span {
        font-weight: 500;
      }
    }

    p:first-child {
      border-right: 1px solid #fff;
    }
  }

  .social-media {
    display: flex;
    align-items: center;
    gap: 1em;
    margin-top: 1.5em;

    div {
      display: flex;
      border-radius: 50%;
      background: #fff;
      padding: 8px;
      cursor: pointer;

      svg {
        font-size: 1.2em;
        color: #30285a;
      }

      &:hover {
        background: #30285a;
        transform: scale(1.2);

        svg {
          color: #fff;
        }
      }
    }
  }
`;

export const SendButton = styled(Button)`
  && {
    background: linear-gradient(#4d466f, #221c3e);
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
