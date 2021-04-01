import { rem } from "polished"
import styled from "styled-components"
import { Row, Col } from "react-styled-flexboxgrid"

export const Title = styled.h2`
  font-size: ${rem(70)};
  line-height: ${rem(72)};
  letter-spacing: -2px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    font-size: 30px;
    letter-spacing: -1.5px;
    line-height: 36px;
    margin-bottom: 20px;
  }
`

export const HeroRow = styled(Row)`
  margin-bottom: ${rem(24)};

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    margin-bottom: 20px;
  }
`

export const StepCol = styled(Col)`
  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    &:not(:last-child) {
      margin-bottom: ${rem(56)};
    }
  }
`
export const ShapesRow = styled(Row)`
  align-items: flex-start;
  margin-bottom: ${rem(120)};

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    margin-bottom: ${rem(64)};
  }
`

export const Wrapper = styled.section`
  padding: ${rem(120)} 0;

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    padding: 60px 0;
  }
`
