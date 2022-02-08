import { ExternalLinkButton } from './'

export default {
  title: 'Components/ExternalLinkButton',

  parameters: {
    component: ExternalLinkButton,
  },
}

export const externalLinkButton = () => (
  <ExternalLinkButton 
    href="https://google.com.br" 
    children="External Button"
  />
)
