import styled, { createGlobalStyle } from "styled-components"
import { normalize, rem } from "polished"
import { Grid } from "react-styled-flexboxgrid"

export const GlobalStyles = createGlobalStyle`
  ${normalize()};

  html {
    @media all and (max-width: 1040px) {
      font-size: 11px
    }

    @media all and (max-width: 767px) {
      font-size: 9px
    }
    
    @media all and (min-width: 1680px) {
      font-size: 18px;
    }

    @media all and (min-width: 2000px) {
      font-size: 20px;
    }

    @media all and (min-width: 2561px) {
      font-size: 24px;
    }

    @media all and (min-width: 3000px) and (min-height: 1336px)  {
      font-size: 28px;
    }

    @media all and (min-width: 4000px) and (min-height: 1336px)  {
      font-size: 38px;
    }
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

    @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
      font-size: 40px;
      margin-bottom: 42px;
    }
  }

  h2 {
    margin-bottom: ${rem(56)};
    letter-spacing: -0.026em;
    font-size: ${(props) => rem(props.theme.fontSize.h1)};

    @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
      font-size: 40px;
      margin-bottom: 42px;
    }
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

export const CustomGrid = styled(Grid)`
  max-width: 100%;

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    padding-left: 20px;
    padding-right: 20px;
  }
`
