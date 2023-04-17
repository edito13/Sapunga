import styled from "styled-components";

export const Container = styled.main`
  overflow-x: hidden;

  .main {
    max-width: 1000px;
    margin: auto;
    padding: 0 1.5em;

    .Introduce {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5em;
      margin-bottom: 3em;

      img {
        max-width: 400px;
      }

      h3 {
        color: #444;
        font-size: 1.5em;
        text-align: center;
      }

      p {
        margin-top: 0.5em;
        font-size: 0.5em;
        line-height: 1.6em;
        text-align: center;
      }
    }

    .Introduce + div {
      display: flex;
      gap: 2em;
      margin-bottom: 2em;

      iframe {
        border-radius: 8px;
        width: 100vw;
        height: 100vh;
        max-width: 450px;
        max-height: 300px;
        box-shadow: 0px 0px 3px #00000040;
      }

      form {
        width: 100%;
        max-width: 500px;
        margin: 1em auto;
        color: #444;

        label {
          display: block;
          text-align: left;
          font-size: 1.3em;
          margin-bottom: 0.2em;
        }

        p {
          font-size: 1em;
          font-family: "Roboto Light";
        }

        textarea {
          border: none;
          border: 1px solid #bbbb;
          border-radius: 5px;
          padding: 0.4em;
          font-size: 1.2em;
          width: 100%;
          color: #444;
          margin-top: 1em;
        }

        input::placeholder,
        textarea::placeholder {
          color: #ccc;
          font-size: 1em;
          font-family: "Roboto Light";
        }

        input:last-child {
          margin-bottom: 1em;
        }

        & > div:last-child {
          display: flex;
          justify-content: flex-end;
          margin-top: 1.5em;

          button {
            padding: 6px 40px;
          }
        }
      }
    }

    @media (min-width: 800px) {
      .Introduce {
        img {
          max-width: 450px;
        }

        p {
          font-size: 1.2em;
        }
      }

      .Introduce + div {
        margin-bottom: 5em;
      }
    }

    @media (min-width: 1000px) {
      .Introduce {
        flex-direction: row;
        gap: 6%;

        h3 {
          text-align: left;
          font-size: 1.9em;
        }

        p {
          text-align: left;
        }
      }
    }
  }
`;
