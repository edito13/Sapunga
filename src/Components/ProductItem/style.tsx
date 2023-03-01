import styled from "styled-components";

interface props {
  src: string;
}

export const Container = styled.div`
  flex: 1;
  max-width: 260px;
  min-width: 200px;
  overflow-x: hidden;
  box-shadow: 0px 0px 3px #000000b1;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;

  div:nth-child(2) {
    padding-left: 0.4em;

    p {
      font-size: 1.2em;
      color: #444;
    }

    span {
      font-size: 1.5em;
      color: #000066;
    }
  }

  .btns {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button svg {
      font-size: 1.3em;
    }

    div:last-child {
      background: linear-gradient(#1f1faf, #000066);
      border-radius: 10px 0 10px 0px;
      padding: 0.8em;
      align-self: flex-end;
      cursor: pointer;

      svg {
        font-size: 1.3em;
        color: #fff;
      }
    }
  }
`;

export const Imagem = styled.div`
  background: url("${({ src }: props) => src}") no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 200px;
  border-radius: 10px 10px 0 0;
`;
