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
    font-family: 'Open Sans', sans-serif;
    height: 100vh;
    text-rendering: optimizeLegibility;
  }

  h1 {
    font-size: 2.4rem;
    margin: .6rem 0;
    text-shadow: none;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Barlow Condensed', sans-serif;
    text-transform: uppercase;
  }

  h2, h3, h4, h5, h6, p, span, a, li {
    text-shadow: 0 0 15px black;
  }

  a {
    color: ${({ theme }) => theme.primaryLight};
    text-decoration: none;
  }
  `;
