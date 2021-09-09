import { EntityRepository, Repository } from "typeorm"

import Course, { ActivityType } from "Entities/Courses"

interface CreateCourseInterface {
  name: string
  teacher: string[],
  type: ActivityType,
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
  class_dates: Date[],
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
      name, type, tags, detail, fonte, short_description, about, requirements, available, banner,
      has_subscription,subscription_start_date, subscription_finish_date, class_dates, link 
    } : CreateCourseInterface
    ) {

    const createcourse = this.create({
      name,
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
      class_dates,
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
