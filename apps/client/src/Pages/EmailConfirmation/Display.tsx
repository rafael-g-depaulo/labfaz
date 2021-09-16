import useMobile from "Hooks/useMobile"
import React, { FC } from "react"

import Web from "./Web"
import Mobile from "./Mobile"
import Wireframe from "Components/Wireframe"

export const Display: FC = () => {
  const isMobile = useMobile()
  return (
    <Wireframe>
      { isMobile ? <Mobile /> : <Web />}
    </Wireframe>
  )
}

export default Display
