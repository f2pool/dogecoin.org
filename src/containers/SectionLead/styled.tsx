import styled from "styled-components"
import { rem } from "polished"

export const Title = styled.h1`
  text-align: center;
`

export const Accent = styled.span``

export const Wrapper = styled.section`
  height: 100vh;
  padding: ${rem(140)} 0;

  > div {
    height: 100%;
  }
`
