import React from "react"
import Helmet from "react-helmet"
import { IntlProvider } from "react-intl"
import { ThemeProvider } from "styled-components"

import { GlobalStyles } from "./GlobalStyles"

import { DEFAULT_LANG } from "../utils/const"

import locale from "../config/locale"
import theme from "../config/styled/theme"

import Header from "../containers/Header"
import Footer from "../containers/Footer"

interface Props {
  isSimpleHeader?: boolean
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ isSimpleHeader = false, children }: Props) => {
  return (
    <IntlProvider locale={DEFAULT_LANG} messages={locale[DEFAULT_LANG]}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <Header isSimple={isSimpleHeader} />
        {children}
        <Footer />
      </ThemeProvider>
    </IntlProvider>
  )
}

export default Layout
