import { EntityRepository, Repository } from "typeorm"

import Request from "Entities/Requests"
import User from "Entities/User"
import Course from "Entities/Courses"

@EntityRepository(Request)
export class RequestRepository extends Repository<Request> {

  checkExistingRequest(courseId: string, UserId: string): Promise<boolean> {
    return this.find({
      where: { 
        course: courseId,
        student: UserId
      }
    })
    .then(course => course.length !== 0)
  }

  getRequest({ userId, courseId }: { userId: User["id"], courseId: Course["id"]}) {
    return this.findOne({
      where: { 
        course: courseId,
        student: userId
      },
      loadEagerRelations: false,
      loadRelationIds: false,
    })
  }


  async createRequest(user: User, course: Course) {
    try {
      const exists = await this.checkExistingRequest(course.id, user.id)
      if (exists) return null

      const createRequest = this.create({
        course,
        student: user
      })

      return createRequest.save()
    } catch {
      return null
    }
  }
}

export default RequestRepository
