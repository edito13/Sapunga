import styled from "styled-components";

interface props {
  src: string;
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  .introduce {
    & > img:first-child {
      margin: auto;
    }
  }

  .pub {
    max-width: 550px;

    h1 {
      margin-bottom: 0.5em;
      font-size: 1.8em;
      font-weight: 500;
    }

    p {
      font-size: 1em;
    }

    p:nth-child(2) {
      margin-bottom: 0.3em;

      a {
        color: #000066;
      }
    }
  }
`;

export const ContainerProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 500px;
  width: 100%;
  max-width: 400px;
  border-radius: 10px;
  box-shadow: 0px 0px 3px #000000af;

  img {
    height: 300px;
  }

  ul {
    padding-left: 1em;

    li + li {
      margin-top: 0.6em;
    }

    li {
      color: #333;

      p:first-child {
        font-size: 1.1em;
      }
      p:last-child {
        font-size: 0.9em;
      }

      input {
        border: none;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 0.4em 0.7em;
        font-size: 1em;
        margin-top: 0.2em;
      }
    }
  }

  footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1em 1em;

    div {
      display: flex;
      align-items: center;
      gap: 0.3em;

      button {
        padding: 5px 6px;
        background: red;
      }
    }
  }
`;

export const ImgProduct = styled.div`
  background: url("${({ src }: props) => src}") no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 230px;
  border-radius: 10px 10px 0 0;
`;
