import { createGlobalStyle } from "styled-components"
import { normalize, rem } from "polished"

export const GlobalStyles = createGlobalStyle`
  ${normalize()};

  html {

  }

  body {
    position: relative;
    min-height: 100vh;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: normal;
    font-size: ${(props) => rem(props.theme.fontSize.base)};
    font-family: ${(props) => props.theme.font.base};
    color: ${(props) => props.theme.colors.dark};
    background-color: ${(props) => props.theme.colors.background};
    direction: ltr;
    overscroll-behavior: none;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;

  }

  h1, h2, h3, h4, h5 {
    margin-top: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
    outline: none !important;
    transition: all ${(props) => props.theme.transition.base};
  }

  p {
    margin-top: 0;
  }

  h1 {
    margin-bottom: ${rem(80)};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    font-size: ${(props) => rem(props.theme.fontSize.h1)};
    line-height: 1;

    @media all and (max-width: 767px) {
      font-size: 24px;
      margin-bottom: 6px;
    }
  }

  h2 {
    margin-bottom: ${rem(56)};
    letter-spacing: -0.026em;
    font-size: ${(props) => rem(props.theme.fontSize.h1)};
  }

  button {
    background-color: transparent;
    border: none;
  }

  * {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
`
