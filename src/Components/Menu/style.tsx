import styled from "styled-components";

export const Menu = styled.nav`
  background: #ffffffa2;
  backdrop-filter: blur(5px);
  padding: 10px 30px;
  width: 100%;
  max-width: 80%;
  margin: auto;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 img {
    max-width: 70px;
  }

  button {
    display: none;

    svg {
      font-size: 1.5em;
      color: #fff;
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 0.5em;

    li {
      a {
        display: block;
        font-size: 1.1em;
        color: #000;
        padding: 10px 20px;
        transition: 0.4s ease-in-out;
      }

      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0;
        margin: auto;
        background: #7d72b2;
        transition: 0.5s ease-in-out;
      }
    }

    li:hover {
      a {
        color: #7d72b2;
      }

      &::after {
        width: 70%;
      }
    }
  }

  @media (max-width: 500px) {
    max-width: 90%;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    ul {
      display: none;
    }

    h1 img {
      max-width: 60px;
    }
  }
`;
