import React, { useState } from "react"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

import * as S from "./styled"

interface BannerProps {
  text: JSX.Element | JSX.Element[] | string
  type?: S.Layout
}

const Banner: React.FC<BannerProps> = ({ text, type, ...rest }: BannerProps) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = (isVisible: boolean): void => setPageIsVisible(isVisible)

  return (
    <S.Container layout={type}>
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <S.Wrapper layout={type} {...rest}>
            <Ticker speed={0.5}>{() => <S.Text>{text}</S.Text>}</Ticker>
          </S.Wrapper>
        )}
      </PageVisibility>
    </S.Container>
  )
}

export default Banner
