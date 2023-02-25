import styled from "styled-components";

export const Header = styled.header`
  background: url("./assets/Images/1.jpg") no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
  height: 80vh;

  & > div {
    background: linear-gradient(to bottom, #000000af 80%, transparent);
    height: 100%;
    width: 100%;
    color: #fff;

    & > h1 {
      font-family: "Nunito";
      font-size: 4em;
      letter-spacing: 5px;
      font-weight: 600;
      text-align: center;
      margin-top: 2em;
    }
    p {
      text-align: center;
      font-size: 1.1em;
    }

    & > div {
      display: flex;
      justify-content: center;
      margin-top: 2em;
    }
  }

  @media (min-width: 500px) {
    height: 90vh;

    & > div > h1 {
      font-size: 5em;
      margin-top: 1.8em;
    }

    & > div p {
      font-size: 1.2em;
    }
  }
`;
