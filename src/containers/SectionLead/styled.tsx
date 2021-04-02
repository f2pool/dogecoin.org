import styled from "styled-components"
import { rem, rgba } from "polished"
import { rotateIn, popUp } from "../../config/styled/keyframes"

export const Title = styled.h1`
  text-align: center;
  letter-spacing: ${rem(-5)};
  margin-bottom: ${rem(160)};

  span {
    display: block;
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    font-size: 64px;
    letter-spacing: -2.72px;
    margin-bottom: 20px;
  }
`

export const Accent = styled.span``

export const Wrapper = styled.section`
  height: 100vh;
  padding: ${rem(140)} 0;

  > div {
    height: 100%;
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    height: auto;
    padding: 35px 0;
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

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    padding: 40px 0;
  }
`

export const Doge = styled.div`
  width: ${rem(637)};
  height: ${rem(637)};
  margin-left: auto;
  position: relative;

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    width: 180px;
    height: 180px;
    margin-right: auto;
    margin-bottom: 10px;
  }
`

export const Circle = styled.div`
  position: relative;
  pointer-events: none;
  font-size: 0;
  border-radius: 1000px;
  background-color: #e4d6ae;
  box-shadow: 10px 10px 20px ${rgba("#000", 0.1)};
  transform: scale(0.4);
  opacity: 0;
  will-change: transform, opacity;
  animation: 0.5s ${popUp} ease forwards 0.1s;

  img {
    border-radius: 1000px;
    width: 100%;
  }
`

export const Glasses = styled.div`
  width: ${rem(345)};
  position: absolute;
  top: ${rem(170)};
  left: ${rem(110)};
  will-change: transform, opacity;
  animation: 0.5s ${rotateIn} cubic-bezier(0.47, 1.64, 0.2, 0.8) forwards 0.1s;
  transform: scale(3) translate(-100%, 100%) rotate(20deg);
  opacity: 0;

  div {
    transition: all 400ms cubic-bezier(0.47, 1.64, 0.41, 0.8);

    &.react-draggable-dragging {
      transition: none;
    }
  }

  svg {
    z-index: 100;
    max-width: 100%;
    position: relative;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  @media all and (max-width: 767px) {
    width: 106px;
    top: 50px;
    left: 25px;
  }
`
