import { createGlobalStyle } from 'styled-components';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default createGlobalStyle`



  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #app {
    width: 100%;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: #F0F0F5;
  }

  body, input, button {
    font: 16px Montserrat, sans-serif;
  }

  #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  button {
    cursor: pointer;
  }

`;
