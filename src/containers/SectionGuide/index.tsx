import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../utils/hooks"

import Section from "../../components/Section"
import Button from "../../components/Button"

import { IconCart, IconWallet, IconDownload, IconKey } from "../../icons"

import Oval from "../../assets/shapes/oval"

import * as S from "./styled"

const Shapes: React.FC = () => {
  const [
    stepOneSubtitle,
    stepOneTitle,
    stepTwoSubtitle,
    stepTwoTitle,
    stepThreeSubtitle,
    stepThreeTitle,
    stepFourSubtitle,
    stepFourTitle,
  ] = useFormatMessages([
    { id: "GUIDE_STEP_1_SUBTITLE" },
    { id: "GUIDE_STEP_1_TITLE" },
    { id: "GUIDE_STEP_2_SUBTITLE" },
    { id: "GUIDE_STEP_2_TITLE" },
    { id: "GUIDE_STEP_3_SUBTITLE" },
    { id: "GUIDE_STEP_3_TITLE" },
    { id: "GUIDE_STEP_4_SUBTITLE" },
    { id: "GUIDE_STEP_4_TITLE" },
  ])
  const stepsData = [
    {
      subtitle: stepOneSubtitle,
      title: stepOneTitle,
      shape: <Oval $type={2} />,
      icon: <IconKey />,
    },
    {
      subtitle: stepTwoSubtitle,
      title: stepTwoTitle,
      shape: <Oval $type={2} $rotate={90} />,
      icon: <IconWallet />,
    },
    {
      subtitle: stepThreeSubtitle,
      title: stepThreeTitle,
      shape: <Oval $rotate={145} />,
      icon: <IconCart />,
    },
    {
      subtitle: stepFourSubtitle,
      title: stepFourTitle,
      shape: <Oval $type={3} $rotate={330} />,
      icon: <IconDownload />,
    },
  ]

  return (
    <>
      {stepsData.map((step, index) => {
        return (
          <S.StepCol xs={12} sm={3} key={index}>
            <S.StepShape>
              {step.shape}
              <S.Icon>{step.icon}</S.Icon>
            </S.StepShape>
            <S.StepTexts>
              <p>{step.subtitle}</p>
              <h3>{step.title}</h3>
            </S.StepTexts>
          </S.StepCol>
        )
      })}
    </>
  )
}

const SectionGuide: React.FC = () => {
  const [title, ctaText] = useFormatMessages([{ id: "GUIDE_TITLE" }, { id: "GUIDE_CTA_TEXT" }])

  return (
    <Section as={S.Wrapper}>
      <S.HeroRow center="xs">
        <Col xs={12} sm={12} md={6}>
          <S.Title>{title}</S.Title>
        </Col>
      </S.HeroRow>
      <S.ShapesRow center="xs">
        <Shapes />
      </S.ShapesRow>

      <Row center="xs">
        <Button text={ctaText} backgroundColor="primary" href="#" />
      </Row>
    </Section>
  )
}

export default SectionGuide
