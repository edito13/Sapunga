import styled from "styled-components";

export const Menu = styled.nav`
  background: #ffffff6f;
  backdrop-filter: blur(5px);
  padding: 7px 15px;
  max-width: 90%;
  margin: auto;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1{
    margin-left: 5px;
    
    img {
      max-width: 70px;
    }
  } 

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 1.5em;
      color: #fff;
    }
  }

  ul {
    display: none;
  }

  @media (min-width: 600px) {
    max-width: 80%;

    button {
      display: none;
    }

    ul {
      display: flex;
      align-items: center;
      gap: .3em;

      li {
        a {
          display: block;
          font-size: 1.1em;
          color: #fff;
          padding: 10px 20px;
          transition: 0.4s ease-in-out;
        }

        &::after {
          content: "";
          display: block;
          height: 2px;
          width: 0;
          margin: auto;
          background: #30285A;
          transition: 0.5s ease-in-out;
        }
      }

      li:hover {
        a {
          color: #30285A;
        }

        &::after {
          width: 70%;
        }
      }
    }

    h1 img {
      max-width: 60px;
    }
  }
`;
