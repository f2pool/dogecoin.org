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
        top: calc(50% + 8px);

        svg path {
          fill: ${props.theme.colors.mint};
          stroke: ${props.theme.colors.mint};
        }
      }
    `}
  ${(props) =>
    props.shapeType === "landing-copy" &&
    css`
      padding: 0 ${rem(2)};

      ${Shape} {
        svg {
          transform: rotate(45deg);
        }
        svg path {
          fill: ${props.theme.colors.secondary};
          stroke: ${props.theme.colors.secondary};
        }
      }
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

        svg {
          transform: rotate(24deg);
        }
        svg path {
          fill: ${props.theme.colors.mint};
          stroke: ${props.theme.colors.mint};
        }
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

        svg {
          transform: rotate(-12deg);
        }
        svg path {
          fill: ${props.theme.colors.odd};
          stroke: ${props.theme.colors.odd};
        }
      }
    `}
`
