import React, {FC} from 'react'

import Header from 'Components/Header'
import Banner from 'Components/Banner'
import Footer from 'Components/Footer'

import { BlogBannerInfo } from 'Api/BlogBannerInfo'
import { BlogPost } from 'Api/BlogPost'

import PostDetails from './PostDetails/Display'

export interface DisplayProps {
  data: BlogBannerInfo;
  post: BlogPost,
}

export const Display: FC<DisplayProps> = ({
  data, post,
}) => {
  const { title, subtitle } = data
  return (
    <>
      <Header />
      <Banner title={title} subtitle={subtitle} align="left" />
      <PostDetails post={post}/>
      <Footer />
    </>
  )
}

export default Display
