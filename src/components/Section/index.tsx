import React from "react"
import { Grid } from "react-styled-flexboxgrid"

import * as S from "./styled"

interface SectionProps {
  children: JSX.Element | JSX.Element[] | Node
  as: any // TODO
}

const Section: React.FC<SectionProps> = ({ children, as, ...rest }: SectionProps) => {
  return (
    <S.Section as={as} {...rest}>
      <Grid>{children}</Grid>
    </S.Section>
  )
}

export default Section
