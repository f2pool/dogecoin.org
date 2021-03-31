import React from "react"

import * as S from "./styled"
import IconReddit from "../../icons/IconReddit"
import IconTwitter from "../../icons/IconTwitter"
import IconDiscord from "../../icons/IconDiscord"
import IconFacebook from "../../icons/IconFacebook"
import IconGithub from "../../icons/IconGithubYellow"

type SocialPlatform = "Reddit" | "Twitter" | "Discord" | "Facebook" | "Subreddit" | "Github"

interface CardSocialProps {
  type: SocialPlatform
  link: string
}

const SocialIcon: React.FC<{ type: SocialPlatform }> = ({ type }) => {
  switch (type) {
    case "Reddit":
    case "Subreddit":
      return <IconReddit />
    case "Twitter":
      return <IconTwitter />
    case "Discord":
      return <IconDiscord />
    case "Facebook":
      return <IconFacebook />
    case "Github":
      return <IconGithub />
  }
}

const CardSocial: React.FC<CardSocialProps> = ({ type, link }) => {
  return (
    <S.Card href={link} target="_blank" rel="noopener noreferrer">
      <S.IconWrapper>
        <SocialIcon type={type} />
      </S.IconWrapper>
      <p>{type}</p>
    </S.Card>
  )
}

export default CardSocial
