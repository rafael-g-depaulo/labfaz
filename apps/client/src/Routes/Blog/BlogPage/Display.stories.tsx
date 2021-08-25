import React from 'react'
import { storiesOf } from '@storybook/react'

import BlogPage from './Display'
import { BlogBannerInfo } from 'Api/BlogBannerInfo'
import { mockImage } from 'Utils/Image'
import { BlogPost } from 'Api/BlogPost'

const data: BlogBannerInfo = {
  title: "Blog",
  subtitle: "LoremIpsum",
  image: mockImage({
    url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Blog Banner Image",
  })
}

const post: BlogPost = {
  id: 1,
  content: "teste",
  description: "teste",
  image: mockImage({
    url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Blog Banner Image",
  }),
  title: "asd",
  created_at: "2021-07-01T00:26:59.154Z",
}

const fewPosts = Array.from({ length: 5 }, (_, i) => ({...post, title: `#${i} hello`}))
const manyPosts = Array.from({ length: 100 }, (_, i) => ({...post, title: `#${i} hello`}))

storiesOf("Pages/Blog", module)
  .addParameters({ component: BlogPage })
  .add("empty", () => <BlogPage data={data} posts={[]}/>)
  .add("few posts", () => <BlogPage data={data} posts={fewPosts}/>)
  .add("many posts", () => <BlogPage data={data} posts={manyPosts}/>)
