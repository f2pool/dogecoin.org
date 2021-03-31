import React from "react"
import { Row } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../../utils/hooks"

import Section from "../../../components/Section"
import BlockStepLead from "../../../components/BlockStepLead"
import * as S from "./styled"

const SectionMain: React.FC = () => {
  const [title, officialWalletTitle, officialWalletSubtitle, altWalletTitle, altWalletSubtitle] = useFormatMessages([
    { id: "GUIDE_STEP_1_SECTION_TITLE" },
    { id: "WALLET_OFFICIAL_TITLE" },
    { id: "WALLET_OFFICIAL_SUBTITLE" },
    { id: "WALLET_ALT_TITLE" },
    { id: "WALLET_ALT_SUBTITLE" },
  ])

  return (
    <Section as={S.RadiusWrapper}>
      <BlockStepLead step={1} title={title} />
    </Section>
  )
}

export default SectionMain
