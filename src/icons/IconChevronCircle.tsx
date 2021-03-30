import React from "react"

import SvgIcon from "../components/SvgIcon"

const IconChevronCircle = () => {
  return (
    <SvgIcon width="32" height="32" viewBox="0 0 32 32">
      <circle cx="16" cy="16" r="15" stroke="#00665E" stroke-width="2" />
      <path d="M9 13L16 20L23 13" stroke="#00665E" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </SvgIcon>
  )
}

export default IconChevronCircle
