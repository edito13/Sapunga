import styled from "styled-components";

export const Container = styled.main`
  
  section {
    width: 100%;
    max-width: 1200px;
    margin: 4em auto;
  }

  .Introduce-banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    font-size: 100%;

    .content {
      max-width: 400px;

      p{
        font-size: 1.3em;
        line-height: 25px;
        margin-bottom: 1em;
      }

      p span{
        font-weight: bold;
      }

      button{
        margin-right: 1em;
      }
    }
  }

  @media (min-width: 750px) {
    
    .Introduce-banner {
        flex-direction: row;
        gap: 15%;
        margin-top: 5em;
        
        .content p{
          margin-bottom: 1.5em;
        }
    }

  }
`;

export const ImageContainer = styled.div`
  background: url("./assets/Images/7.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  height: 310px;
  width: 210px;
  border-radius: 12px;
  border: 6px solid #fff;
  position: relative;
  margin: 2em;

  &::after {
    content: "";
    display: block;
    width: inherit;
    height: inherit;
    background: url("./assets/Images/4.jpg") no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 12px;
    position: relative;
    top: -30px;
    left: 30px;
    z-index: -1;
  }

  @media(min-width: 750px){
    height: 350px;
    width: 250px;
  }
`;
