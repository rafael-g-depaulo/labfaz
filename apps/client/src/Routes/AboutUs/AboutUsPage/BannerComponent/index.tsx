import React, { FC } from 'react'
import { BannerWrapper } from '../styles'
// import Text from "Components/Text"

export interface BannerProps {
  subtitle: string
}

export const Banner: FC<BannerProps> = ({ subtitle }) => {
  return (
    <BannerWrapper>
      <h1>Quem somos</h1>
      <p>{subtitle}</p>
    </BannerWrapper>
  )
}

export default Banner
