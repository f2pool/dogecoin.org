import React from "react"
import { CustomGrid } from "../../core/GlobalStyles"

import * as S from "./styled"

interface SectionProps {
  children: JSX.Element | JSX.Element[] | Node
  as: any // TODO
}

const Section: React.FC<SectionProps> = ({ children, as, ...rest }: SectionProps) => {
  return (
    <S.Section as={as} {...rest}>
      <CustomGrid>{children}</CustomGrid>
    </S.Section>
  )
}

export default Section
