import React from "react"
import { withPrefix } from "gatsby"
import { Row, Col } from "react-styled-flexboxgrid"

import TypeWriter from "../../components/TypeWriter"
import Section from "../../components/Section"
import ButtonOval from "../../components/ButtonOval"
import { IconPlay } from "../../icons"

import * as S from "./styled"

const SectionLead: React.FC = () => {
  return (
    <Section as={S.Wrapper}>
      <Row middle="sm" style={{ height: "100%" }}>
        <Col xs={12} sm={6}>
          <S.Title>
            <span>Much</span>
            <TypeWriter />
          </S.Title>
          <S.ShapesWrapper>
            <ButtonOval text="Let's Wow" shapeType="landing-copy" />
            <ButtonOval text="Video" icon={<IconPlay />} shapeType="video-play" />
          </S.ShapesWrapper>
        </Col>
        <Col xs={12} sm={6}>
          <S.Doge>
            <img src={withPrefix("/images/doge.png")} alt="Much Doge" width="637px" />
          </S.Doge>
        </Col>
      </Row>
    </Section>
  )
}

export default SectionLead
