import React, { FC, useMemo } from 'react'
import YouTube from 'react-youtube'

export interface YoutubePlayerProps {
  href: string,
}

export const urlRegex = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?(?<id>[^#&?]*).*/

const options = {
  width: '100%',
  height: '100%',
  playerVars: {},
}

export const YoutubePlayer: FC<YoutubePlayerProps> = ({
  href,
}) => {
  const id = useMemo(() => urlRegex.exec(href)?.groups?.id, [href])
  return (
    <YouTube videoId={id} opts={options}/>
  )
}

export default YoutubePlayer
