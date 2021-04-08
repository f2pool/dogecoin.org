import styled from "styled-components"
import { rem } from "polished"
import { Row, Col } from "react-styled-flexboxgrid"
import { CustomGrid } from "../../../core/GlobalStyles"
import Decor from "../../../components/Decor"

export const SectionWrapper = styled.div`
  position: relative;
`

export const Wrapper = styled.div`
  position: relative;
  overflow: visible;
  background-color: ${(props) => props.theme.colors.background};

  & > * {
    z-index: 2;
    position: relative;
  }

  &:not(:last-child) {
    ${CustomGrid} {
      padding-bottom: ${rem(160)};
    }
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    &:not(:last-child) {
      padding-bottom: 40px;
    }
  }
`
export const RadiusWrapper = styled(Wrapper)`
  padding-top: ${rem(170)};
  border-radius: ${rem(63)} ${rem(63)} 0 0;

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    padding-top: 60px;
    border-radius: 24px 24px 0 0;
  }
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

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    margin-bottom: 30px;

    p {
      font-size: 16px;
    }
  }
`

export const TabsButtons = styled.div`
  & > a:not(:last-child) {
    margin-bottom: ${rem(24)};
  }
  svg path {
    fill: ${(props) => props.theme.colors.white} !important;
  }

  a:hover {
    svg,
    img {
      opacity: 0.8;
      transition: all 0.3s ease;
    }
  }

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.sm}em`}) {
    a {
    }
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
      margin-bottom: 40px;
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
      margin-bottom: 16px;

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

    @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
      max-width: initial;
      padding: 0 6px;
      margin-bottom: 12px;
    }
  }
`

export const DecorWrapper = styled(Decor)`
  left: 0px;
  top: 4.5%;
  width: 100%;
  height: calc(100% + 2.5rem + 4.5%);

  @media all and (max-width: ${(props) => `${props.theme.flexboxgrid.breakpoints.md}em`}) {
    width: calc(100% + ${rem(80)});
    left: calc(${rem(80)} / -2);
  }
`
