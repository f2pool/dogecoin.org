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
  margin-bottom: ${rem(48)};

  h4 {
    font-size: ${rem(31)};
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: ${rem(-4)};
  }
`
export const TabsButtons = styled.div`
  & > a:not(:last-child) {
    margin-bottom: ${rem(24)};
  }
  svg path {
    fill: ${(props) => props.theme.colors.white};
  }
`
export const TabsCol = styled(Col)`
  &:first-child {
    padding-right: ${rem(24)};
  }
  &:last-child {
    padding-left: ${rem(24)};
  }
`
