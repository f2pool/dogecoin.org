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
    `}
`

export const Text = styled.div`

  padding-left: ${rem(30)};
  position: relative;
`

export const Wrapper = styled.div<WrapperProps>`
  padding: ${rem(35)} 0;
  line-height: 1;
  font-size: ${rem(48)};
  color: ${(props) => props.theme.colors.secondary};
  letter-spacing: ${rem(-1.09)};

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

      @media all and (max-width: 767px) {
        font-size: 40px;

        .ticker {
          height: 40px !important;
        }
      }
    `}
`
