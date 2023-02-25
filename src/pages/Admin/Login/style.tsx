import styled from "styled-components";

export const Container = styled.div`
  background: #f2f2f2;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  img {
    max-width: 300px;
  }

  form {
    width: 100%;
    max-width: 350px;
    margin-top: 3em;

    div {
      margin-bottom: 1em;

      label {
        margin-bottom: 0.2em;
        font-size: 1.2em;
        display: block;
      }

      input {
        width: 100%;
        border: none;
        font-size: 1.2em;
        padding: 0.6em 0.3em;
        border-radius: 4px;
        box-shadow: 0px 0px 3px #0000006c;
        color: #000;
      }
    }

    button {
      margin-top: 1em;
    }
  }
`;
