import React, {FC} from 'react'

import Wireframe from 'Components/Wireframe'
import Banner from 'Components/Banner'

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
    <Wireframe>
      <Banner title={title} subtitle={subtitle} align="left" />
      <PostDetails post={post}/>
    </Wireframe>
  )
}

export default Display
