import styled from "styled-components";

interface Props {}

export const Container = styled.div`
  padding: 2em;
  width: 100%;
  background: #f2f2f2;

  .Header {
    margin-bottom: 1.5em;

    .SearchButton {
      display: flex;
      align-items: center;
      background: #fdfdfd;
      border-radius: 4px;
      box-shadow: 0px 0px 4px #0000002e;
      transition: 0.4s ease-in-out;

      input {
        border: none;
        border-radius: 4px;
        background: #fdfdfd;
        font-size: 1.1em;
        padding: 8px 11px;
        flex: 1;
      }

      button {
        padding: 6px 0;
        font-size: 1.6em;
      }

      &:hover {
        background: #fff;

        input {
          background: #fff;
        }
      }
    }

    & > button {
      padding: 0.2em 0.7em;
      font-size: 1.1em;
      border-radius: 4px;
    }
  }
`;
