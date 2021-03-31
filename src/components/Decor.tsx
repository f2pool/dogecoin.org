import styled, { css } from "styled-components"
import { shake } from "../config/styled/keyframes"

export interface Props {
  $width?: number | string
  $height?: number | string
  $transform?: number | string
  $animate?: boolean
  $speed?: number | string
  $delay?: number | string
}

const Decor = styled.div<Props>`
  position: absolute;
  width: ${(props) => props.$width ?? "auto"};
  height: ${(props) => props.$height ?? "auto"};
  transform: ${(props) => props.$transform ?? "none"};
  font-size: 0;
  line-height: 0;
  z-index: -1;

  svg {
    width: 100%;
    height: 100%;
  }

  ${(props) =>
    props.$animate &&
    css`
      transform: translate(0, 0) rotate(0deg);
      animation: ${`${props.$speed ?? 10}s`} ${shake} infinite linear ${`${props.$delay ?? 0}s`};
    `}
`

export default Decor
