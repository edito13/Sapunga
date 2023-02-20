import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 4em 5%;
  padding: 0 2em;
  max-width: 1200px;
  margin: 0 auto 5em;

  & > div {
    flex: 1;
    min-width: 230px;
    max-width: 250px;
  }

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1050px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    padding: 0;
  }
`;
