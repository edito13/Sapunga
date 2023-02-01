import styled from "styled-components";

export const TitlePages = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6em;
  margin: 4em 0 4em 1em;
  padding: 0.8em;
  border-left: 2px solid #000;

  svg {
    font-size: 2em;
    color: #000;
  }

  h1 {
    font-size: 1.8em;
    font-weight: 500;
  }

  @media (min-width: 800px) {
    margin-left: 1em;
  }
`;
