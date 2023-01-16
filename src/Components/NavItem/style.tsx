import styled from "styled-components";

export const MobileMenu = styled.nav`
  background: #000000c9;
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  height: 100vh;
  top: -200%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 0;
  transition: .5s ease-in-out;
  z-index: 99999;

  button {
    align-self: flex-end;
    margin: 1em 1.5em 0 0;

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

    li:hover a{
      color: #7d72b2;
    }

    li a.ative {
      border-bottom: 2px solid #7d72b2;
    }
  }

  & > div{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-top: 3em;

    div{
      display: flex;
      border-radius: 50%;
      background: #30285A;
      padding: 8px;
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
    left: 0;
  }
`;
