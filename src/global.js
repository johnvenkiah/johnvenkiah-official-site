// global.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background: ${({ theme }) => theme.primaryDark};
    color: ${({ theme }) => theme.primaryLight};
    display: flex;
    font-family: 'Inter', sans-serif;
    height: 100vh;
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-family: 'Bebas Neue', cursive;
    text-transform: uppercase;
    font-size: 2.2rem;
    margin: 1rem 0;
  }

  h1, h2, h3, h4, h5, h6, p, span, a, li {
    text-shadow: 0 0 15px black;
  }
  `;
