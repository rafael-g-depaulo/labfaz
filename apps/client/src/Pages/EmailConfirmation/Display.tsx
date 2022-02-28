import useMobile from "Hooks/useMobile"
import { FC } from "react"

import Web from "./Web"
import Mobile from "./Mobile"

export const Display: FC = () => {
  const isMobile = useMobile()
  return (
    isMobile ? <Mobile /> : <Web />
  )
}

export default Display
