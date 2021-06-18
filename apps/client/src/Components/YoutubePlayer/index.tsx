import React, { FC } from 'react'
import YouTube from 'react-youtube'

export interface YoutubePlayerProps {
  height?: number,
  width?: number,
  href: string,
}

export const YoutubePlayer: FC<YoutubePlayerProps> = ({
  height = 400,
  width = 1080,
  href,
}) => {
  let position, id;
  const options = {
    width: `${width}`,
    height: `${height}`,
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
    <YouTube
      videoId={id}
      opts={options}
    />
  )
}
