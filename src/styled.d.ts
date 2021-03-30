import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    flexboxgrid: {
      gutterWidth: number
      outerMargin: number
      mediaQuery: string
      container: {
        sm: number
        md: number
        lg: number
      }
      breakpoints: {
        xs: number
        sm: number
        md: number
        lg: number
      }
    }
    font: {
      base: string
      headings: string
    }
    fontSize: {
      base: number
      lead: number
      h1: number
      h2: number
      h3: number
      h4: number
      h5: number
    }
    fontWeight: {
      base: number
      medium: number
      bold: number
    }
    colors: {
      primary: string
      secondary: string
      background: string
      dark: string
      accent: string
      odd: string
      gray: string
      black: string
      white: string
      error: string
      success: string
      warning: string
      mint: string
    }
    transition: {
      base: string
    }
  }
}
