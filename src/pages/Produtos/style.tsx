import styled from "styled-components";

export const ProductsContainer = styled.div`
  padding: 0 2em;
  width: 100%;
  max-width: 97%;
  margin: 0 auto 5em;

  h1 {
    font-size: 1.5em;
    color: #333;
    font-weight: 400;
  }

  .Slider_products + .Slider_products {
    margin-top: 2em;
  }
  /* & > div {
    flex: 1;
    min-width: 230px;
    max-width: 250px;
  } */

  /* @media (min-width: 550px) {
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
  } */
`;
