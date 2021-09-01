import { EntityRepository, Repository } from "typeorm"

import Course from "Entities/Courses"

interface CreateCourseInterface {
  teacher: string[],
  type: "curso" | "live" | "oficina" | "roda de conversa",
  tags: string[],
  detail: string[]
  fonte: string[]
  short_description: string
  about: string,
  requirements: string,
  available: boolean,
  banner: string,
  has_subscription: boolean,
  subscription_start_date: Date,
  subscription_finish_date: Date,
  activity_date: Date,
  link: string
}

@EntityRepository(Course)
export class CourseRepository extends Repository<Course> {

  findById(id: string) {
    return this.findOne({
      where: { id },
    });
  }


  async createCourse(
    { 
      type, tags, detail, fonte, short_description, about, requirements, available, banner,
      has_subscription,subscription_start_date, subscription_finish_date, activity_date, link 
    } : CreateCourseInterface
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
      subscription_start_date,
      subscription_finish_date,
      link,
      activity_date,
    })

    await createcourse.save()

    return createcourse
  }

  findByType(type: string) {
    return this.findOne({
      where: { type }
    })
  }
}


export default CourseRepository
