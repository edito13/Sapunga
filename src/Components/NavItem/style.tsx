import styled from "styled-components";

export const MobileMenu = styled.nav`
  background: #000000c9;
  backdrop-filter: blur(10px);
  position: fixed;
  min-height: 100vh;
  width: 100%;
  top: -100%;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;

  button {
    align-self: flex-end;
    margin: 40px 20px 40px 0;

    svg {
      font-size: 1.5em;
      color: #fff;
    }
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    gap: 2em;

    li a {
      color: #fff;
      text-decoration: none;
      font-size: 1.4em;
      margin-bottom: 2px;
    }

    li a.ative {
      border-bottom: 2px solid #7d72b2;
    }
  }

  &.ative {
    top: 0;
  }
`;
