import React from "react"
import { withPrefix } from "gatsby"
import { Row, Col, Grid } from "react-styled-flexboxgrid"

import * as S from "./styled"

const Header: React.FC = () => {
  return (
    <S.Header>
      <Grid>
        <Row>
          <Col xs={4}>
            <S.Logo>
              <img src={withPrefix("/images/logo.png")} alt="logo" width="88px" />
            </S.Logo>
          </Col>
          <Col xs={8}></Col>
        </Row>
      </Grid>
    </S.Header>
  )
}

export default Header
