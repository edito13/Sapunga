import styled from "styled-components";

interface props {
  src: string;
}

export const Container = styled.main`
  overflow-x: hidden;

  .services {
    margin: 2em 0 4em;

    section {
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
          font-size: 1.6em;
          color: #707070;
          font-weight: 500;
          margin: 0.5em 0;
          text-align: center;
        }

        p {
          color: #707070;
          line-height: 1.5em;
          font-size: 1.1em;
        }
      }
    }
  }

  .services > :nth-child(odd) {
    flex-direction: column-reverse;
  }

  @media (min-width: 800px) {
    .services section,
    .services > :nth-child(odd) {
      flex-direction: row;
      gap: 8%;

      .content {
        max-width: 60%;

        h3 {
          font-size: 2.2em;
          text-align: left;
        }

        p {
          line-height: 1.5em;
          font-size: 1.3em;
        }
      }
    }
  }

  @media (min-width: 1000px) {
    .services section,
    .services > :nth-child(odd) {
      justify-content: center;

      .content {
        max-width: 55%;

        p {
          line-height: 1.8em;
          font-size: 1.2em;
        }
      }
    }
  }
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
  
  
  @media(min-width: 800px){
    background-attachment: initial;
    height: 55vh;
  }
  
  @media (min-width: 1200px) {
    height: 60vh;
  }
`
);
