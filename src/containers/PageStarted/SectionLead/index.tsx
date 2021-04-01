import React from "react"
import { Row } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../../utils/hooks"

import Decor from "../../../components/Decor"
import Oval from "../../../assets/shapes/oval"
import Section from "../../../components/Section"
import OvalStroke from "../../../assets/shapes/oval-stroke"
import * as S from "./styled"

const SectionLead: React.FC = () => {
  const [title, subtitle] = useFormatMessages([{ id: "GET_STARTED_TITLE" }, { id: "GET_STARTED_SUBTITLE" }])

  return (
    <Section as={S.Wrapper}>
      <S.Decors>
        {decorationsConfig.map((item, i) => (
          <Decor key={i} style={item.style} $width={item.width} $delay={item.delay} $speed={item.speed} $animate>
            {item.element}
          </Decor>
        ))}
      </S.Decors>

      <Row center="xs">
        <S.ColWrapper xs={12} md={7}>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.ColWrapper>
      </Row>
    </Section>
  )
}

const decorationsConfig = [
  {
    style: { bottom: "45%", left: "-10px", zIndex: 1 },
    width: "72px",
    element: <OvalStroke $color="#00BEB5" $strokeWidth="1" />,
    delay: 0,
    speed: 11,
  },
  {
    style: { bottom: "45%", left: "36px", zIndex: 1 },
    width: "40px",
    element: <OvalStroke $color="#98EDE3" $type={2} $strokeWidth="10" $rotate={30} />,
    delay: 0.5,
    speed: 9.6,
  },
  {
    style: { top: "-70px", left: "10%", zIndex: 1 },
    width: "133px",
    element: <Oval $color="#c3f1ff" $type={2} />,
    delay: 1,
    speed: 6.6,
  },
  {
    style: { top: "-80px", right: "5%", zIndex: 1 },
    width: "133px",
    element: <Oval $color="#00BEB5" />,
    delay: 1,
    speed: 8,
  },
  {
    style: { top: "15px", right: "8%", zIndex: 1 },
    width: "42px",
    element: <OvalStroke $color="#C3F1FF" />,
    delay: 0,
    speed: 9.9,
  },
  {
    style: { bottom: "50px", left: "10%", zIndex: 1 },
    width: "67px",
    element: <Oval $color="#C3F1FF" $type={2} />,
    delay: 0.1,
    speed: 6,
  },
  {
    style: { bottom: "-80px", left: "10%", zIndex: 1 },
    width: "178px",
    element: <OvalStroke $color="#FFD203" $type={2} />,
    delay: 0.2,
    speed: 13,
  },
  {
    style: { top: "35%", right: "12%", zIndex: 1 },
    width: "86px",
    element: <OvalStroke $color="#00beb5" $type={2} $strokeWidth="5" $rotate={-65} />,
    delay: 0,
    speed: 7.7,
  },
]

export default SectionLead
