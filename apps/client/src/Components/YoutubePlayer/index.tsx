import React from 'react'
import YouTube from 'react-youtube';

export const YoutubePlayer = ({...props}) => {

  let position, id;
  const optsWidthHeight = {
    width: props.width,
    height: props.height,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  }
  const optsWidth = {
    width: props.width,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  }

  const optsHeight = {
    height: props.height,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  }

  const optsDefault = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
    },
  }

  if (props.href.substring(7,15) === "youtu.be") {
    position = props.href.lastIndexOf('be/')
    id = props.href.substr(position+3)
  } else if (props.href.substring(16,21) === "embed") {
    position = props.href.lastIndexOf('embed/')
    id = props.href.substr(position+6)
  } else {
    position = props.href.lastIndexOf('watch?v=')  
    id = props.href.substr(position+8)
  }
  return (
    <YouTube
      videoId={id}
      opts={
        props.width ? 
          (props.height ? optsWidthHeight : optsWidth) : 
          (props.height ? optsHeight : optsDefault)
      } 
    />
  )
}
