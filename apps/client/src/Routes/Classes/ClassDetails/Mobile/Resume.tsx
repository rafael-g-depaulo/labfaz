import React, { FC } from 'react'

import { ResumeInfoDiv } from './styles'

import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"


interface ResumeProps {
  requirements: string,
  about: string
}

export const Resume: FC<ResumeProps> = ({ requirements, about }) => {

  return (
    <ResumeInfoDiv>
      <Title> Sobre essa atividade </Title>
      <Text> { about } </Text>

      <Title> Requisitos </Title>
      <Text> { requirements } </Text>

    </ResumeInfoDiv>
  )
}

export default Resume;
