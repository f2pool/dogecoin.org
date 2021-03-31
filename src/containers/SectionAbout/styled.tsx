import styled from "styled-components"
import { rem } from "polished"

export const Title = styled.h2`
  line-height: 0.95;
`

export const Text = styled.div`
  max-width: ${rem(816)};
  margin-left: auto;
  margin-right: auto;
`

export const LeadText = styled.div`
  font-size: ${rem(40)};
  margin-bottom: ${rem(48)};
`

const WrapperBase = styled.section`
  font-size: ${rem(24)};
  text-align: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
`

export const WrapperFirst = styled(WrapperBase)`
  border-radius: ${rem(63)} ${rem(63)} 0 0;
  padding-top: ${rem(106)};
`

export const WrapperLast = styled(WrapperBase)``

export const BannerContainer = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  padding: ${rem(80)} 0;
`

export const ImageStack = styled.div`
  background-color: ${(props) => props.theme.colors.primary};

  .ticker__element {
    padding: ${rem(24)} 0;

    img {
      border-radius: ${rem(8)};
    }
  }
`

export const HashtagStack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${rem(680)};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 4vh;
  flex-wrap: wrap;
`

export const Hashtag = styled.div`
  padding: ${rem(15)} ${rem(40)};
  margin: 0 ${rem(8)} ${rem(16)};
  border-radius: 100px;
  font-size: ${rem(25)};
  font-weight: bold;
`

export const Media = styled.div`
  margin: 0 auto ${rem(74)};
  width: ${rem(683)};
  overflow: hidden;
  border-radius: ${rem(12)};
  font-size: 0;

  img {
    border-radius: ${rem(12)};
    max-width: 100%;
  }
`
