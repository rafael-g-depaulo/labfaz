import React, { FC } from 'react'

import { YoutubePlayer } from 'Components/YoutubePlayer'


export interface YoutubePlayerResponsiveProps {
  width: number,
  href: string,
}

export const YoutubePlayerResponsive: FC<YoutubePlayerResponsiveProps> = ({
  width, href
}) => {

  if(width >= 768 && width <= 844) {
    return (
      <YoutubePlayer
        href={href}
        width={400}
        height={200}
      /> )
  } else if (width > 844 && width <= 1080) {
    return (
      <YoutubePlayer
        href={href}
        width={500}
        height={300}
      />
    )
  } else {
    return (
      <YoutubePlayer
        href={href}
        width={500}
      />
    )
  }
}

export default YoutubePlayerResponsive
