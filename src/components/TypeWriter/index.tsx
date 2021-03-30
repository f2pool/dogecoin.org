import React, { useState } from "react"
import Typewriter from "typewriter-effect"

import Rect from "../../assets/shapes/rect-text.svg"
import * as S from "./styled"

const words = ["Doge", "Simple", "Wow"]

const TypeWriter: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <S.Wrapper wordIndex={currentIndex}>
      <Rect />
      <S.Text>
        <Typewriter
          onInit={(typewriter) => {
            typewriter // TODO: simplify & refactor
              .callFunction(() => setCurrentIndex(0))
              .typeString(words[0])
              .pauseFor(500)
              .deleteAll()
              .callFunction(() => setCurrentIndex(1))
              .typeString(words[1])
              .pauseFor(500)
              .deleteAll()
              .callFunction(() => setCurrentIndex(2))
              .typeString(words[2])
              .pauseFor(500)
              .start()
          }}
          options={{
            autoStart: true,
            loop: true,
            cursor: "",
            delay: 220,
          }}
        />
      </S.Text>
    </S.Wrapper>
  )
}

export default TypeWriter
