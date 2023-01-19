import styled from "styled-components";

export const Container = styled.main`
  background: url("./assets/Images/16.jpg") no-repeat;
  background-attachment: fixed;
  background-position: bottom;
  background-size: cover;
  height: 100vh;

  & > div {
    background: #000000af;
    height: 100%;
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div:first-child {
      display: none;
    }

    .content {
      backdrop-filter: blur(15px);
      background: #00000061;
      padding: 2em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 1.5em;
      height: 100%;
      width: 100%;
      max-width: 500px;
      border-radius: 8px;
      border: 3px solid #7d72b2;

      h3 {
        font-weight: 500;
        font-size: 2em;

        &::after {
          content: "";
          display: block;
          height: 1px;
          background: currentColor;
          width: 20%;
          margin-top: 0.2em;
        }
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 1.5em;
        width: 100%;

        div {
          label {
            display: block;
            font-size: 1.3em;
            margin-bottom: .3em;
            cursor: pointer;
          }

          input {
            border: none;
            border-radius: 5px;
            padding: .5em .8em;
            font-size: 1.2em;
            width: 100%;

            &:hover, &:focus {
              background: #ffffffa9;
            } 
          }
        }

        button {
          margin-top: .5em;
        }

        .senhas {
          display: flex;
          gap: 5%;
        }

        p {
          font-weight: 200;
          font-size: 1.1em;

          span {
            font-weight: bold;
          }
        }

        .sociais-media {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1em;

          div {
            display: flex;
            border-radius: 50%;
            padding: 8px;
            cursor: pointer;
            background: #30285a;

            svg {
              font-size: 1.3em;
              color: #fff;
            }

            &:hover {
              background: #fff;
              transform: scale(1.2);

              svg {
                color: #30285a;
              }
            }
          }
        }
      }

      p {
        text-align: center;
      }
    }

    @media (min-width: 500px) {
      .content {
        height: auto;
      }
    }

    @media (min-width: 1000px) {
      gap: 5%;

      & > div:first-child {
        display: block;

        p {
          font-size: 1.5em;
          max-width: 400px;
          line-height: 1.6em;
          margin-bottom: 1.5em;
          font-family: 'Poppins Light';
          animation: appearsL 1s .3s ease-in-out backwards;
        }
        
        img {
          max-width: 300px;
          animation: appearsL 1s .6s ease-in-out backwards;
        }
        
      }
      
      .content {
        animation: appearsR 1s .5s ease-in-out backwards;
      }
    }
    
    @media (min-width: 1250px) {
      gap: 10%;

      & > div:first-child {

        p {
          font-size: 1.9em;
          max-width: 450px;
        }

        img {
          max-width: 400px;
        }
      }
    }

    @keyframes appearsL {
      from {
        opacity: 0;
        transform: translateX(-50%);
      } to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes appearsR {
      from {
        opacity: 0;
        transform: translateX(28%);
      } to {
        opacity: 1;
        transform: translateX(0);
      }
    }
  }
`;
