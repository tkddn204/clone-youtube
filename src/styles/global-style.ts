import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  } 
  html {
    font-size: 10px;
    font-family: 'Roboto', 'Arial', sans-serif;  
  }
  body {
    background-color: white;
    margin: 0;
    overflow-y: scroll;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  button {
    outline: none;
    cursor: pointer;
  }
`;

export default GlobalStyle;