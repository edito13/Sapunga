import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: #f2f2f2;

  main {
    flex: 1;

    .introduce {
      display: flex;
      gap: 1em;
      align-items: center;
      width: 100%;
      margin-top: 3em;

      img {
        max-width: 220px;
      }

      .text {
        h3 {
          font-weight: 400;
          font-size: 1.9em;
          color: #000066;
        }

        p {
          font-size: 1.2em;
        }
      }
    }
  }
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.4em;
  color: #000066;

  svg {
    font-size: 1.8em;
  }

  h1 {
    font-weight: 500;
    font-size: 1.7em;
  }
`;
