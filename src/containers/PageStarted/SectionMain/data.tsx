import React from "react"
import { withPrefix } from "gatsby"

import Button from "../../../components/Button"
import {
  IconGithub,
  IconReddit,
  IconDiscord,
  IconFacebook,
  IconTwitter,
  IconSubReddit,
  IconTrustwallet,
  IconExodus,
  IconLedger,
  IconRobinhood,
  IconKraken,
  IconFtx,
  IconBinance,
} from "../../../icons"
import { LINKS } from "../../../utils/const"

const TabButton = ({ icon, text, link }: { icon: React.ReactNode; text: string; link: string }) => {
  return <Button icon={icon} text={text} layout="center" backgroundColor="black" href={link} fullWidth />
}

export const stepOneButtons = [
  [
    <TabButton
      icon={<img src={withPrefix("/images/multidoge-icon.png")} alt="multidoge" />}
      text="Multidoge"
      link="https://multidoge.org/"
    />,
    <TabButton
      icon={<img src={withPrefix("/images/dogecoin-icon.png")} alt="dogecoin" />}
      text="Dogecoin Core"
      link="https://github.com/dogecoin/dogecoin/releases"
    />,
  ],
  [
    <TabButton icon={<IconTrustwallet />} text="Trustwallet" link="https://trustwallet.com/dogecoin-wallet/" />,
    <TabButton icon={<IconExodus />} text="Exodus" link="https://www.exodus.com/dogecoin-wallet" />,
    <TabButton icon={<IconLedger />} text="Ledger" link="https://www.ledger.com/" />,
    <TabButton icon={<IconRobinhood />} text="Robinhood" link="https://robinhood.com/us/en/" />,
  ],
]

export const stepTwoButtons = [
  [
    <TabButton icon={<IconRobinhood />} text="Robinhood" link="https://robinhood.com/us/en/" />,
    <TabButton icon={<IconKraken />} text="Kraken" link="https://www.kraken.com/" />,
  ],
  [
    <TabButton icon={<IconBinance />} text="Binance" link="https://www.binance.com/en" />,
    <TabButton icon={<IconFtx />} text="FTX" link="https://ftx.com/" />,
  ],
]

export const stepFourLinks = [
  { type: "Reddit", link: LINKS.reddit, icon: <Button bordered icon={<IconReddit />} as="div" /> },
  { type: "Twitter", link: LINKS.twitter, icon: <Button bordered icon={<IconTwitter />} as="div" /> },
  { type: "Github", link: LINKS.discord, icon: <Button bordered icon={<IconDiscord />} as="div" /> },
  { type: "Discord", link: LINKS.facebook, icon: <Button bordered icon={<IconFacebook />} as="div" /> },
  { type: "Subreddit", link: LINKS.subreddit, icon: <Button bordered icon={<IconSubReddit />} as="div" /> },
  { type: "Facebook", link: LINKS.github, icon: <Button bordered icon={<IconGithub />} as="div" /> },
]
