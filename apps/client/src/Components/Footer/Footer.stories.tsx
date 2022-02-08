import Footer from '.'

export default {
  title: 'Components/Footer',

  parameters: {
    component: Footer,
  },
}

export const footer = () => (
  <Footer />
)

footer.story = {
  name: 'footer',
}
