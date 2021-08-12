import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    font-size: 18px;
    color: white;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom right, #14703c, #000000 50%);
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
  }
`;
