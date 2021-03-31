import React from "react"

import * as S from "./styled"
import Oval from "../../assets/shapes/oval"
import IconArrow from "../../icons/IconArrow"

interface CardBoxLinkProps {
  text: string
  link: string
  color: S.CardColor
}

const OvalShape: React.FC<{ color: S.CardColor }> = ({ color }) => {
  switch (color) {
    case "accent":
      return <Oval $type={4} $strokeColor="#84f9ef" />
    case "black":
      return <Oval $type={4} $rotate={90} $strokeColor="#ffffff" />
    case "secondary":
      return <Oval $type={4} $rotate={45} $strokeColor="#00665e" />
  }
}

const CardBoxLink: React.FC<CardBoxLinkProps> = ({ text, link, color }) => {
  return (
    <S.Card href={link} target="_blank" rel="noopener noreferrer" color={color}>
      <p>{text}</p>

      <S.IconGroup>
        <S.ArrowWrapper>
          <IconArrow />
        </S.ArrowWrapper>
        <S.OvalWrapper>
          <OvalShape color={color} />
        </S.OvalWrapper>
      </S.IconGroup>
    </S.Card>
  )
}

export default CardBoxLink
