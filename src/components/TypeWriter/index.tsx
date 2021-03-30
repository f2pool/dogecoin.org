import React, { useState } from "react"
import Typewriter from "typewriter-effect"
import * as S from "./styled"

const words = ["Doge", "Simple"]

const TypeWriter: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <S.Wrapper wordIndex={currentIndex}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .callFunction(() => setCurrentIndex(0))
            .typeString(words[0])
            .pauseFor(500)
            .deleteAll()
            .callFunction(() => setCurrentIndex(1))
            .typeString(words[1])
            .pauseFor(500)
            .start()
        }}
        options={{
          autoStart: true,
          loop: true,
          cursor: "",
        }}
      />
    </S.Wrapper>
  )
}

export default TypeWriter
