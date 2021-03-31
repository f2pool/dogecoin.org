import styled from "styled-components"
import { rem } from "polished"
import { Row, Col } from "react-styled-flexboxgrid"

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`
export const RadiusWrapper = styled(Wrapper)`
  padding-top: ${rem(170)};
  border-radius: ${rem(63)} ${rem(63)} 0 0;
`
export const TabsTitles = styled.div`
  text-align: center;

  h4 {
    font-size: ${rem(31)};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color: ${(props) => props.theme.colors.primary};
  }
`
