import React, {FC} from 'react'

import Header from 'Components/Header'
import Banner from 'Components/Banner'
import PostDetails from './PostDetails';
import { BlogBannerInfo } from 'Api/BlogBannerInfo'

export interface DisplayProps {
  data: BlogBannerInfo;
  id: string;
}

export const Display: FC<DisplayProps> = ({
  data, id,
}) => {
  const {title, subtitle} = data!
  return (
    <>
      <Header />
      <Banner title={title} subtitle={subtitle} align="left" />
      <PostDetails id={id}/>
    </>
  )
}

export default Display
