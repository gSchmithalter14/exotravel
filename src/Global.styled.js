import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
      box-sizing: border-box;
      font-family: sans-serif;
      font-weight: 300;
      margin: 0;
      padding: 0;
  }

  body {
    margin: 10px auto 0px;
    min-height: 100vh;
    width: 60%;
    background-color: ${(props) => props.theme.light};
    @media screen and (max-width: 600px) {
      width: 95%;
    }
  }

`;
