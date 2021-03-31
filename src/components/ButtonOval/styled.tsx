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
  }

  svg path {
    width: 100%;
  }
`
export const Wrapper = styled.div<ShapeProps>`
  display: inline-block;
  position: relative;

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
    `}

  ${(props) =>
    props.shapeType === "twitter" &&
    css`
      padding: 0 ${rem(12)};

      img {
        max-width: 36px;
      }

      ${Shape} {
        top: calc(50% + 4px);
      }
    `}

  ${(props) =>
    props.shapeType === "telegram" &&
    css`
      padding: 0 ${rem(18)};

      img {
        max-width: 36px;
      }

      ${Shape} {
        top: calc(50% + 4px);
        left: 5px;
      }
    `}
`
