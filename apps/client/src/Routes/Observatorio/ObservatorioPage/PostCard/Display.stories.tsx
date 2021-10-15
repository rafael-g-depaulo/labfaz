import React from 'react'
import { storiesOf } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'

import { ObservatorioPost } from 'Api/ObservatorioPost'
import PostCardDisplay from './Display'
import { Image } from 'Utils/Image'
// import Web from './Web'
// import Mobile from './Mobile'

const samplePost: ObservatorioPost = {
  id: 1,
  title: "Teste de observatorio post",
  description: "Isso é um teste",
  created_at: "2021-06-29T23:50:54.596Z",
  image: {
    url:
    "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    // name: "imagem aleatória",
  } as Image,
  content: "Esse é o conteúdo do post!",
}
const posts = Array.from({ length: 4 }, () => samplePost)

storiesOf("Pages/Observatorio/PostCard", module)
  .addParameters({ component: PostCardDisplay })
  .add("responsive", () => <BrowserRouter><PostCardDisplay posts={posts}/></BrowserRouter>)
  // .add("web", () => <BrowserRouter><Web {...posts[0]} /></BrowserRouter>)
  // .add("mobile", () => <BrowserRouter><Mobile {...posts[0]}/></BrowserRouter>)
