import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../utils/hooks"

import Section from "../../components/Section"
import Button from "../../components/Button"
import CardStep from "../../components/CardStep"

import * as S from "./styled"

const Shapes: React.FC = () => {
  return (
    <>
      {[1, 2, 3, 4].map((step) => (
        <S.StepCol xs={12} sm={6} md={3} key={step}>
          <CardStep step={step} />
        </S.StepCol>
      ))}
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
        <Button text={ctaText} backgroundColor="primary" href="/getting-started" gatsbyLink />
      </Row>
    </Section>
  )
}

export default SectionGuide
