import NavigationLink from './NavigationLink'
import StyledLink from './StyledLink'

export default {
  title: 'Atoms/Link',

  parameters: {
    component: NavigationLink,
  },
}

export const _StyledLink = () => <StyledLink to=".">Styled Link</StyledLink>

_StyledLink.story = {
  name: 'StyledLink',
}

export const _NavigationLink = () => <NavigationLink to="/">Navigation Link</NavigationLink>

_NavigationLink.story = {
  name: 'NavigationLink',
}
