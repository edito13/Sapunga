import { Button } from "@mui/material";
import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #0e0e10;
  padding: 0 2em;

  img {
    max-width: 200px;
  }

  .ContentContainer {
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding: 3em 0;
    border-bottom: 1px solid #eee;
    color: #fff;

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
        padding: .1em;
        margin: 1em 0;
        display: flex;
        justify-content: space-between;
        max-width: 300px;

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
    }
  }

  .Copyright {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    padding: 1em;

    p {
      color: #fff;
      font-family: "Roboto Light";

      span {
        font-weight: 500;
      }
    }
  }

  @media (min-width: 800px) {
    .ContentContainer {
      flex-direction: row;
      justify-content: space-between;
      gap: 1em;
      flex-wrap: wrap;

      .Contact-us .Contacts {
        flex-direction: row;
      }
    }

    .Copyright{
      flex-direction: row;
      
      p {
        padding: .5em;
        
        &:first-child {
          border-right: 1px solid #fff;
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
