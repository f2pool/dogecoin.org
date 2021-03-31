import React, { useState } from "react"
import { withPrefix } from "gatsby"
import { Row, Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../utils/hooks"

import TypeWriter from "../../components/TypeWriter"
import Section from "../../components/Section"
import Decor from "../../components/Decor"
import ButtonOval from "../../components/ButtonOval"
import OvalStroke from "../../assets/shapes/oval-stroke"
import Oval from "../../assets/shapes/oval"
import PathLine from "../../assets/shapes/path-line"
import { IconPlay } from "../../icons"

import * as S from "./styled"

const SectionLead: React.FC = () => {
  const [dragStart, setDragStart] = useState(false)
  const [linkText, videoText] = useFormatMessages([{ id: "LEAD_BUTTON_TEXT_1" }, { id: "LEAD_BUTTON_TEXT_2" }])

  return (
    <Section as={S.Wrapper}>
      <Decorations />

      <Row middle="sm" style={{ height: "100%" }}>
        <Col xs={12} sm={6}>
          <S.Title>
            <span>Much</span>
            <TypeWriter />
          </S.Title>
          <S.ShapesWrapper>
            <ButtonOval text={linkText} shapeType="landing-copy" shapeColor="#FFD203" />
            <ButtonOval
              text={videoText}
              icon={<IconPlay />}
              shapeType="video-play"
              shapeColor="#98EDE3"
              shapeRotate={170}
            />
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

const Decorations: React.FC = () => {
  return (
    <>
      <Decor style={{ top: "-14%", left: "40%" }} $width={"45vh"}>
        <PathLine />
      </Decor>
      <Decor style={{ bottom: "-10%", left: "0" }} $width={"33vw"}>
        <PathLine $rotate={160} />
      </Decor>
      <Decor style={{ bottom: "10%", left: "10%" }} $width={"51px"}>
        <OvalStroke $color="#00BEB5" $strokeWidth="2" />
      </Decor>
      <Decor style={{ bottom: "9.8%", left: "11.1%" }} $width={"40px"}>
        <OvalStroke $color="#98EDE3" $type={2} $strokeWidth="10" $rotate={-120} />
      </Decor>
      <Decor style={{ top: "-80px", left: "60%" }} $width={"133px"}>
        <Oval $color="#00BEB5" />
      </Decor>
      <Decor style={{ top: "15px", left: "61.5%" }} $width={"42px"}>
        <OvalStroke $color="#C3F1FF" />
      </Decor>
      <Decor style={{ top: "38%", left: "53%" }} $width={"67px"}>
        <Oval $color="#C3F1FF" $type={2} />
      </Decor>
      <Decor style={{ top: "40%", left: "53%" }} $width={"178px"}>
        <OvalStroke $color="#FFD203" $type={2} />
      </Decor>
      <Decor style={{ right: "-80px", top: "36px" }} $width={"133px"}>
        <Oval $color="#232D91" $rotate={30} />
      </Decor>
      <Decor style={{ left: "-80px", bottom: "120px" }} $width={"133px"}>
        <Oval $color="#232D91" $rotate={45} />
      </Decor>
      <Decor style={{ top: "16%", left: "70%", zIndex: 10 }} $width={"86px"}>
        <OvalStroke $color="#C3F1FF" $type={2} $strokeWidth="5" $rotate={-65} />
      </Decor>
    </>
  )
}

export default SectionLead
