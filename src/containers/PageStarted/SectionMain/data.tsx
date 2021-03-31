import React from "react"
import { withPrefix } from "gatsby"

import Button from "../../../components/Button"
import IconTrustwallet from "../../../icons/IconTrustwallet"
import IconExodus from "../../../icons/IconExodus"
import IconLedger from "../../../icons/IconLedger"
import IconRobinhood from "../../../icons/IconRobinhood"
import IconKraken from "../../../icons/IconKraken"
import IconBinance from "../../../icons/IconBinance"
import IconFtx from "../../../icons/IconFtx"

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
  { type: "Reddit", link: "https://www.reddit.com/r/dogecoin/" },
  { type: "Twitter", link: "https://twitter.com/Dogecoin" },
  { type: "Github", link: "https://github.com/dogecoin/dogecoin" },
  { type: "Discord", link: "https://discord.gg/dogecoin" },
  { type: "Subreddit", link: "https://www.reddit.com/r/dogeducation" },
  { type: "Facebook", link: "https://facebook.com/OfficialDogecoin/" },
]
