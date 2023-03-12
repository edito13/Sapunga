import styled from "styled-components";

interface Props {
  image: number;
}

export const Container = styled.div`
  height: 100%;
  width: 100%;
  background: url("./assets/Images/${({ image }: Props) => image}.jpg")
    no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;

  & > div {
    width: 100%;
    height: 100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #000000af 80%, transparent);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    & > h1 {
      font-family: "Nunito";
      font-size: 4em;
      letter-spacing: 5px;
      font-weight: 600;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 1.1em;
    }

    & > div {
      display: flex;
      justify-content: center;
      margin-top: 1.5em;
    }
  }

  @media (min-width: 500px) {
    & > div {
      h1 {
        font-size: 5em;
      }
      p {
        font-size: 1.2em;
      }
    }
  }
`;
