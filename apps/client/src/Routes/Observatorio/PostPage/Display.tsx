import React, {FC} from 'react'

import Wireframe from 'Components/Wireframe'
import Banner from 'Components/Banner'

import { ObservatorioBannerInfo } from 'Api/ObservatorioBannerInfo'
import { ObservatorioPost } from 'Api/ObservatorioPost'

import PostDetails from './PostDetails/Display'

export interface DisplayProps {
  data: ObservatorioBannerInfo;
  post: ObservatorioPost,
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
