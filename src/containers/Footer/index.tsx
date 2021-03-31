import React from "react"
import { withPrefix } from "gatsby"
import { Grid, Row, Col } from "react-styled-flexboxgrid"

import { useFormatMessages } from "../../utils/hooks"
import { IconGithub, IconFacebook, IconTwitter } from "../../icons"
import Banner from "../../components/Banner"
import Button from "../../components/Button"
import ButtonOval from "../../components/ButtonOval"
import Oval from "../../assets/shapes/oval"

import { SOCIAL_LINKS } from "../../utils/const"

import * as S from "./styled"

const Footer: React.FC = () => {
  const [textUs, followUs, footerOr, gettingStarted] = useFormatMessages([
    { id: "FOOTER_TEXT_US" },
    { id: "FOOTER_FOLLOW_US" },
    { id: "FOOTER_OR" },
    { id: "GETTING_STARTED_TITLE" },
  ])

  return (
    <S.Footer>
      <S.Wrapper>
        <S.Banner>
          <Banner type="bold" text="Much Wow" />
        </S.Banner>
        <Grid>
          <Row>
            <Col xs={12} sm={6}>
              <S.Relative>
                <h3>{textUs}</h3>

                <S.ButtonRow>
                  <Button
                    text={gettingStarted}
                    fullWidth
                    layout="center"
                    backgroundColor="background"
                    href="/getting-started"
                    icon={
                      <img
                        src={withPrefix("/images/doge-puppy.png")}
                        alt="doge"
                        width="60px"
                        style={{ left: "1.5rem" }}
                      />
                    }
                  />
                </S.ButtonRow>
                <S.ButtonRow>
                  <Button
                    href="#"
                    text="Github"
                    fullWidth
                    layout="center"
                    textColor="accent"
                    backgroundColor="background"
                    icon={<IconGithub />}
                  />
                </S.ButtonRow>

                <S.Divider>
                  <Oval $color="rgba(245, 240, 237, .08)" $type={3} $rotate={317} />
                  <span>{footerOr}</span>
                </S.Divider>
              </S.Relative>
            </Col>
            <Col xs={12} sm={6}>
              <h3>{followUs}</h3>

              <S.ShapesWrapper>
                <ButtonOval
                  icon={<IconFacebook />}
                  textColor="accent"
                  shapeColor="#C3F1FF"
                  shapeRotate={120}
                  shapeType="telegram"
                  href={SOCIAL_LINKS.facebook}
                />
                <ButtonOval
                  icon={<IconTwitter />}
                  shapeColor="#98EDE3"
                  shapeType="twitter"
                  textColor="primary"
                  href={SOCIAL_LINKS.twitter}
                />

                {/* TODO: add all other social links */}
              </S.ShapesWrapper>
              <S.Copy>&copy; 2021</S.Copy>
            </Col>
          </Row>
        </Grid>
      </S.Wrapper>
    </S.Footer>
  )
}

export default Footer
