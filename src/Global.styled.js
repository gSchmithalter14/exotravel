import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      color: #333;
      font-family: sans-serif;
      font-weight: 300;
      margin: 0;
      padding: 0;
  }

  body {
    margin: 0 auto;
    min-height: 100vh;
    width: 80%;
    background-color: ${(props) => props.theme.main};
    @media screen and (max-width: 600px) {
      width: 95%;
    }
  }

  h1, h2 {
    margin-bottom: 1rem;
    letter-spacing: 5px;
  }
`;
