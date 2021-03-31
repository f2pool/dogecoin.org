import styled from "styled-components"
import { rem } from "polished"

export const Title = styled.h2`
  line-height: 0.95;
`

export const Text = styled.p`
  span {
    display: block;
  }
  span:not(:last-child) {
    margin-bottom: ${rem(24)};
  }
`

const WrapperBase = styled.section`
  font-size: ${rem(32)};
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`
export const WrapperFirst = styled(WrapperBase)`
  border-radius: ${rem(63)} ${rem(63)} 0 0;
  padding-top: ${rem(106)};
`
export const WrapperLast = styled(WrapperBase)`
  padding-bottom: ${rem(106)};
`

export const ImageStack = styled.div`
  padding: ${rem(96)} 0 ${rem(120)} 0;
  background-color: ${(props) => props.theme.colors.primary};
`

export const HashtagStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${rem(680)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10vh;
  flex-wrap: wrap;
`

export const Hashtag = styled.div`
  padding: ${rem(15)} ${rem(40)};
  margin: 0 ${rem(8)} ${rem(16)};
  border-radius: 100px;
  font-size: ${rem(25)};
  font-weight: bold;
`
