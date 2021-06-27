import React, {FC} from 'react'

import Header from 'Components/Header'
import Banner from 'Components/Banner'
import { BlogBannerInfo } from 'Api/BlogBannerInfo'

export interface DisplayProps {
  data: BlogBannerInfo
}

export const Display: FC<DisplayProps> = ({
  data,
}) => {
  const {title, subtitle} = data!
  return (
    <>
      <Header />
      <Banner title={title} subtitle={subtitle} align="left" />
    </>
  )
}

export default Display
