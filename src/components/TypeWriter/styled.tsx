import styled, { css } from "styled-components"
import { rem } from "polished"

interface TypeWriterProps {
  wordIndex: number
}
export const Wrapper = styled.div<TypeWriterProps>`
  position: relative;
  display: inline-block;
  padding: ${rem(10)} ${rem(40)} ${rem(20)} ${rem(30)};

  svg {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;

    path {
      transition: fill 0.3s ease;

      ${(props) =>
        props.wordIndex === 0 &&
        css`
          fill: ${(props) => props.theme.colors.secondary};
        `}

      ${(props) =>
        props.wordIndex === 1 &&
        css`
          fill: ${(props) => props.theme.colors.accent};
        `}

      ${(props) =>
        props.wordIndex === 2 &&
        css`
          fill: ${(props) => props.theme.colors.primary};
        `}

        ${(props) =>
        props.wordIndex === 3 &&
        css`
          fill: ${(props) => props.theme.colors.dark};
        `}
    }
  }

  .Typewriter__wrapper {
    color: ${(props) => props.theme.colors.white};
  }

  .Typewriter__cursor {
    display: none;
  }
`

export const Text = styled.div`
  display: inline-block;
  position: relative;
  z-index: 2;
`
