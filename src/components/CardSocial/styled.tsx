import styled, { css } from "styled-components"
import { rem } from "polished"

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25% 0;
  border-radius: ${rem(32)};

  font-weight: ${(props) => props.theme.fontWeight.bold};
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};

  p {
    margin-bottom: 0;
  }

  svg {
    width: ${rem(40)};
  }
`

export const IconWrapper = styled.div`
  width: ${rem(96)};
  height: ${rem(96)};
  border: 2px solid rgba(255, 210, 3, 0.2);
  border-radius: ${rem(32)};

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: ${rem(24)};

  svg {
    width: ${rem(64)};
    margin-right: 0;
  }

  svg path {
    fill: ${(props) => props.theme.colors.secondary};
  }
`
