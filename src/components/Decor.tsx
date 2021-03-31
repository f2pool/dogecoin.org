import styled from "styled-components"

export interface Props {
  $width?: number | string
  $height?: number | string
  $transform?: number | string
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
`

export default Decor
