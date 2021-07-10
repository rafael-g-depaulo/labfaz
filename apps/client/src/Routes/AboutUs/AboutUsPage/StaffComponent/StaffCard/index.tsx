import React, { FC } from 'react'
import { StaffObject } from 'Api/AboutUs'

import { Card, CardThumb, CardBody, Circle } from '../styles'
import { Text } from "Components/Typography/Text"

interface StaffCardProps {
  data: StaffObject
}

export const StaffCard: FC<StaffCardProps> = ( {data} ) => {

  const { name, tag, text, image } = data!

  return(
    <Card>
      <CardThumb>
        <img src={image.url} alt={image.alternativeText}/>
        <Circle color='yellow'/>
        <Circle color='pink'/>
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
