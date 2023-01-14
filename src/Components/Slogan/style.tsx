import styled from 'styled-components';

export const SloganContainer = styled.div`
  background: url('./assets/Images/8.jpg')no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  

  div {
    background: linear-gradient(#000000d1, transparent);
    padding: 2.5em 0;
    color: #fff;
    
    p:first-child {
        font-size: 2.5em;
        text-align: center;
        margin-bottom: .2em;
        font-family: 'Poppins';
    }
    
    p:last-child {
        font-size: 1.4em;
        text-align: center;
        font-family: 'Poppins';

        span{
            font-weight: bold;
        }
    }
  }
`;