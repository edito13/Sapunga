import styled from "styled-components";

export const Container = styled.main`
  .main {
    max-width: 1000px;
    margin: auto;
    padding: 0 1.5em;

    .Introduce {
      margin-bottom: 2em;
      img {
        max-width: 400px;
        margin: auto;
      }

      p {
        font-size: 1em;
        line-height: 1.6em;
      }
    }

    form {
      margin: 1em auto;

      fieldset {
        border: none;

        caption {
          padding-bottom: 0.5em;
          display: block;
          text-align: left;
          font-size: 1.3em;
          color: #444;
          border-bottom: 1px solid #ccc;
        }

        input,
        textarea {
          border: none;
          border: 1px solid #ccc;
          border-radius: 5px;
          padding: 0.6em 0.8em;
          font-size: 1.2em;
          width: 100%;
          margin-top: 1.5em;
          color: #444;
        }

        input::placeholder,
        textarea::placeholder {
          color: #ccc;
          font-family: "Roboto Light";
        }

        input:last-child {
          margin-bottom: 1em;
        }
      }

      fieldset:first-child {
        margin-bottom: 2em;
      }

      & > div:last-child {
        display: flex;
        justify-content: center;
        margin-top: 4em;
      }
    }

    @media (min-width: 800px) {
      form {
        margin-bottom: 5em;

        .content {
          display: flex;
          justify-content: center;
          gap: 10%;

          fieldset {
            max-width: 500px;
            flex: 1;
          }

          fieldset + fieldset {
            margin-top: 0;
          }
        }
      }
    }
  }
`;
