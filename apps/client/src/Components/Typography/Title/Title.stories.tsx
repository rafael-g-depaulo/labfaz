import { Title } from './'

export default {
  title: 'Components/Title',

  parameters: {
    component: Title,
  },
}

const t = (level: 1 | 2 | 3 | 4 | 5 | 6) => {
  const story = () => (
    <Title 
      children="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
      porta ligula nibh, nec interdum nunc maximus at."
      level={level}
    />
  )
  
  story.story = {
    name: `Title h${level}`
  }

  return story  
}

export const titleh1 = t(1)
export const titleh2 = t(2)
export const titleh3 = t(3)
export const titleh4 = t(4)
export const titleh5 = t(5)
export const titleh6 = t(6)
