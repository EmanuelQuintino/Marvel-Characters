import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-size: 1.6rem;
    font-family: Arial, Helvetica, sans-serif;
  }
`;