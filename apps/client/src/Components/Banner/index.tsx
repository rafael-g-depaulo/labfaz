import React, { FC } from 'react'

import { Container, Title, Subtitle, KnowMoreButton } from './style'

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
        <Title> {title} </Title>
        <Subtitle> {subtitle} </Subtitle>
        {hrefKnowMore ? <KnowMoreButton to={hrefKnowMore}> SAIBA MAIS </KnowMoreButton> : <></>}
      </div>
    </Container>
  )
}
export default Banner
