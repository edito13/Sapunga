import styled from "styled-components";

interface Props {}

export const Container = styled.div`
  padding: 0 2em;
  width: 100%;

  .statistic-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    margin-top: 2em;

    .statistic-item {
      flex: 1;
      max-width: 260px;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      gap: 0.3em;
      background: #fdfdfd;
      box-shadow: 0px 0px 20px 2px #00000015;
      padding: 1.5em;
      border-radius: 8px;
      transition: 0.3s ease-in-out;
      cursor: pointer;

      .title {
        color: #333;

        svg {
          font-size: 2.3em;
        }

        p {
          font-size: 1.2em;
          margin-top: 0.3em;
        }
      }

      span {
        font-size: 2em;
        color: #000066;
        font-family: Arial, Helvetica, sans-serif;
      }
    }

    .statistic-item:hover {
      background: #fff;
      transform: scale(1.1);
    }
  }

  .RecentUsers {
    p {
      color: #333;
      font-size: 1.1em;
      margin: 3em 0 0.5em;
    }
  }
`;
