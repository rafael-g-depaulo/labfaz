import React, { FC } from 'react'
import { BannerDiv, Image } from '../styles'


export interface BannerProps {
  img: string
}

export const Banner: FC<BannerProps> = ({ img }) => {

  const fallbackImage = "https://upload.wikimedia.org/wikipedia/commons/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG"

  return (
    <BannerDiv>
      <Image src={img || fallbackImage} />
    </BannerDiv>
  )
}

export default Banner
