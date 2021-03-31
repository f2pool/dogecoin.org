import { rem } from "polished"
import styled from "styled-components"
import { Row, Col } from "react-styled-flexboxgrid"

export const Title = styled.h2`
  font-size: ${rem(70)};
  line-height: ${rem(72)};
  letter-spacing: -2px;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`
export const HeroRow = styled(Row)`
  margin-bottom: ${rem(24)};
`

export const StepShape = styled.div`
  width: ${rem(144)};
  height: ${rem(144)};
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    max-width: 100%;
    max-height: 100%;
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    flex-direction: column;
  }
`
export const StepTexts = styled.div`
  text-align: center;
  width: 90%;

  p {
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.colors.dark};
    opacity: 0.4;
    margin-bottom: ${rem(8)};
  }
  h3 {
    font-size: ${rem(32)};
    line-height: ${rem(36)};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 0;
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    p {
      margin-bottom: ${rem(0)};
    }
  }
`
export const StepCol = styled(Col)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${StepShape} {
    margin-bottom: ${rem(24)};
  }

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
`
