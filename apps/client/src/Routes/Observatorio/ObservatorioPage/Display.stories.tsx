import React from 'react'
import { storiesOf } from '@storybook/react'

import ObservatorioPage from './Display'
import { ObservatorioBannerInfo } from 'Api/ObservatorioBannerInfo'
import { mockImage } from 'Utils/Image'
import { ObservatorioPost } from 'Api/ObservatorioPost'

const data: ObservatorioBannerInfo = {
  title: "Observatorio",
  subtitle: "LoremIpsum",
  image: mockImage({
    url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Observatorio Banner Image",
  })
}

const post: ObservatorioPost = {
  id: 1,
  content: "teste",
  description: "teste",
  image: mockImage({
    url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Observatorio Banner Image",
  }),
  title: "asd",
  created_at: "2021-07-01T00:26:59.154Z",
}

const fewPosts = Array.from({ length: 5 }, (_, i) => ({...post, title: `#${i} hello`}))
const manyPosts = Array.from({ length: 100 }, (_, i) => ({...post, title: `#${i} hello`}))

storiesOf("Pages/Observatorio", module)
  .addParameters({ component: ObservatorioPage })
  .add("empty", () => <ObservatorioPage data={data} posts={[]}/>)
  .add("few posts", () => <ObservatorioPage data={data} posts={fewPosts}/>)
  .add("many posts", () => <ObservatorioPage data={data} posts={manyPosts}/>)
