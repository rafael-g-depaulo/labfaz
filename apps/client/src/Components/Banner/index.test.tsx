
import Render from 'Utils/render'
import Banner from './'

it('renders header component', () => {
  expect(() => Render(
    <Banner
      title="LABFAZ"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at."
      hrefKnowMore="/about"
    />
  )).not.toThrow()
})

describe('Check content of Banner component', () => {
  const { getByText } = Render(
    <Banner
      title="LABFAZ"
      subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at."
      hrefKnowMore="/about"
    />
  );
  it('check render of title', () => {
    expect(getByText('LABFAZ')).toHaveTextContent('LABFAZ')
  })
  it('check render of subtitle', () => {
    const subtitle = getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta ligula nibh, nec interdum nunc maximus at.')
    expect(subtitle).toHaveTextContent('Lorem')
  })
  it('check link of know more', () => {
    expect(getByText('SAIBA MAIS').closest('a')).toHaveAttribute('href', '/about')
  })
})
