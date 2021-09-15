import React, { FC } from 'react'

// import { Banner, CourseInfo, CourseResume, ResumeInfo } from './styles'
import FullPage from "Components/FullPage"
import { Course } from 'Api/Courses'
import Banner from './Components/Banner'
import CourseInfo from "./Components/CourseInfo"
import CourseResume from "./Components/Resume"

import Header from 'Components/Header'
import Footer from 'Components/Footer'

interface MobileProps {
  course: Course
}

export const MobileCoursePage: FC<MobileProps> = ({ course }) => {

  return (
    <FullPage>
      <Header />
      <Banner img={course.data.banner} />
      <CourseInfo course={course} />
      <CourseResume 
        requirements={course.data.requirements} 
        about={course.data.about}/>
      <Footer />
    </FullPage>
  )
}

export default MobileCoursePage
