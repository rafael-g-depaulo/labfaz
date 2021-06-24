import React, { FC } from 'react'
import { Wrapper } from '../styles'
import Text from "Components/Text"

export interface BannerProps {
  subtitle: string
}

export const Banner: FC<BannerProps> = ({ subtitle }) => {
  return (
    <Wrapper>
      <h1>Quem somos</h1>
      <Text>
        {subtitle}
      </Text>
    </Wrapper>
  )
}

export default Banner
