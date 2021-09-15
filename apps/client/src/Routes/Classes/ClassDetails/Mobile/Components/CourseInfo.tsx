import React, { FC, useState } from 'react'
import { Course } from "Api/Courses"

import { CourseInfoDiv, TagContainer, DrawerButton } from "../styles"

import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"
import Label from 'Components/Label'
import Details from "./Details"

import Button from "Routes/Classes/SubscriptionButton"

import { format } from 'date-fns'
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

interface CourseResumeProps {
  course: Course
}

export const CourseInfo: FC<CourseResumeProps> = ({ course }) => {

  const { data } = course
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CourseInfoDiv background_color={"rgba(12, 116, 255, 1)"}>
      <Title> {data.name} </Title>
      <Text> {data.short_description} </Text>
      <TagContainer>
        {data.tags.map(tag => {
          return <Label name={tag} image={undefined}/>
        }) }
      </TagContainer>
      <Button courseId={data.id} > INSCREVA-SE </Button>
      <Text> inscriçoes até {
      format(data.subscription_finish_date, "DD-MM-YYYY")
      .replace('-', '/')
      } </Text>

      <Details 
        isOpen={isOpen}
        details={course.data.detail}
        teachers={course.data.teacher}
        fonte={course.data.fonte}
      />

        <DrawerButton
          onClick={() => setIsOpen(!isOpen)}
        > {isOpen ? "Minimizar resumo" : "Abrir resumo"} 
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </DrawerButton>
    </CourseInfoDiv>
  )
}

export default CourseInfo
