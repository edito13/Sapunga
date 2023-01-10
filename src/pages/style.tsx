import styled from 'styled-components';

export const Header = styled.header`
  background: url('./assets/Images/1.jpg')no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
  height: 80vh;
  
  & > div{
    background: linear-gradient(to bottom, #000000af 80%, transparent);
    height: 100%;
    width: 100%;
  }
`;