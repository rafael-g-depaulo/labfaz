import React, { FC } from 'react'
import { StaffObject } from 'Api/AboutUs'

import { Card, CardThumb, CardBody, Span, Circle } from '../styles'
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
        <Span fontSize='medium' fontWeight={700} color='pink' marginTop='0.5em' marginBottom='0.5em' > {name} </Span>
      </CardThumb>
      <CardBody>
        <Span fontSize='short' fontWeight={600} > {tag} </Span>
        <Text > {text} </Text>
      </CardBody>
    </Card>
  )

}

export default StaffCard
