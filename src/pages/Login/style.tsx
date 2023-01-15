import styled from 'styled-components';

export const Container = styled.main`
  background: url('./assets/Images/16.jpg')no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
  height: 100vh;

  & > div {
    background: #000000af;
    backdrop-filter: blur(4px);
    height: 100%;
    width: 100%;
    padding: 3em 0;
    color: #fff;
    display: flex;
    justify-content: space-between;



    form {
        padding: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1em;
        max-width: 500px;
        background: #ffffff6f;
        border-radius: 5px;
        backdrop-filter: blur(2px);
    }
  }
`;