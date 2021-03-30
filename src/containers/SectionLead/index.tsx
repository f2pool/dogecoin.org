import React, { useState } from "react"
import { withPrefix } from "gatsby"
import { Row, Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../utils/hooks"

import TypeWriter from "../../components/TypeWriter"
import Section from "../../components/Section"
import ButtonOval from "../../components/ButtonOval"
import { IconPlay } from "../../icons"

import * as S from "./styled"

const SectionLead: React.FC = () => {
  const [dragStart, setDragStart] = useState(false)
  const [linkText, videoText] = useFormatMessages([{ id: "LEAD_BUTTON_TEXT_1" }, { id: "LEAD_BUTTON_TEXT_2" }])

  return (
    <Section as={S.Wrapper}>
      <Row middle="sm" style={{ height: "100%" }}>
        <Col xs={12} sm={6}>
          <S.Title>
            <span>Much</span>
            <TypeWriter />
          </S.Title>
          <S.ShapesWrapper>
            <ButtonOval text={linkText} shapeType="landing-copy" />
            <ButtonOval text={videoText} icon={<IconPlay />} shapeType="video-play" />
          </S.ShapesWrapper>
        </Col>
        <Col xs={12} sm={6}>
          <S.Doge onDragStart={() => setDragStart(true)} onDragEnd={() => setDragStart(false)}>
            <S.Circle style={{ zIndex: dragStart ? 2 : "auto" }}>
              <img src={withPrefix("/images/doge.png")} alt="Much Doge" width="637px" />
            </S.Circle>
            <S.Glasses>
              <img src={withPrefix("/images/deal-with-it.svg")} alt="Glasses" width="400px" />
            </S.Glasses>
          </S.Doge>
        </Col>
      </Row>
    </Section>
  )
}

export default SectionLead
