import { EntityRepository, Repository } from "typeorm"

import Request from "Entities/Requests"
import User from "Entities/User"
import Course from "Entities/Courses"

@EntityRepository(Request)
export class RequestRepository extends Repository<Request> {

  async checkExistingRequest(courseId: string, UserId: string){
    return this.find({
      where: { 
        course: courseId,
        student: UserId
      }
    })
    .then(course => {
      if(course && course.length > 0) {        
        return true
      } else if(course && course.length == 0) {
        return false
      }
      return true
    })
    .catch(error => {
      return error
    }) 
  }


  async createRequest(user: User, course: Course) {

    const exists = await this.checkExistingRequest(course.id, user.id)


    if(!exists) {
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
          return err
        })
        
        try {
          await user.save()
        } catch(e) {
          return false
        }

        try {
          await course.save()
        } catch(e) {
          return false
        }
    
        return createRequest
    } else {
      return false
    }
  }
}

export default RequestRepository
