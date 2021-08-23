import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { render } from '@testing-library/react'


import { mockImage } from 'Utils/Image'

import Display from "./RecoverPage/Display"

const image = mockImage({
  url: "https://images.fineartamerica.com/images-medium-large/reflections-of-longs-peak-vertical-image-james-bo-insogna.jpg",
  alternativeText: "string",
  caption: "string",
  width: 640,
  height: 640,
  ext: "png"
})

const data = {
  image: image
}

it('Should render Password recover display properly', () => {
  expect(() => render(
    <BrowserRouter>
      <Display image={data} />
    </BrowserRouter>
  )).not.toThrow()
})
