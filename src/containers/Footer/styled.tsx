import styled from "styled-components"
import { rem } from "polished"

export const Footer = styled.footer`
  position: relative;
  width: 100%;
  padding-top: ${rem(160)};
  overflow: hidden;
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
