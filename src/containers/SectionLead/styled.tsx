import styled from "styled-components"
import { rem, rgba } from "polished"

export const Title = styled.h1`
  text-align: center;
  letter-spacing: -5px;
  margin-bottom: ${rem(160)};

  span {
    display: block;
  }
`

export const Accent = styled.span``

export const Wrapper = styled.section`
  height: 100vh;
  padding: ${rem(140)} 0;

  > div {
    height: 100%;
  }
`

export const ShapesWrapper = styled.div`
  display: flex;
  justify-content: center;

  & > div:first-child {
    transform: translate3d(${rem(20)}, 0, 0);
  }
`

export const Doge = styled.div`
  img {
    border-radius: 1000px;
    box-shadow: 10px 10px 20px ${rgba("#000", 0.1)};
  }
`
