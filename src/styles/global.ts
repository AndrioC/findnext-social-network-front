import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  :root {
    --background: #F5F2EA;
    --white: #FFFFFF;
    --black: #000000;
    
    --grey-100: #ECECEC;
    --grey-200: #BEBABA;

    --peach-100: #FDC886;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
      height: 100%;
  }

  body {
    background: var(--background);
  }

  *, button, input {
      font-family: 'Roboto', sans-serif;
      border: 0;
      outline: 0;
  }

  button {
      cursor: pointer;
  }

`;
