import styled from "styled-components";

export const Container = styled.main`
  section {
    width: 100%;
    max-width: 1200px;
    margin: 8em auto;
  }

  .Introduce-banner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5%;
    font-size: 100%;
    margin-top: 5em;

    .content {
      max-width: 400px;

      p {
        font-size: 1.3em;
        line-height: 25px;
        margin-bottom: 1em;
      }

      p span {
        font-weight: bold;
      }

      button {
        margin-right: 1em;
      }
    }
  }

  section:nth-child(3) {
    margin-bottom: 8em;

    p {
      background: #eee;
      padding: 2em 2em 8em;
      line-height: 25px;
    }
  }

  section:nth-child(4) {
    margin-top: 10em;
    max-width: 100%;

    h3 {
      font-size: 1.8em;
      text-transform: uppercase;
    }

    h3::after {
      content: "";
      display: block;
      height: 2px;
      background: currentColor;
      width: 100%;
      margin-top: 4px;
    }

    .agricultura {
      padding: 2em;
      background: url("./assets/Images/Grupo 18.png");
      background-size: cover;
      background-position: 48%;
      min-height: 95vh;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;

        h3 {
          color: #42c713;
        }
      }
    }

    .grafica {
      padding: 2em;
      background: url("./assets/Images/Grupo 19.png");
      background-size: cover;
      background-position: 55%;
      min-height: 95vh;

      .content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;

        h3 {
          color: #7d72b2;
        }
      }
    }
  }

  @media (min-width: 750px) {
    .Introduce-banner {
      flex-direction: row;
      gap: 15%;
      margin-top: 5em;

      .content p {
        margin-bottom: 1.5em;
      }
    }

    section:nth-child(3) {
      .content {
        margin-top: 3em;
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 1200px;

        p {
          max-width: 400px;
          padding-bottom: 2em;
          margin-right: -3em;
          position: relative;
          z-index: 99999;
          border-radius: 9px;
        }
      }
    }

    section:nth-child(4){
      .agricultura{
        background-position: 30%;
      }
      .grafica{
        background-position: 60%;
      }
    }
  }

  @media (min-width: 800px){

  }
`;

export const ImageContainer = styled.div`
  background: url("./assets/Images/7.jpg") no-repeat;
  background-position: center;
  background-size: cover;
  height: 310px;
  width: 250px;
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

  @media (min-width: 750px) {
    height: 350px;
    width: 290px;
  }
`;

export const ImgDescribe = styled.div`
  background: url("./assets/Images/15.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 400px;
  position: relative;

  &::before {
    content: "";
    background: url("./assets/Images/13.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    border: 10px solid #42c713;
    border-radius: 50%;
    width: 210px;
    height: 210px;
    top: -7em;
    animation: animationLine 3s linear alternate infinite;
  }
  &::after {
    content: "";
    background: url("./assets/Images/14.jpg") no-repeat;
    background-size: cover;
    background-position: center;
    position: absolute;
    border: 10px solid #42c713;
    animation: animationLine 3s linear alternate-reverse infinite;
    border-radius: 50%;
    width: 210px;
    height: 210px;
    bottom: -7em;
  }

  @media (min-width: 750px) {
    border-radius: 9px;
    max-width: 400px;
    min-height: 600px;

    &::before {
      width: 170px;
      height: 170px;
      border-width: 6px;
      top: -5em;
    }
    &::after {
      width: 170px;
      height: 170px;
      border-width: 6px;
      bottom: -5em;
    }
  }

  @keyframes animationLine {
    from {
      right: 52%;
    }
    to {
      right: 0;
    }
  }
`;
