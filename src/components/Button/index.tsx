import React from "react"

import * as S from "./styled"

/**
 * Types
 */
interface ButtonProps {
  text: React.ReactNode | string
  textColor?: S.Color
  icon?: React.ReactNode | string | null
  textFirst?: boolean
  backgroundColor?: S.BgColor
  layout?: S.Layout
  href?: string | null
  fullWidth?: boolean
  onClick?: Function | null
  as?: any // TODO
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor = "primary",
  icon = null,
  textFirst = false,
  backgroundColor = "transparent",
  layout = "initial",
  href = null,
  fullWidth = false,
  onClick = null,
  as = "button",
}: ButtonProps) => {
  const handleOnClick = (): void => {
    if (!onClick) return
    onClick()
  }

  return (
    <S.Main
      textColor={textColor}
      backgroundColor={backgroundColor}
      layout={layout}
      $icon={icon !== null}
      $textFirst={textFirst}
      $fullWidth={fullWidth}
      {...(href && {
        as: "a",
        href: href,
        target: "_blank",
        rel: "noopener noreferrer",
      })}
      onClick={handleOnClick}
      as={!href ? as : "a"}
    >
      {icon}
      {text && <span>{text}</span>}
    </S.Main>
  )
}

export default Button
