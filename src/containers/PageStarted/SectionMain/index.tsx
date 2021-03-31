import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../../utils/hooks"

import Section from "../../../components/Section"
import BlockStepLead from "../../../components/BlockStepLead"
import { stepOneButtons } from "./data"
import * as S from "./styled"

interface TabsGroupBase {
  title?: string
  subtitle?: string
  buttonGroup: JSX.Element[]
}
interface TabsGroupProps {
  groups: TabsGroupBase[]
}
const TabsGroup: React.FC<TabsGroupProps> = ({ groups }) => {
  return (
    <Row center="xs">
      {groups.map((group, index) => (
        <S.TabsCol xs={12} md={6} lg={4} key={index}>
          {group.title && group.subtitle && (
            <S.TabsTitles>
              <h4>{group.title}</h4>
              <p>{group.subtitle}</p>
            </S.TabsTitles>
          )}
          <S.TabsButtons>{group.buttonGroup}</S.TabsButtons>
        </S.TabsCol>
      ))}
    </Row>
  )
}

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
      <TabsGroup
        groups={[
          {
            title: officialWalletTitle,
            subtitle: officialWalletSubtitle,
            buttonGroup: stepOneButtons[0],
          },
          {
            title: altWalletTitle,
            subtitle: altWalletSubtitle,
            buttonGroup: stepOneButtons[1],
          },
        ]}
      />
    </Section>
  )
}

export default SectionMain
