import Courses from '../../Entities/Courses'
import { ResourceWithOptions } from 'adminjs'
import { courseActions } from '../features/courseFeature'
import { Connection } from 'typeorm'
import RequestRepository from 'Repository/RequestRepository'

const courseResource = (conn: Connection): ResourceWithOptions => {

  const ReqestRepo = conn.getCustomRepository(RequestRepository)

  return ({
    resource: Courses,
    options: {
      listProperties: ["type", "name", "available"],
      navigation: {
        name: "Labfaz Admin Panel"
      }
    },
    features: [courseActions(ReqestRepo)]
  })
}

export default courseResource
