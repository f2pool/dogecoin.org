import React from "react"
import { withPrefix } from "gatsby"
import { Row, Col } from "react-styled-flexboxgrid"
import Draggable from "react-draggable"

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
  const [linkText, videoText] = useFormatMessages([{ id: "LEAD_BUTTON_TEXT_1" }, { id: "LEAD_BUTTON_TEXT_2" }])

  const onStop = (event) => {
    console.log(event, "=event=")
  }

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
          <S.Doge>
            <S.Circle>
              <img src={withPrefix("/images/doge.png")} alt="Much Doge" width="637px" />
            </S.Circle>
            <S.Glasses>
              <Draggable position={{ x: 0, y: 0 }} onStop={onStop}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 481.3 191.9">
                  <g fill="#FFF">
                    <path d="M307.455 149.953l4.5-19.488 19.488 4.5-4.5 19.488zm-15.005-23.979l4.5-19.488 19.487 4.5-4.5 19.488zm-15.006-23.979l4.5-19.488 19.488 4.5-4.5 19.488zm68.996 56.931l4.5-19.488 19.488 4.5-4.5 19.488zm-15.006-23.979l4.5-19.488 19.488 4.5-4.5 19.488zm-15.006-23.979l4.5-19.488 19.488 4.5-4.5 19.488zM54.024 91.417l4.5-19.488 19.488 4.5-4.5 19.488zM39.019 67.438l4.5-19.488 19.488 4.5-4.5 19.488zM24.013 43.46l4.5-19.489L48 28.471 43.5 47.96zm68.973 57.027L97.486 81l19.488 4.5-4.5 19.488z" />
                    <path d="M77.98 76.509l4.5-19.488 19.489 4.5-4.5 19.488zM62.998 52.432l4.5-19.488 19.487 4.5-4.5 19.488z" />
                  </g>
                  <g fill="#222533">
                    <path d="M316.4 111l19.5 4.5-4.5 19.5-19.5-4.5 4.5-19.5z" />
                    <path d="M13.5 0L0 58.5 19.5 63 15 82.4l19.5 4.5-4.5 19.5 116.9 27 4.5-19.5 19.5 4.5 4.5-19.5 19.5 4.5 4.5-19.5 19.5 4.5 4.5-19.5 39.1 9-9 39 19.5 4.5-4.5 19.5 19.5 4.5-4.5 19.5 116.9 27 4.5-19.5 19.5 4.5 4.5-19.5 19.5 4.5 4.5-19.5 19.5 4.5 9-39L13.5 0zm79.4 100.4L97.4 81l-19.5-4.5L73.4 96 54 91.4 58.5 72 39 67.5 43.5 48 24 43.5 28.5 24 48 28.5 43.5 48 63 52.5 67.5 33 87 37.5 82.4 57l19.5 4.5L97.4 81l19.5 4.5-4.5 19.5-19.5-4.6zM346.4 159l4.5-19.5-19.5-4.5-4.5 19.5-19.5-4.5 4.5-19.5-19.5-4.5 4.5-19.5-19.5-4.5 4.5-19.5 19.5 4.5-4.5 19.5 19.5 4.5 4.5-19.5 19.5 4.5-4.5 19.5 19.5 4.5-4.5 19.5 19.5 4.5-4.5 19.5-19.5-4.5z" />
                    <path d="M63 52.5L82.4 57l-4.5 19.5L58.5 72 63 52.5z" />
                  </g>
                </svg>
              </Draggable>
            </S.Glasses>
          </S.Doge>
        </Col>
        <Col xs={12} sm={6}>
          <S.Title>
            <span>Much</span>
            <TypeWriter />
          </S.Title>
          <S.ShapesWrapper>
            <ButtonOval
              text={linkText}
              shapeType="landing-copy"
              shapeColor="#FFD203"
              href="/#about"
              gatsbyLink
              anchor
            />
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
