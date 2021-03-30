import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

import * as S from "./styled"

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <h3>Have questions? Text us.</h3>
          </Col>
          <Col xs={12} sm={6}>
            <h3>Follow us</h3>
          </Col>
        </Row>
      </Grid>
    </S.Footer>
  )
}

export default Footer
