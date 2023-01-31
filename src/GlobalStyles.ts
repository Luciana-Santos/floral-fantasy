import styled, { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  img {
    width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5 {
    line-height: 1;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    font-style: italic;
    font-weight: 700;
    transition: .3s ease;
    display: block;
  }

  ul {
    list-style: none;
  }

  body {
    ${({ theme }) => css`
      font-family: ${theme.fonts.lato};
      color: ${theme.colors.darkGray};
      min-height: 100vh;
      line-height: 1.5;
      position: relative;
    `}
  }
`;

export const Container = styled.div`
  width: min(100% - 2rem, 60rem);
  margin-inline: auto;
`;
