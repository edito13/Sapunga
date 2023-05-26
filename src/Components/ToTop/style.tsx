import styled from "styled-components";

export const Container = styled.div`
  display: none;
  position: fixed;
  bottom: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 5px;
  z-index: 9999999999;
  cursor: pointer;

  &.active {
    animation: appear 0.4s alternate ease-in-out;
    background: #1d1e20;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      padding: 5px;
      color: #fff;
      font-size: 3.2em;
    }
  }

  @keyframes appear {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
