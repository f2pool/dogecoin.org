import styled, { css } from "styled-components"

interface TypeWriterProps {
  wordIndex: number
}

// TODO: use svg background
export const Wrapper = styled.div<TypeWriterProps>`
  height: 137px; // TODO: use svg background default height

  ${(props) =>
    props.wordIndex === 0 &&
    css`
      background-color: ${(props) => props.theme.colors.secondary};
    `}
  ${(props) =>
    props.wordIndex === 1 &&
    css`
      background-color: ${(props) => props.theme.colors.accent};
    `}
  ${(props) =>
    props.wordIndex === 2 &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
    `}

  .Typewriter__wrapper {
    color: ${(props) => props.theme.colors.white};
  }
  .Typewriter__cursor {
    display: none;
  }
`
