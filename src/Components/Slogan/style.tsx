import styled from 'styled-components';

export const SloganContainer = styled.div`
  background: url('./assets/Images/8.jpg')no-repeat;
  background-size: cover;
  background-position: center;

  div {
    background: linear-gradient(to bottom, #00000094 90%, transparent);
    padding: 2em 0;
    color: #fff;
    
    p:first-child {
        font-size: 1.5em;
        text-align: center;
        margin-bottom: .2em;
        font-family: 'Poppins';
    }
    
    p:last-child {
        font-size: .9em;
        text-align: center;
        font-family: 'Poppins';

        span{
            font-weight: bold;
        }
    }
  }

  @media(min-width: 500px){
    div p:first-child {
      font-size: 1.8em;
    }

    div p:last-child {
      font-size: 1em;
    }
  }

  @media(min-width: 800px){
    div p:first-child {
      font-size: 2em;
    }

    div p:last-child {
      font-size: 1.3em;
    }
  }

`;