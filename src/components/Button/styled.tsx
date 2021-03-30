import styled, { css } from "styled-components"
import { rem } from "polished"

/**
 * Types
 */
export type Color = "primary" | "accent" | "white"
export type BgColor = "background" | "odd" | "white" | "mint" | "transparent"
export type Layout = "initial" | "space-between" | "center"

interface ButtonProps {
  textColor: Color
  backgroundColor: BgColor
  layout: Layout
  $icon: boolean
  $textFirst: boolean
  $fullWidth: boolean
}

export const Icon = styled.img`
  &:only-child {
    margin-right: 0;
  }
`

export const Main = styled.button<ButtonProps>`
  --padding-horizontal: ${(props) => (props.$icon && props.$fullWidth ? rem(36) : rem(12))};
  --padding-vertical: ${rem(30)};

  font-size: ${(props) => (props.$icon && props.$fullWidth ? rem(31) : rem(25))};
  font-weight: ${(props) => props.theme.fontWeight.bold};
  line-height: 1;
  letter-spacing: -0.5px;
  color: ${(props) => props.theme.colors.primary};

  padding: var(--padding-horizontal) var(--padding-vertical);
  border-radius: ${rem(32)};

  display: flex;
  align-items: center;

  width: ${(props) => (props.$fullWidth ? "100%" : "auto")};

  &:is(button) {
    cursor: pointer;
  }

  // bg and text colors
  ${(props) =>
    props.backgroundColor === "white" &&
    css`
      background-color: ${props.theme.colors.white};
    `}
  ${(props) =>
    props.backgroundColor === "mint" &&
    css`
      background-color: ${props.theme.colors.mint};
    `}
  ${(props) =>
    props.backgroundColor === "background" &&
    props.textColor !== "accent" &&
    css`
      background-color: ${props.theme.colors.background};
    `}
  ${(props) =>
    props.backgroundColor === "background" &&
    props.textColor === "accent" &&
    css`
      color: ${props.theme.colors.accent};
      background-color: ${props.theme.colors.background};
    `}
  ${(props) =>
    props.backgroundColor === "odd" &&
    css`
      color: ${props.theme.colors.accent};
      background-color: ${props.theme.colors.odd};
    `}

  // icons
  ${(props) =>
    props.$icon &&
    css`
      ${Icon}:not(:only-child) {
        margin-right: ${rem(16)};
      }
    `}

  // layouts
  ${(props) =>
    props.$fullWidth &&
    props.layout === "center" &&
    css`
      justify-content: center;
      position: relative;

      @media all and (min-width: 321px) {
        ${Icon} {
          position: absolute;
          left: var(--padding-vertical);
        }
      }
    `}
  ${(props) =>
    props.layout === "space-between" &&
    css`
      justify-content: space-between;
    `}
  ${(props) =>
    props.$textFirst &&
    props.$icon &&
    css`
      flex-direction: row-reverse;
    `}
`
