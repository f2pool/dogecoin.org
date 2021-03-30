import React from "react"
import styled from "styled-components"
import { rem } from "polished"

import Layout from "../core/Layout"
import Main from "../components/Main"

import Button from "../components/Button"
import ButtonOval from "../components/ButtonOval"

const Wrapper = styled.div`
  padding: ${rem(280)} ${rem(100)};
`

const Buttons: React.FC = () => {
  return (
    <Layout>
      <Main>
        <Wrapper>
          <Button text="Telegram" backgroundColor="odd" />
          <Button
            text="Telegram"
            icon="doge"
            backgroundColor="white"
            textColor="accent"
            layout="center"
            fullWidth
            href="#"
          />
          <ButtonOval text="Let's Wow" shapeType="landing-copy" />
          <ButtonOval text="Video" icon="play" shapeType="video-play" />
          <ButtonOval icon="twitter" shapeType="twitter" href="#" />
          <ButtonOval icon="telegram" shapeType="telegram" href="#" />
        </Wrapper>
      </Main>
    </Layout>
  )
}

export default Buttons
