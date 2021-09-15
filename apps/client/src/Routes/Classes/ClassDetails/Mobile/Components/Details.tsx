import React, { FC } from 'react'
import { CourseResumeDiv } from '../styles'

import { Title } from "Components/Typography/Title"
import List from "./List"

interface CourseResumeProps {
  isOpen: boolean,
  details: string[],
  teachers: string[],
  fonte: string[],
}

export const CourseResume: FC<CourseResumeProps> = ({isOpen, details, teachers, fonte}) => {

  return (
  <CourseResumeDiv 
    isVisible={isOpen}
    animate={{
      display: isOpen ? 'flex' : 'none',
      height: isOpen ? 'auto' : '0',
      transition: {
        type: 'spring',
        duration: 1.5
      }
    }}
    >
    <Title level={6} > Detalhes da atividade </Title>
    <List data={details}/>

    <Title level={6} > Profesores </Title>
    <List data={teachers}/>

    <Title level={6} > Quem está oferecendo esse curso? </Title>
    <List data={fonte}/>
  </CourseResumeDiv>
  )
}


export default CourseResume
