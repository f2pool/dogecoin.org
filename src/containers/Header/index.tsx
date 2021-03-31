import React from "react"
import { withPrefix, Link } from "gatsby"
import { Row, Col, Grid } from "react-styled-flexboxgrid"

import * as S from "./styled"

interface HeaderProps {
  isSimple?: boolean // TODO: better naming when site scales
}

const Header: React.FC<HeaderProps> = ({ isSimple = false }) => {
  return (
    <S.Header>
      <Grid>
        {!isSimple && (
          <Row>
            <Col xs={4}>
              <S.Logo>
                <img src={withPrefix("/images/logo.png")} alt="logo" width="88px" />
              </S.Logo>
            </Col>
            <Col xs={8}></Col>
          </Row>
        )}
        {isSimple && (
          <S.SimpleHeaderRow center="xs">
            <Col xs={4}>
              <Link to="/">{"<- Back"}</Link>
            </Col>
          </S.SimpleHeaderRow>
        )}
      </Grid>
    </S.Header>
  )
}

export default Header
