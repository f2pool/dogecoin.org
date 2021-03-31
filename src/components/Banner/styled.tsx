import styled from "styled-components"
import { rem } from "polished"

export const Container = styled.div`
  transform: rotate(-3deg) scale(1.01);
  padding: ${rem(100)} 0;
`

export const Wrapper = styled.div`
  padding: ${rem(35)} 0;
  font-size: ${rem(88)};
  line-height: 1;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};

  .ticker {
    height: ${rem(88)} !important;
  }
`

export const Text = styled.div`
  margin-right: ${rem(80)};
`
