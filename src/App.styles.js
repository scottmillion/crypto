import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
  }
  body {
    font-size: 18px;
    color: ${props => props.theme.mainFont};
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
  }
`;
