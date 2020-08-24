import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    outline: none !important;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }
`;
