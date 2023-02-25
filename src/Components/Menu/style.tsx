import styled from "styled-components";

export const Menu = styled.nav`
  background: #ffff;
  padding: 1em 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    margin-left: 5px;

    img {
      max-width: 140px;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 1.5em;
      color: #000;
    }
  }

  ul {
    display: none;
  }

  @media (min-width: 600px) {
    button {
      display: none;
    }

    ul {
      display: flex;
      align-items: center;
      gap: 0.3em;

      li {
        a {
          display: block;
          font-size: 1.1em;
          color: #000;
          padding: 5px 20px;
          transition: 0.4s ease-in-out;
        }

        svg {
          color: #000;
        }
      }
    }

    ul:nth-child(3) {
      li::after {
        content: "";
        display: block;
        height: 2px;
        width: 0;
        margin: auto;
        background: #000066;
        transition: 0.5s ease-in-out;
      }
      li:hover,
      li.active {
        a {
          color: #000066;
        }

        &::after {
          width: 50%;
        }
      }
    }

    h1 img {
      max-width: 170px;
    }
  }
`;
