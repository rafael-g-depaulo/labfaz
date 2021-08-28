import Courses from '../../Entities/Courses'
import { ResourceWithOptions } from 'adminjs'
import { courseActions } from '../features/courseFeature'
import { Connection } from 'typeorm'
import CourseRepository from 'Repository/CourseRepository'

const courseResource = (conn: Connection): ResourceWithOptions => {

  const CoureRepo = conn.getCustomRepository(CourseRepository)

  return ({
    resource: Courses,
    options: {
      listProperties: ["type", "tags", "available"],
      navigation: {
        name: "Labfaz Admin Panel"
      }
    },
    features: [courseActions(CoureRepo)]
  })
}

export default courseResource
