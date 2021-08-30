import React, { FC } from 'react'
import { Image } from 'Utils/Image'

import { Container, TitleBanner, Subtitle, KnowMoreButton } from './style'

export interface BannerProps {
  title: string,
  subtitle: string,
  hrefKnowMore?: string,
  align?: string
  image?: Image
}


export const Banner: FC<BannerProps> = ({
    title,
    subtitle,
    hrefKnowMore="",
    align='center',
    image,
  }) => {
    console.log("teste", title, image)
  return (
    <Container align={align} BgImage={image?.url}>
      <div>
        <TitleBanner level={1}> {title} </TitleBanner>
        <Subtitle level={2}> {subtitle} </Subtitle>
        {hrefKnowMore ? <KnowMoreButton href={hrefKnowMore}> SAIBA MAIS </KnowMoreButton> : <></>}
      </div>
    </Container>
  )
}
export default Banner
