import React, { FC } from 'react'
import { BannerDiv, Image } from './styles'


export interface BannerProps {
  img: string
}

export const Banner: FC<BannerProps> = ({ img }) => {

  console.log(img)

  return (
    <BannerDiv>
      <Image src={img} />
    </BannerDiv>
  )
}

export default Banner
