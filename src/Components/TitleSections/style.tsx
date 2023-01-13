import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;

  h2 {
    font-size: 1.7em;
    text-transform: uppercase;
    font-weight: bold;
    color: #30285a;
    margin-bottom: 2em;
  }

  h2::after {
    content: "";
    display: block;
    height: 3px;
    background: #30285a;
    width: 60%;
    margin: 8px auto 0;
    border-radius: 10px;
  }

  @media(min-width: 750px){
    h2{
      margin-bottom: 4em;
    }
  }
`;
