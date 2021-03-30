import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"

import Section from "../../components/Section"

import { useFormatMessages } from "../../utils/hooks"

import * as S from "./styled"

const SectionAbout: React.FC = () => {
  const [title, text] = useFormatMessages([{ id: "ABOUT_TITLE" }, { id: "ABOUT_TEXT" }])

  return (
    <Section as={S.Wrapper}>
      <Row center="xs">
        <Col xs={12} sm={10}>
          <h2>{title}</h2>
          {text}
        </Col>
      </Row>
    </Section>
  )
}

export default SectionAbout
