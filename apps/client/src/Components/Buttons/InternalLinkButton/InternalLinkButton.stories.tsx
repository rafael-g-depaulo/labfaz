import { InternalLinkButton } from './'

export default {
  title: 'Components/InternalLinkButton',

  parameters: {
    component: InternalLinkButton,
  },
}

export const internalLinkButton = () => (
  <InternalLinkButton 
    href="https://google.com.br" 
    children="External Button"
  />
)
