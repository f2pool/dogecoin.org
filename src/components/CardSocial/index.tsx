import React from "react"

import * as S from "./styled"

type SocialPlatform = "Reddit" | "Twitter" | "Discord" | "Facebook" | "Subreddit" | "Github"
interface CardSocialProps {
  type: SocialPlatform
  link: string
  icon: React.ReactNode
}

const CardSocial: React.FC<CardSocialProps> = ({ icon, link, type }) => {
  return (
    <S.Card href={link} target="_blank" rel="noopener noreferrer">
      <S.IconWrapper>{icon}</S.IconWrapper>
      <p>{type}</p>
    </S.Card>
  )
}

export default CardSocial
