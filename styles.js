import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    margin-bottom: 3rem;
    margin-top: 1rem;
    font-family: system-ui;
  }

  h2 {
margin-left: 2.5rem;  
}
`;
