import styled from "styled-components";

export const MobileMenu = styled.nav`
  background: #000000c9;
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  height: 100%;
  top: -200%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: 0.5s ease-in-out;
  z-index: 99999;

  button {
    align-self: flex-end;
    margin: 2.5em 1.5em 0 0;

    svg {
      font-size: 1.3em;
      color: #fff;
    }
  }

  ul {
    display: flex;
    align-items: center;
    flex-direction: column;
    align-self: center;
    justify-self: center;
    gap: 1.5em;

    li a {
      color: #fff;
      text-decoration: none;
      font-size: 1.2em;
      margin-bottom: 2px;
    }

    li:hover,
    li.active a {
      color: #2828c4;
    }

    li.active a::after {
      content: "";
      display: block;
      height: 1px;
      background: currentColor;
      width: 80%;
      margin: 0.3em auto 0;
    }
  }

  & > div {
    & > div:first-child {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;

      a {
        display: flex;
        align-items: center;
        gap: 0.3em;
        color: #fff;
        font-size: 1.2em;
        padding: 0.3em 0.5em;

        div {
          background: #000066;
          padding: 0.3em;
          border-radius: 50%;
          display: flex;
          align-items: center;

          svg {
            color: #fff;
          }
        }
      }
    }
  }

  .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin: 1em 0 3em;

    div {
      display: flex;
      border-radius: 50%;
      background: #000066;
      padding: 8px;
      cursor: pointer;

      svg {
        font-size: 1.5em;
        color: #fff;
      }

      &:hover {
        background: #fff;
        transform: scale(1.2);

        svg {
          color: #000066;
        }
      }
    }
  }

  &.ative {
    top: 0;
    left: 0;
  }
`;
