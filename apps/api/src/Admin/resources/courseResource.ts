import Courses from '../../Entities/Courses'
import { ResourceWithOptions } from 'adminjs'

const courseResource = (): ResourceWithOptions => ({
  resource: Courses,
  options: {
    listProperties: ["type", "tags", "available"],
    navigation: {
      name: "Labfaz Admin Panel"
    }
  }
})

export default courseResource
