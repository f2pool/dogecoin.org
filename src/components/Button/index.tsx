import React from "react"
import { Link } from "gatsby"

import * as S from "./styled"

/**
 * Types
 */
interface ButtonProps {
  text?: React.ReactNode | string
  textColor?: S.Color
  icon?: React.ReactNode | string | null
  textFirst?: boolean
  backgroundColor?: S.BgColor
  layout?: S.Layout
  href?: string | null
  gatsbyLink?: boolean
  fullWidth?: boolean
  onClick?: Function | null
  anchor?: boolean
  bordered?: boolean
  as?: any // TODO
}

const Button: React.FC<ButtonProps> = ({
  text,
  textColor = "primary",
  icon = null,
  textFirst = false,
  backgroundColor = "transparent",
  bordered = false,
  layout = "initial",
  href = null,
  gatsbyLink = false,
  fullWidth = false,
  onClick = null,
  anchor = false,
  as = "button",
}: ButtonProps) => {
  const handleOnClick = (): void => {
    if (!onClick) return
    onClick()
  }

  if (gatsbyLink && href) {
    return (
      <S.Main
        textColor={textColor}
        backgroundColor={backgroundColor}
        layout={layout}
        $icon={icon !== null}
        $textFirst={textFirst}
        $fullWidth={fullWidth}
        $bordered={bordered}
        onClick={handleOnClick}
      >
        <Link to={href}>
          {icon}
          {text && <span>{text}</span>}
        </Link>
      </S.Main>
    )
  }

  return (
    <S.Main
      textColor={textColor}
      backgroundColor={backgroundColor}
      layout={layout}
      $icon={icon !== null}
      $textFirst={textFirst}
      $bordered={bordered}
      $fullWidth={fullWidth}
      {...(href && {
        as: "a",
        href: href,
      })}
      {...(href &&
        !anchor && {
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
