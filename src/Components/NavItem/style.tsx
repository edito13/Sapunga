import styled from "styled-components";

export const MobileMenu = styled.nav`
  background: #000000c9;
  backdrop-filter: blur(10px);
  position: fixed;
  min-height: 100vh;
  width: 100%;
  top: -200%;
  left: 0;
  display: flex;
  flex-direction: column;
  transition: 0.5s ease-in-out;
  z-index: 99999;

  button {
    align-self: flex-end;
    margin: 2.7em 2em 2em 0;

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

  & > div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.5em;
    margin-top: 3em;

    div{
      display: flex;
      border-radius: 50%;
      background: #30285A;
      padding: 8px;
      transition: .3s;
      cursor: pointer;
      
      svg{
        font-size: 1.7em;
        color: #fff;
      }
      
      &:hover{
        background: #fff;
        transform: scale(1.2);
        
        svg{
          color: #30285A;
        }
      }
    }
  }

  &.ative {
    top: 0;
  }
`;
