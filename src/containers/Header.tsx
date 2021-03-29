import React from "react"

import { useFormatMessages } from "../utils/hooks"

const Header: React.FC = () => {
  const [hello] = useFormatMessages([{ id: "HELLO_WORLD" }])

  return (
    <>
      <h2>{hello}</h2>
    </>
  )
}

export default Header
