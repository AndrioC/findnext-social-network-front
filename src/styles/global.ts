import { createGlobalStyle } from "styled-components";
import "antd/dist/antd.min.css";

export default createGlobalStyle`

  :root {
    --background: #F5F2EA;
    --white: #FFFFFF;
    --black: #000000;
    
    --grey-50: #F6F6F6;
    --grey-100: #ECECEC;
    --grey-120: #F0F0F0;
    --grey-150: #E6E8EA;
    --grey-200: #BEBABA;

    --peach-100: #FDC886;

    --blue-50: #575BCC;
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
    background: var(--grey-150);
  }

  *, button, input {
      font-family: 'Roboto', sans-serif;
      border: 0;
      outline: 0;
  }

  button {
      cursor: pointer;
  }

  ::-webkit-scrollbar {
    width: 1px;
  }

`;
