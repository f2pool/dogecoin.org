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
      <>
        {decorationsConfig.map((item, i) => (
          <Decor key={i} style={item.style} $width={item.width} $delay={item.delay} $speed={item.speed} $animate>
            {item.element}
          </Decor>
        ))}
      </>
      <Row middle="sm" reverse="sm" style={{ height: "100%" }}>
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
        <Col xs={12} sm={6}>
          <S.Title>
            <span>Much</span>
            <TypeWriter />
          </S.Title>
          <S.ShapesWrapper>
            <ButtonOval text={linkText} shapeType="landing-copy" shapeColor="#FFD203" href="/#about" anchor />
            <ButtonOval
              text={videoText}
              icon={<IconPlay />}
              shapeType="video-play"
              shapeColor="#98EDE3"
              shapeRotate={170}
              href="https://youtu.be/_KVZmS_UO5I"
            />
          </S.ShapesWrapper>
        </Col>
      </Row>
    </Section>
  )
}

const decorationsConfig = [
  {
    style: { top: "-14%", left: "40%" },
    width: "45vh",
    element: <PathLine />,
    delay: 0,
    speed: 11,
  },
  {
    style: { bottom: "-10%", left: "0" },
    width: "33vw",
    element: <PathLine $rotate={160} />,
    delay: 0.5,
    speed: 9.6,
  },
  {
    style: { bottom: "10%", left: "10%" },
    width: "51px",
    element: <OvalStroke $color="#00BEB5" $strokeWidth="2" />,
    delay: 1,
    speed: 6.6,
  },
  {
    style: { bottom: "9.8%", left: "11.1%" },
    width: "40px",
    element: <OvalStroke $color="#98EDE3" $type={2} $strokeWidth="10" $rotate={-120} />,
    delay: 1,
    speed: 8,
  },
  {
    style: { top: "-80px", left: "60%" },
    width: "133px",
    element: <Oval $color="#00BEB5" />,
    delay: 0,
    speed: 9.9,
  },
  {
    style: { top: "15px", left: "61.5%" },
    width: "42px",
    element: <OvalStroke $color="#C3F1FF" />,
    delay: 0.1,
    speed: 6,
  },
  {
    style: { top: "38%", left: "53%" },
    width: "67px",
    element: <Oval $color="#C3F1FF" $type={2} />,
    delay: 0.2,
    speed: 13,
  },
  {
    style: { top: "40%", left: "53%" },
    width: "178px",
    element: <OvalStroke $color="#FFD203" $type={2} />,
    delay: 2.2,
    speed: 10.5,
  },
  {
    style: { right: "-80px", top: "36px" },
    width: "133px",
    element: <Oval $color="#232D91" $rotate={30} />,
    delay: 0,
    speed: 6.9,
  },
  {
    style: { left: "-80px", bottom: "120px" },
    width: "133px",
    element: <Oval $color="#232D91" $rotate={45} />,
    delay: 0,
    speed: 7.7,
  },
  {
    style: { top: "16%", left: "70%", zIndex: 10 },
    width: "86px",
    element: <OvalStroke $color="#C3F1FF" $type={2} $strokeWidth="5" $rotate={-65} />,
    delay: 0.8,
    speed: 8.8,
  },
]

export default SectionLead
