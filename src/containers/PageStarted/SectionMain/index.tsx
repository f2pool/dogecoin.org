import React from "react"
import { useMediaQuery } from "react-responsive"
import { Row, Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../../utils/hooks"

import PathLine from "../../../assets/shapes/path-line"
import Section from "../../../components/Section"
import CardBoxLink from "../../../components/CardBoxLink"
import CardSocial from "../../../components/CardSocial/index"
import BlockStepLead from "../../../components/BlockStepLead"
import { stepOneButtons, stepTwoButtons, stepFourLinks } from "./data"
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
  const isMobile = useMediaQuery({ maxWidth: 767 })

  const [
    titleOne,
    officialWalletTitle,
    officialWalletSubtitle,
    altWalletTitle,
    altWalletSubtitle,
    titleTwo,
    cardTitleOne,
    cardTitleTwo,
    cardTitleThree,
    titleFour,
  ] = useFormatMessages([
    { id: "GUIDE_STEP_1_SECTION_TITLE" },
    { id: "WALLET_OFFICIAL_TITLE" },
    { id: "WALLET_OFFICIAL_SUBTITLE" },
    { id: "WALLET_ALT_TITLE" },
    { id: "WALLET_ALT_SUBTITLE" },
    { id: "GUIDE_STEP_2_SECTION_TITLE" },
    { id: "GUIDE_STEP_3_CARD_ONE" },
    { id: "GUIDE_STEP_3_CARD_TWO" },
    { id: "GUIDE_STEP_3_CARD_THREE" },
    { id: "GUIDE_STEP_4_SECTION_TITLE" },
  ])

  return (
    <S.SectionWrapper>
      <Section as={S.RadiusWrapper}>
        {!isMobile && (
          <S.DecorWrapper>
            <PathLine $type={2} />
          </S.DecorWrapper>
        )}

        <BlockStepLead step={1} title={titleOne} />
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

      <Section as={S.Wrapper}>
        {!isMobile && (
          <S.DecorWrapper>
            <PathLine $type={3} />
          </S.DecorWrapper>
        )}

        <BlockStepLead step={2} title={titleTwo} />
        <TabsGroup
          groups={[
            {
              buttonGroup: stepTwoButtons[0],
            },
            {
              buttonGroup: stepTwoButtons[1],
            },
          ]}
        />
      </Section>

      <Section as={S.Wrapper}>
        {!isMobile && (
          <S.DecorWrapper>
            <PathLine $type={4} />
          </S.DecorWrapper>
        )}

        <BlockStepLead step={3} />
        <Row center="xs">
          <S.CardsContainerCol md={12} lg={8}>
            <S.CardsRow>
              <Col xs={12} md={6}>
                <CardBoxLink color="accent" text={cardTitleOne} link="https://bitpay.com/blog/spend-dogecoin/" />
              </Col>
              <Col xs={12} md={6}>
                <CardBoxLink
                  color="black"
                  text={cardTitleTwo}
                  link=" https://twitter.com/SnoopDogg/status/1375587797474504707"
                />
              </Col>
              <Col xs={12} md={6}>
                <CardBoxLink color="secondary" text={cardTitleThree} link="https://www.spendyourdogecoins.cf/" />
              </Col>
            </S.CardsRow>
          </S.CardsContainerCol>
        </Row>
      </Section>

      <Section as={S.Wrapper}>
        <BlockStepLead step={4} title={titleFour} />

        <Row center="xs">
          <S.CardsContainerCol md={12} lg={8}>
            <S.SocialCardsRow>
              {stepFourLinks.map((card, index) => (
                <Col xs={6} md={4} key={index}>
                  <CardSocial type={card.type} link={card.link} icon={card.icon} />
                </Col>
              ))}
            </S.SocialCardsRow>
          </S.CardsContainerCol>
        </Row>
      </Section>
    </S.SectionWrapper>
  )
}

export default SectionMain
