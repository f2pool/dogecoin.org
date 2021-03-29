import React from "react"
import { Row, Col } from "react-styled-flexboxgrid"

import Section from "../../components/Section"
import * as S from "./styled"

const SectionLead: React.FC = () => {
  return (
    <Section as={S.Wrapper}>
      <Row middle="sm" style={{ height: "100%" }}>
        <Col xs={12} sm={6}>
          <S.Title>
            Much <span>Doge</span>
          </S.Title>
        </Col>
        <Col xs={12} sm={6}>
          {/* DOGE */}
        </Col>
      </Row>
    </Section>
  )
}

export default SectionLead
