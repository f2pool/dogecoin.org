import styled from "styled-components"
import { rem } from "polished"
import { Row, Col } from "react-styled-flexboxgrid"

export const Header = styled.header`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  width: 100%;
  padding: ${rem(40)} 0;
`

export const Logo = styled.div`
  width: ${rem(88)};
  height: ${rem(88)};
  border-radius: 100px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.white};

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin-top: ${rem(5)};
    padding-top: ${rem(5)};
    pointer-events: none;
  }
`

export const SimpleHeaderRow = styled(Row)`
  ${Col} {
    text-align: center;
  }
  a {
    color: ${(props) => props.theme.colors.odd};
  }
`
