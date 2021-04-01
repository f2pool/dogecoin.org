import styled, { css } from "styled-components"
import { rem } from "polished"

export type Layout = "initial" | "bold"

interface WrapperProps {
  layout?: Layout
}

export const Container = styled.div<WrapperProps>`
  ${(props) =>
    props.layout === "bold" &&
    css`
      transform: rotate(-3deg) scale(1.01);
      padding: ${rem(60)} 0;

      @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
        padding: 20px 0;
      }
    `}
`

export const Text = styled.div`
  padding-left: ${rem(80)};
  position: relative;

  &:after {
    content: "";
    width: ${rem(24)};
    height: ${rem(24)};
    position: absolute;
    left: ${rem(40)};
    top: 55%;
    border-radius: 100px;
    transform: translate(-50%, -50%);
    background-color: ${(props) => props.theme.colors.white};
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    &:after {
      width: 10px;
      height: 10px;
      top: 60%;
    }
  }
`

export const Wrapper = styled.div<WrapperProps>`
  padding: ${rem(35)} 0;
  line-height: 1;
  font-size: ${rem(48)};
  color: ${(props) => props.theme.colors.secondary};
  letter-spacing: ${rem(-1.09)};

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    font-size: 20px;
    font-weight: normal;
  }

  ${(props) =>
    props.layout === "bold" &&
    css`
      font-weight: bold;
      color: ${(props) => props.theme.colors.primary};
      background-color: ${(props) => props.theme.colors.secondary};
      font-size: ${rem(88)};

      .ticker {
        height: ${rem(88)} !important;
      }

      ${Text}:after {
        display: none;
      }

      @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
        font-size: 40px;
        font-weight: bold;

        .ticker {
          height: 40px !important;
        }
      }
    `}
`
