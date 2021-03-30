import React from "react"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

import * as S from "./styled"

const Footer: React.FC = () => {
  return (
    <S.Footer>
      <Grid>
        <Row>
          <Col xs={12} sm={6}>
            <h3>Learn More</h3>
            <p><a href="https://dogecoin.org/gettingstarted">Getting Started</a></p>
            <p><a href="https://www.reddit.com/r/dogeducation">Dogeducation Subreddit</a></p>
            <p><a href="https://github.com/dogecoin/dogecoin">Dogecoin Github</a></p>
          </Col>
          <Col xs={12} sm={6}>
            <h3>Community & Support</h3>
            <p><a href="https://twitter.com/Dogecoin">Twitter</a></p>
            <p><a href="https://www.reddit.com/r/dogecoin">Reddit</a></p>
            <p><a href="https://discord.gg/dogecoin">Discord</a></p>
            <p><a href="https://facebook.com/OfficialDogecoin">Facebook</a></p>
          </Col>
        </Row>
      </Grid>
    </S.Footer>
  )
}

export default Footer
