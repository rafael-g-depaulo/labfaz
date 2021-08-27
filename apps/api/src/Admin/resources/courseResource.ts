import Courses from '../../Entities/Courses'
import { ResourceWithOptions } from 'adminjs'
import { courseActions } from '../features/courseFeature'

const courseResource = (): ResourceWithOptions => ({
  resource: Courses,
  options: {
    listProperties: ["type", "tags", "available"],
    navigation: {
      name: "Labfaz Admin Panel"
    }
  },
  features: [courseActions()]
})

export default courseResource
