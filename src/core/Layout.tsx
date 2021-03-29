import React from "react"
import { IntlProvider } from "react-intl"
import { ThemeProvider } from "styled-components"

import { DEFAULT_LANG } from "../utils/const"

import locale from "../config/locale"
import theme from "../config/styled/theme"

interface Props {
  children: JSX.Element | JSX.Element[]
}

const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <IntlProvider locale={DEFAULT_LANG} messages={locale[DEFAULT_LANG]}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </IntlProvider>
  )
}

export default Layout
