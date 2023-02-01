import styled from "styled-components";

export const Container = styled.main`
  background: url("./assets/Images/16.jpg") no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
  height: 100vh;

  & > div {
    background: #000000af;
    height: 100%;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div:first-child {
      display: none;
    }

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      backdrop-filter: blur(15px);
      background: #00000061;
      padding: 2em;
      gap: 1.5em;
      height: 100%;
      width: 100%;
      max-width: 500px;
      border-radius: 8px;
      border: 3px solid #7d72b2;

      h3 {
        font-weight: 500;
        font-size: 1.8em;
        margin-bottom: 1em;

        &::after {
          content: "";
          display: block;
          height: 1px;
          background: currentColor;
          width: 20%;
          margin-top: 0.2em;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.3em;
        width: 100%;

        div {
          label {
            display: block;
            font-size: 1.2em;
            margin-bottom: 0.3em;
            cursor: pointer;
          }

          input {
            border: none;
            border-radius: 5px;
            padding: 0.5em 0.8em;
            font-size: 1.1em;
            width: 100%;

            &:hover,
            &:focus {
              background: #ffffffa9;
            }
          }
        }

        button {
          margin-top: 0.5em;
        }

        .senhas {
          display: flex;
          gap: 5%;
        }

        p {
          font-weight: 200;
          font-size: 1.1em;

          span {
            font-weight: bold;
          }
        }
      }

      .AccountLink {
        display: block;
        color: #fff;
        margin-top: 1.5em;

        p {
          font-weight: 200;
          font-size: 1.1em;

          span {
            font-weight: bold;
          }
        }
      }

      .or {
        width: 100%;
        max-width: 80%;
        display: flex;
        align-items: center;
        gap: 1em;
        margin: 1em auto;

        hr {
          flex: 1;
        }
      }

      .midiaLogin {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.5em;

        div {
          display: flex;
          align-items: center;
          gap: 0.5em;
          padding: 0.5em;
          border-radius: 5px;
          background: #fff;
          margin-bottom: 1.5em;
          cursor: pointer;
        }

        svg {
          color: #30285a;
        }

        p {
          color: #000;
        }
      }

      p {
        text-align: center;
      }
    }

    @media (min-width: 500px) {
      .content {
        height: auto;
        display: block;
      }
    }

    @media (min-width: 1000px) {
      gap: 5%;

      & > div:first-child {
        display: block;

        img {
          max-width: 300px;
        }

        p {
          font-size: 1.4em;
          max-width: 400px;
          line-height: 1.4em;
          margin: -1em 0 0.7em;
          font-family: "Poppins Light";
        }

        .sociais-media {
          display: flex;
          align-items: center;
          gap: 1em;

          div {
            display: flex;
            border-radius: 50%;
            padding: 8px;
            cursor: pointer;
            background: #30285a;

            svg {
              font-size: 1.6em;
              color: #fff;
            }

            &:hover {
              background: #fff;

              svg {
                color: #30285a;
              }
            }
          }
        }
      }
    }

    @media (min-width: 1250px) {
      gap: 10%;

      & > div:first-child {
        p {
          font-size: 1.6em;
          max-width: 450px;
        }

        img {
          max-width: 400px;
        }
      }
    }
  }
`;
