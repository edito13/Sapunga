import styled from "styled-components";

export const Container = styled.main`
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
        margin-bottom: 0.5em;
      }

      p {
        font-size: 1.1em;
        line-height: 1.6em;
        text-align: center;
      }
    }

    form {
      margin: 1em auto;

      fieldset {
        border: none;
        max-width: 500px;
        margin: auto;

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
      .Introduce {
        img {
          max-width: 450px;
        }

        p {
          font-size: 1.2em;
        }
      }

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
