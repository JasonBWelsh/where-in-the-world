import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: 'Montserrat', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;
