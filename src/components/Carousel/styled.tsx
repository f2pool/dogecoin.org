import styled from "styled-components"
import { rem } from "polished"

export const SlideWrapper = styled.div`
  display: block;
  width: ${rem(400)};
  height: ${rem(400)};
  margin-right: ${rem(24)};
  font-size: 0;
  transform: translate(0, 0);
  transition: transform 0.3s ease;

  &:hover {
    transform: translate(0, -5px);
  }

  @media all and (max-width: 767px) {
    margin-right: 8px;
  }
`
