import styled from "styled-components"
import { rem, rgba } from "polished"

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  padding-top: ${rem(160)};
  overflow: hidden;

  h3 {
    color: ${(props) => props.theme.fontWeight.medium};
    font-size: ${rem(70)};
    color: ${(props) => props.theme.colors.background};
    text-align: center;
    line-height: ${rem(64)};
    max-width: ${rem(400)};
    margin: 0 auto ${rem(44)};
  }
`

export const Wrapper = styled.div`
  padding: 15vh 0;
  text-align: center;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
`

export const Banner = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`

export const Copy = styled.div`
  margin: ${rem(50)} 0;
  opacity: 0.4;
  font-size: ${rem(24)};
`

export const Relative = styled.div`
  position: relative;
`

export const Divider = styled.div`
  width: ${rem(100)};
  text-transform: uppercase;
  position: absolute;
  font-size: ${rem(24)};
  left: 100%;
  top: 20%;
  color: ${(props) => rgba(props.theme.colors.background, 0.43)};

  span {
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 50%;
    line-height: 1;
    margin-top: ${rem(-18)};
  }
`

export const ButtonRow = styled.div`
  margin: 0 auto ${rem(24)};
  width: ${rem(480)};
`

export const ShapesWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
  margin: ${rem(60)} 0;

  > div {
    padding: ${rem(10)};
    margin: 0 ${rem(20)};
  }

  svg {
    width: ${rem(40)};
    margin-right: 0;
  }
`
