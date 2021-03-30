import React, { useState } from "react"
import Ticker from "react-ticker"
import PageVisibility from "react-page-visibility"
import { StaticImage } from "gatsby-plugin-image"

import { useFormatMessages } from "../../utils/hooks"

import * as S from "./styled"

/*
 * Constants
 */
// TODO: use real data
const slides = [
  {
    staticImg: (alt: string) => <StaticImage src={"../../assets/images/memes/dip.png"} alt={alt} />,
    link: "#",
  },
  {
    staticImg: (alt: string) => <StaticImage src={"../../assets/images/memes/lion-king.png"} alt={alt} />,
    link: "https://twitter.com/elonmusk/status/1357236825589432322",
  },
  {
    staticImg: (alt: string) => <StaticImage src={"../../assets/images/memes/soon.png"} alt={alt} />,
    link: "https://www.tesla.com/support/bitcoin",
  },
  {
    staticImg: (alt: string) => <StaticImage src={"../../assets/images/memes/cybertruck.png"} alt={alt} />,
    link: "https://www.aljazeera.com/economy/2021/2/12/doge-days-musk-and-tesla-place-double-bet-on-cryptocurrency",
  },
  {
    staticImg: (alt: string) => <StaticImage src={"../../assets/images/memes/coinbase.png"} alt={alt} />,
    link: "https://www.coindesk.com/teslas-elon-musk-wants-coinbase-to-become-doge-friendly",
  },
  {
    staticImg: (alt: string) => <StaticImage src={"../../assets/images/memes/mavericks.png"} alt={alt} />,
    link: "https://twitter.com/mcuban/status/1368276718860046339",
  },
  {
    staticImg: (alt: string) => <StaticImage src={"../../assets/images/memes/finish.png"} alt={alt} />,
    link: "https://www.digitaltrends.com/social-media/dogecoin-jamaican-bobsled-team-olympics/",
  },
  {
    staticImg: (alt: string) => <StaticImage src={"../../assets/images/memes/racecar.png"} alt={alt} />,
    link: "https://ftw.usatoday.com/2014/04/nascar-doge-dogecoin-dogecar-josh-wise",
  },
  {
    staticImg: (alt: string) => <StaticImage src={"../../assets/images/memes/moon.png"} alt={alt} />,
    link: "https://www.vice.com/en/article/kbzbxx/dogecoin-is-going-to-the-moon-for-real",
  },
]

const Carousel: React.FC = () => {
  const [pageIsVisible, setPageIsVisible] = useState(true)
  const handleVisibilityChange = (isVisible: boolean): void => setPageIsVisible(isVisible)
  const alts: string[] = useFormatMessages([
    { id: "MEME_DIP_ALT" },
    { id: "MEME_LIONKING_ALT" },
    { id: "MEME_SOON_ALT" },
    { id: "MEME_CYBERTRUCK_ALT" },
    { id: "MEME_MAVS_ALT" },
    { id: "MEME_FINISH_ALT" },
    { id: "MEME_RACECAR_ALT" },
    { id: "MEME_MOON_ALT" },
  ])

  return (
    <PageVisibility onChange={handleVisibilityChange}>
      {pageIsVisible && (
        <Ticker speed={10}>
          {({ index }) => {
            const currentIndex = index % slides.length
            const currentSlide = slides[currentIndex]
            return (
              <S.SlideWrapper
                {...(currentSlide.link && {
                  as: "a",
                  href: currentSlide.link,
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                {currentSlide.staticImg(alts[currentIndex])}
              </S.SlideWrapper>
            )
          }}
        </Ticker>
      )}
    </PageVisibility>
  )
}

export default Carousel
