import { EntityRepository, Repository } from "typeorm"

import Course from "Entities/Courses"

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {

  findById(id: string) {
    return this.findOne({
      where: { id },
    });
  }


  async createCourse(
    type: "curso" | "live" | "oficina" | "roda de conversa" , tags: string[], detail: string[], fonte: string[], short_description: string,
    about: string, requirements: string, available: boolean, banner: string, has_subscription: boolean,
    subscription_date: Date, activity_date: Date
    ) {

    const createcourse = this.create({
      type,
      tags,
      detail,
      fonte,
      short_description,
      about,
      requirements,
      available,
      banner,
      has_subscription,
      subscription_date,
      activity_date,
    })

    await createcourse.save()

    return createcourse
  }

  async getStudents(id: string) {
    const course = this.findOne({
      where: { id }
    })
    .then(course => {
      console.log(course?.students)
    })
    .catch(e => {
      console.log(e)
    })
    return course
  }
}


export default CourseRepository
