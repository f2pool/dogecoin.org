import React, { useState } from "react"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

import * as S from "./styled"

interface BannerProps {
  text: JSX.Element | JSX.Element[] | string
}

const Banner: React.FC<BannerProps> = ({ text, ...rest }: BannerProps) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = (isVisible: boolean): void => setPageIsVisible(isVisible)

  return (
    <S.Container>
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <S.Wrapper {...rest}>
            <Ticker speed={1}>{() => <S.Text>{text}</S.Text>}</Ticker>
          </S.Wrapper>
        )}
      </PageVisibility>
    </S.Container>
  )
}

export default Banner
