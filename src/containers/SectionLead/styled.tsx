import styled from "styled-components"
import { rem, rgba } from "polished"

export const Title = styled.h1`
  text-align: center;
  letter-spacing: ${rem(-5)};
  margin-bottom: ${rem(160)};

  span {
    display: block;
  }

  @media all and (max-width: 767px) {
    font-size: 64px;
    letter-spacing: -2.72px;
    margin-bottom: 60px;
  }
`

export const Accent = styled.span``

export const Wrapper = styled.section`
  height: 100vh;
  padding: ${rem(140)} 0;

  > div {
    height: 100%;
  }

  @media all and (max-width: 767px) {
    height: auto;
  }
`

export const ShapesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div:first-child {
    margin-right: ${rem(-20)};
  }

  svg {
    width: ${rem(32)};
  }
`

export const Doge = styled.div`
  width: ${rem(637)};
  height: ${rem(637)};
  margin-left: auto;
  position: relative;

  @media all and (max-width: 767px) {
    width: 180px;
    height: 180px;
    margin-right: auto;
  }
`

export const Circle = styled.div`
  position: relative;
  pointer-events: none;

  img {
    border-radius: 1000px;
    max-width: 100%;
    box-shadow: 10px 10px 20px ${rgba("#000", 0.1)};
  }
`

export const Glasses = styled.div`
  width: ${rem(345)};
  position: absolute;
  top: ${rem(210)};
  left: ${rem(110)};

  img {
    max-width: 100%;
    transform: rotate(11deg);
    position: relative;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  @media all and (max-width: 767px) {
    width: 106px;
    top: 60px;
    left: 28px;
  }
`
