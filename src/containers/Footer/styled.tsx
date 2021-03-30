import styled from "styled-components"
import { rem } from "polished"

export const Footer = styled.footer`
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: ${rem(40)} 0;
  text-align: center;
  background-color: ${(props) => props.theme.colors.dark};
  color: ${(props) => props.theme.colors.white};
`
