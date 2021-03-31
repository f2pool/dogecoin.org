import styled, { css } from "styled-components"
import { rem } from "polished"

export type CardColor = "accent" | "black" | "secondary"

export const ArrowWrapper = styled.div``
export const OvalWrapper = styled.div``

export const IconGroup = styled.div`
  position: relative;
  display: inline-block;
  margin-top: ${rem(16)};

  ${ArrowWrapper} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${rem(120)} 10% ${rem(88)} 10%;
  border-radius: ${rem(32)};

  font-size: ${rem(31)};
  line-height: ${rem(36)};
  letter-spacing: -0.5px;
  font-weight: ${(props) => props.theme.fontWeight.bold};
  text-align: center;

  ${OvalWrapper} {
    transition: transform 0.3s ease;
  }

  ${(props) =>
    props.color === "accent" &&
    css`
      color: ${props.theme.colors.odd};
      background-color: ${props.theme.colors.accent};

      ${ArrowWrapper} {
        svg path {
          fill: ${props.theme.colors.odd};
        }
      }
      ${OvalWrapper} {
        transform: translate3d(-6px, 4px, 0);

        &:hover {
          transform: scale(1.02) translate3d(-6px, 4px, 0) rotate(3deg);
        }
      }
    `}

  ${(props) =>
    props.color === "black" &&
    css`
      color: ${props.theme.colors.white};
      background-color: ${props.theme.colors.black};

      ${ArrowWrapper} {
        svg path {
          fill: ${props.theme.colors.white};
        }
      }
      ${OvalWrapper} {
        transform: translate3d(-4px, 4px, 0);

        &:hover {
          transform: scale(1.02) translate3d(-4px, 4px, 0) rotate(-6deg);
        }
      }
    `}

  ${(props) =>
    props.color === "secondary" &&
    css`
      color: ${props.theme.colors.primary};
      background-color: ${props.theme.colors.secondary};

      ${OvalWrapper} {
        transform: translate3d(-4px, 4px, 0);

        &:hover {
          transform: scale(1.026) translate3d(-4px, 4px, 0) rotate(-10deg);
        }
      }
    `}
`
