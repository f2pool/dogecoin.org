import styled, { css } from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export type ShapeType = "landing-copy" | "video-play" | "telegram" | "twitter"

interface ShapeProps {
  shapeType?: ShapeType
}

export const Shape = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(0, -50%, 0);
  z-index: -1;
  width: 100%;

  svg {
    min-width: 100%;
    transform: scale(1) rotate(0deg);
    transition: transform 1s ease;
  }
`
export const Wrapper = styled.div<ShapeProps>`
  display: inline-block;
  position: relative;

  > a,
  > button {
    transform: scale(1) !important;
  }

  &:hover ${Shape} svg {
    transform: scale(1.01) rotate(160deg) !important;
  }

  ${(props) =>
    props.shapeType === "video-play" &&
    css`
      padding: 0 ${rem(6)};

      ${Shape} {
        top: calc(50% + 3px);
      }
    `}

  ${(props) =>
    props.shapeType === "landing-copy" &&
    css`
      padding: 0 ${rem(2)};

      &:hover ${Shape} svg {
        transform: scale(1.01) rotate(-10deg) !important;
      }
    `}

  ${(props) =>
    props.shapeType === "twitter" &&
    css`
      &:hover ${Shape} svg {
        transform: scale(1.01) rotate(-10deg) !important;
      }
    `}

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    > a,
    > button {
      padding: 9px 20px;
    }
  }
`
