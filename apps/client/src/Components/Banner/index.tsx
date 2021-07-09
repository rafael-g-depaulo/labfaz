import React, { FC } from 'react'

import { Container, TitleBanner, Subtitle, KnowMoreButton } from './style'

export interface BannerProps {
  title: string,
  subtitle: string,
  hrefKnowMore?: string,
  align?: string
}


export const Banner: FC<BannerProps> = ({
    title,
    subtitle,
    hrefKnowMore="",
    align='center'
  }) => {
  return (
    <Container align={align}>
      <div>
        <TitleBanner level={1}> {title} </TitleBanner>
        <Subtitle level={2}> {subtitle} </Subtitle>
        {hrefKnowMore ? <KnowMoreButton href={hrefKnowMore}> SAIBA MAIS </KnowMoreButton> : <></>}
      </div>
    </Container>
  )
}
export default Banner
