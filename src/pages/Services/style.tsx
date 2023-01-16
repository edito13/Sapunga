import styled from "styled-components";

export const Container = styled.main`
  .services section {
    padding: 4em;
    min-height: 70vh;
  }

  .services > :nth-child(odd) {
      background-position: right;
      background-size: cover;
    }

  .services > section:nth-child(1) {
    background: url("./assets/Images/backgrounds/4.png") no-repeat;
  }

  .services > section:nth-child(3) {
    background: url("./assets/Images/backgrounds/5.png") no-repeat;
  }
`;
