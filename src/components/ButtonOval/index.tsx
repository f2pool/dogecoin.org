import React from "react"
import Button from "../Button"
import { Color } from "../Button/styled"

import * as S from "./styled"

import Oval from "../../assets/shapes/oval"

/**
 * Types
 */
interface OvalProps {
  text?: string | React.ReactNode
  textColor?: Color
  icon?: React.ReactNode | string | null
  shapeColor?: string
  shapeType?: S.ShapeType
  shapeRotate?: number | string
  anchor?: boolean
  href?: string | null
  onClick?: Function | null
}

const ButtonOval: React.FC<OvalProps> = ({
  text = "",
  textColor = "primary",
  icon = null,
  shapeType = "landing-copy",
  href = null,
  onClick = null,
  shapeColor,
  anchor = false,
  shapeRotate = 0,
}: OvalProps) => {
  const shape = shapeType === "video-play" || shapeType === "telegram" ? 1 : 3

  return (
    <S.Wrapper shapeType={shapeType}>
      <Button
        text={text}
        textColor={textColor}
        icon={icon}
        href={href}
        onClick={onClick}
        anchor={anchor}
        as={shapeType === "landing-copy" ? "a" : "button"}
      />
      <S.Shape>
        <Oval $type={shape} $color={shapeColor} $rotate={shapeRotate} />
      </S.Shape>
    </S.Wrapper>
  )
}

export default ButtonOval
