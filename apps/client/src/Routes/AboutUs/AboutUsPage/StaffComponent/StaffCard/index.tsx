import React, { FC } from 'react'
import { StaffObject } from 'Api/AboutUs'

import { Card, CardThumb, CardBody, Circle, ImageCircle } from '../styles'
import { Text } from "Components/Typography/Text"

interface StaffCardProps {
  data: StaffObject
}

export const StaffCard: FC<StaffCardProps> = ( {data} ) => {

  const { name, tag, text, image } = data!

  return(
    <Card>
      <CardThumb>
        <ImageCircle  image={image.url}/>
        <Circle  className='pink'/>
        <Text> {name} </Text>
      </CardThumb>
      <CardBody>
        <Text> {tag} </Text>
        <Text > {text} </Text>
      </CardBody>
    </Card>
  )

}

export default StaffCard
