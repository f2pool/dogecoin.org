import styled from "styled-components"
import { rem } from "polished"

export const Title = styled.h2``

export const Text = styled.p`
  span {
    display: block;
  }
  span:not(:last-child) {
    margin-bottom: ${rem(24)};
  }
`

export const Wrapper = styled.section`
  padding: ${rem(106)} 0;
  font-size: ${rem(32)};
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border-radius: ${rem(63)} ${rem(63)} 0 0;
`

export const ImageStack = styled.div`
  margin: 20vh 0;
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
