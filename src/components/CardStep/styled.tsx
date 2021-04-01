import { rem } from "polished"
import styled from "styled-components"

export const ShapeWrapper = styled.div`
  position: relative;
  width: ${rem(144)};
  height: ${rem(144)};
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    width: 100%;
    max-height: 100%;
    position: relative;
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    flex-direction: column;
  }
`

export const TextWrapper = styled.div`
  text-align: center;

  p {
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.colors.dark};
    opacity: 0.4;
    margin-bottom: ${rem(15)};
    font-size: ${rem(17)};
    line-height: 1;
  }

  h3 {
    font-size: ${rem(32)};
    line-height: ${rem(36)};
    font-weight: ${(props) => props.theme.fontWeight.medium};
    color: ${(props) => props.theme.colors.primary};
    margin: 0 auto;
    max-width: ${rem(200)};
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    p {
      font-size: 12px;
      letter-spacing: 0.6px;
      line-height: normal;
      margin-bottom: 8px;
    }

    h3 {
      font-size: 20px;
      letter-spacing: -0.3px;
      max-width: none;
    }
  }
`

export const Icon = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  svg {
    width: ${rem(40)};
    margin-right: 0;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${ShapeWrapper} {
    margin-bottom: ${rem(24)};
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    ${ShapeWrapper} {
      margin-bottom: 16px;
    }
  }
`
