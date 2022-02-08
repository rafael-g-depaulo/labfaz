import YoutubePlayer from '.'

export default {
  title: 'Components/Youtube Player',

  parameters: {
    component: YoutubePlayer,
  },
}

export const defaultUrl = () => (
  <YoutubePlayer href="https://www.youtube.com/watch?v=j7JWHrZNvjY" />
)
defaultUrl.story = {
  name: 'default url',
}

export const shareUrl = () => (
  <YoutubePlayer href="https://youtu.be/j7JWHrZNvjY" />
)
shareUrl.story = {
  name: 'share url',
}
