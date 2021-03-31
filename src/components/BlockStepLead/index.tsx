import React from "react"
import styled from "styled-components"
import { rem } from "polished"
import { Row, Col } from "react-styled-flexboxgrid"

import CardStep from "../CardStep"

interface BlockStepLeadProps {
  step: number
  title?: string
}

export const Title = styled.h2`
  font-size: ${rem(70)};
  font-weight: ${(props) => props.theme.fontWeight.medium};
  line-height: ${rem(80)};
  letter-spacing: -2px;
  text-align: center;
  padding: ${rem(40)} 0 ${rem(64)} 0;
`

const BlockStepLead: React.FC<BlockStepLeadProps> = ({ step, title }) => {
  return (
    <Row center="xs">
      <Col xs={12} md={8} lg={6}>
        <CardStep step={step} />
        {title && <Title>{title}</Title>}
      </Col>
    </Row>
  )
}

export default BlockStepLead
