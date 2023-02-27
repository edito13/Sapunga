import styled from "styled-components";

export const Container = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.3em;
  gap: 3em;
  margin-top: 3em;

  .text {
    h3 {
      text-align: center;
      font-size: 1.8em;
      margin-bottom: 0.4em;
    }

    p {
      width: 100%;
      max-width: 520px;
      font-size: 1.1em;
      line-height: 1.6em;
    }
  }

  img {
    max-width: 300px;
  }

  @media (min-width: 750px) {
    flex-direction: row;
    justify-content: space-between;
    max-width: 80%;
    margin: 3em auto 0;
    padding: 0;

    .text {
      h3,
      p {
        text-align: left;
      }
    }
    .text p {
      text-align: left;
      max-width: 520px;
    }
  }

  @media (min-width: 1000px) {
    .text p {
      font-size: 1.2em;
      line-height: 1.8em;
      max-width: 600px;
    }
  }
`;
