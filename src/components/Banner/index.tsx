import React, { useState } from "react"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"

import * as S from "./styled"

interface BannerProps {
  texts: JSX.Element[] | string[]
  type?: S.Layout
}

const Banner: React.FC<BannerProps> = ({ texts, type, ...rest }: BannerProps) => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = (isVisible: boolean): void => setPageIsVisible(isVisible)

  return (
    <S.Container layout={type}>
      <PageVisibility onChange={handleVisibilityChange}>
        {pageIsVisible && (
          <S.Wrapper layout={type} {...rest}>
            <Ticker speed={0.5} move={false}>
              {({ index }) => {
                const currentIndex = index % texts.length

                return <S.Text>{texts[currentIndex]}</S.Text>
              }}
            </Ticker>
          </S.Wrapper>
        )}
      </PageVisibility>
    </S.Container>
  )
}

export default Banner
