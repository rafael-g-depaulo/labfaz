import React, { FC } from 'react'
import YouTube from 'react-youtube'

export interface YoutubePlayerProps {
  href: string,
}

export const YoutubePlayer: FC<YoutubePlayerProps> = ({
  href,
}) => {
  let position, id;
  
  const options = {
    width: '100%',
    height: '100%',
    playerVars: {},
  }

  if (href.substring(7,15) === "youtu.be") {
    position = href.lastIndexOf('be/')
    id = href.substr(position+3)
  } else if (href.substring(16,21) === "embed") {
    position = href.lastIndexOf('embed/')
    id = href.substr(position+6)
  } else {
    position = href.lastIndexOf('watch?v=')
    id = href.substr(position+8)
  }

  return (
    <YouTube videoId={id} opts={options}/>
  )
}
