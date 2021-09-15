import React, { FC } from 'react'
import { BannerDiv, Image } from '../styles'


export interface BannerProps {
  img: string
}

export const Banner: FC<BannerProps> = ({ img }) => {

  const fallbackImage = "https://www.madrecor.com.br/wp-content/uploads/2016/10/orionthemes-placeholder-image.jpg"

  return (
    <BannerDiv>
      <Image src={img || fallbackImage} />
    </BannerDiv>
  )
}

export default Banner
