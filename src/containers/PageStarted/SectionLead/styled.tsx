import styled from "styled-components"
import { rem } from "polished"
import { Col } from "react-styled-flexboxgrid"

export const Title = styled.h2`
  line-height: 0.95;
  letter-spacing: -5px;
  color: ${(props) => props.theme.colors.white};
`
export const Subtitle = styled.h3`
  font-size: ${rem(70)};
  line-height: ${rem(72)};
  letter-spacing: -2px;
  color: ${(props) => props.theme.colors.secondary};
`
export const ColWrapper = styled(Col)`
  text-align: center;
`
export const Wrapper = styled.section`
  padding: ${rem(120)} 0;
  background-color: ${(props) => props.theme.colors.accent};
`
