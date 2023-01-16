import styled from "styled-components";

interface props {
  src: string;
}

export const Container = styled.main`
  .services section {
    width: 100%;
    padding: 4em;
    min-height: 70vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;

    .content {
      max-width: 60%;

      h3 {
        font-family: "Poppins";
        font-size: 2.7em;
        color: #707070;
        font-weight: 500;
        margin-bottom: 0.5em;
      }

      p {
        color: #707070;
        line-height: 1.5em;
        font-size: 1.3em;
      }
    }
  }

  .services > :nth-child(odd) {
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
  }
`;

export const ImgService = styled.div(
  ({ src }: props) => `
  background: url('./assets/Images/backgrounds/${src}.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  width: 100%;
  max-width: 330px;
  height: 70vh;
  border-radius: 28px;
`
);
