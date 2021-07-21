import React, { FC } from 'react'

import { Image } from './style'
import LogoImagePink from './LABFAZPINK.png'
import LogoImageBlack from './LABFAZBLACK.png'

export interface LogoProps {
  color?: string
}
const Logo: FC<LogoProps> = ({ color = "pink"}) => {
  if(color === "black") return <Image src={LogoImageBlack} alt="logo"/>
  else return <Image src={LogoImagePink} alt="logo"/>
  
}

export default Logo
