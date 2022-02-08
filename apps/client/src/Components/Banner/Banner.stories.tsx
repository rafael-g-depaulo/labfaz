import Banner from './'

export default {
  title: 'Components/Banner',

  parameters: {
    component: Banner,
  },
}

export const bannerCenter = () => (
  <Banner
    title="LABFAZ"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta
    ligula nibh, nec interdum nunc maximus at."
    hrefKnowMore="/about"
  />
)

export const bannerLeft = () => (
  <Banner
    title="Blog"
    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
    align="left"
  />
)
