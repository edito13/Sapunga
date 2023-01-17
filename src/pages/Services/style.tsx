import styled from "styled-components";

interface props {
  src: string;
}

export const Container = styled.main`
  .services section {
    width: 100%;
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    padding: 2em;

    .content {
      h3 {
        font-family: "Poppins";
        font-size: 2em;
        color: #707070;
        font-weight: 500;
        margin: 0.5em 0;
        text-align: center;
      }

      p {
        color: #707070;
        line-height: 1.5em;
        font-size: 1.3em;
      }
    }

  }

  .services > :nth-child(odd) {
    flex-direction: column-reverse;
  }

  /* .services > :nth-child(odd) {
    display: flex;
    justify-content: flex-start;
  }

  .services > section:nth-child(1) {
    background: url("./assets/Images/backgrounds/4.png") no-repeat;
    background-position: right;
    background-size: cover;
    background-attachment: local;
  }

  .services > section:nth-child(3) {
    background: url("./assets/Images/backgrounds/5.png") no-repeat;
    background-position: right;
    background-size: cover;
    background-attachment: scroll;
  } */
`;

export const ImgService = styled.div(
  ({ src }: props) => `
  background: url('./assets/Images/backgrounds/${src}.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
  transform: scale(1.1);
  width: 100%;
  max-width: 330px;
  height: 40vh;
  border-radius: 28px;
`
);
