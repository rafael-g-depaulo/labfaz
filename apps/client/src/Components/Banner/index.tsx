import React, { FC } from 'react'
import { Link } from 'react-router-dom'

import { Container } from './style'

export interface BannerProps {
  title: string,
  subtitle: string,
  hrefKnowMore?: string,
  align?: string,
  height: number
}


export const Banner: FC<BannerProps> = ({
    title,
    subtitle,
    hrefKnowMore="",
    align='center',
    height
  }) => {
  return (
    <Container height={height} align={align}>
      <div>
        <h1> {title} </h1>
        <h2> {subtitle} </h2>
        {hrefKnowMore ? <Link to={hrefKnowMore}> SAIBA MAIS </Link> : <></>}
      </div>
    </Container>
  )
}
export default Banner
