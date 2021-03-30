import React, { useState } from "react"
import Ticker from "react-ticker"
import { StaticImage } from "gatsby-plugin-image"
import PageVisibility from "react-page-visibility"

import * as S from "./styled"

/*
 * Constants
 */
const MemeLionKing = (): React.ReactNode => <StaticImage src={"../../assets/images/meme-lion-king.png"} alt="test" />
const MemeTruck = (): React.ReactNode => <StaticImage src={"../../assets/images/meme-cybertruck.png"} alt="test" />

// TODO: use real data
const slides = [
  {
    staticImg: MemeLionKing(),
  },
  {
    staticImg: MemeTruck(),
    link: "#",
  },
  {
    staticImg: MemeLionKing(),
  },
  {
    staticImg: MemeTruck(),
    link: "#",
  },
]

const Carousel: React.FC = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = (isVisible: boolean): void => setPageIsVisible(isVisible)

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Ticker speed={10}>
          {({ index }) => {
            const currentSlide = slides[index % slides.length]
            return (
              <S.SlideWrapper
                {...(currentSlide.link && {
                  as: "a",
                  href: currentSlide.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {currentSlide.staticImg}
              </S.SlideWrapper>
            )
          }}
        </Ticker>
      )}
    </PageVisibility>
  )
}

export default Carousel
