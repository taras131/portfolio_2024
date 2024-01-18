import {createGlobalStyle} from "styled-components"


export const GlobalStyle = createGlobalStyle`
  body {
    color: red;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  *, *:after, *:before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 123.6%;
  }

  ul {
    list-style-type: none;
  }

  a {
    color: white;
    text-decoration: none;
  }
`