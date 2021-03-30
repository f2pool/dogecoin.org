import styled from "styled-components"
import { rem, rgba } from "polished"

export const Title = styled.h2``

export const Wrapper = styled.section`
  padding: ${rem(106)} 0;
  font-size: ${rem(32)};
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${rem(63)} ${rem(63)} 0 0;
`
