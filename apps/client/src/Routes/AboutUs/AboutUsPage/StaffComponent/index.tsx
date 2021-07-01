import React, { FC } from 'react'
import { StaffObject } from 'Api/AboutUs'

import { Card, CardThumb, CardBody, CardImage } from './styles'

import Text from 'Components/Text'






export const StaffCard: FC<StaffObject> = ( data ) => {

  const { name, tag, text, image } = data

  return(
    <Card>
      <CardThumb>
        <CardImage src={image.url} alt={image.alternativeText}/>
        <Text fontSize='medium'> {name} </Text>
      </CardThumb>
      <CardBody>
        <Text fontSize='short'> {tag} </Text>
        <Text fontSize='medium'> {text} </Text>
      </CardBody>
    </Card>
  )

}

export default StaffCard
