import styled from "styled-components";

export const Text = styled.section`
  max-width: 80%;
  margin: 3em auto 5em;
  padding: 0 2em;

  p {
    font-size: 1.2em;
    line-height: 1.6em;
  }

  p + p {
    margin-top: 1em;
  }

  @media (min-width: 1100px) {
    padding: 0;
  }
`;
