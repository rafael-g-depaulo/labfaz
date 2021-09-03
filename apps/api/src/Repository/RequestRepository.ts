import { EntityRepository, Repository } from "typeorm"

import Request from "Entities/Requests"
import User from "Entities/User"
import Course from "Entities/Courses"

@EntityRepository(Request)
export class RequestRepository extends Repository<Request> {

  async createRequest(user: User, course: Course) {
    const createRequest = this.create({
      course,
      student: user
    })
    await createRequest.save()
      .then(request => {
        course.requests ??= []
        user.courses ??= []
        course.requests.push(request)
        user.courses.push(request)
      })
      .catch(err => {
        console.log(err)
      })   

    await user.save()
    await course.save()

    return createRequest
  }
}

export default RequestRepository
