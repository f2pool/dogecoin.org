import styled from "styled-components"
import { rem } from "polished"
import { Row, Col } from "react-styled-flexboxgrid"

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.background};

  &:not(:last-child) {
    padding-bottom: ${rem(160)};
  }
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
  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    &:first-child {
      padding: 0;
    }
    &:last-child {
      padding: 0;
    }
  }
`
export const CardsContainerCol = styled(Col)`
  max-width: 100%;
`
export const CardsRow = styled(Row)`
  max-width: 100%;
  a {
    height: 100%;
  }

  ${Col} {
    margin-bottom: ${rem(40)};

    &:nth-child(odd) {
      padding-right: ${rem(24)};
    }
    &:nth-child(even) {
      padding-left: ${rem(24)};
    }

    @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
      &:nth-child(odd) {
        padding: 0;
      }
      &:nth-child(even) {
        padding: 0;
      }
    }
  }
`

export const SocialCardsRow = styled(Row)`
  justify-content: space-between;

  ${Col} {
    max-width: calc(100% / 3 - ${rem(24)});
    padding: 0;
    margin-bottom: ${rem(40)};
  }
`
