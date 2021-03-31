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
  padding-top: ${rem(40)};
  margin-bottom: 0;

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    font-size: ${rem(30)};
    line-height: ${rem(36)};
    letter-spacing: -1.5px;
  }
`
export const RowWrapper = styled(Row)`
  padding-bottom: ${rem(64)};
`

const BlockStepLead: React.FC<BlockStepLeadProps> = ({ step, title }) => {
  return (
    <RowWrapper center="xs">
      <Col xs={12} md={8} lg={6}>
        <CardStep step={step} />
        {title && <Title>{title}</Title>}
      </Col>
    </RowWrapper>
  )
}

export default BlockStepLead
