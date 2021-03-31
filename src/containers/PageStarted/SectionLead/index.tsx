import React from "react"
import { Row } from "react-styled-flexboxgrid"

import Section from "../../../components/Section"

// import { useFormatMessages } from "../../../utils/hooks"

import * as S from "./styled"

const SectionLead: React.FC = () => {
  // const [title, lead, text] = useFormatMessages([
  //   { id: "ABOUT_TITLE" },
  //   { id: "ABOUT_TEXT_LEAD" },
  //   { id: "ABOUT_TEXT" },
  // ])
  const [title, subtitle] = ["Getting Started", "It is very easy to start using Dogecoin"]

  return (
    <Section as={S.Wrapper}>
      <Row center="xs">
        <S.ColWrapper xs={12} md={8}>
          <S.Title>{title}</S.Title>
          <S.Subtitle>{subtitle}</S.Subtitle>
        </S.ColWrapper>
      </Row>
    </Section>
  )
}

export default SectionLead
