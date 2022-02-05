import { EntityRepository, Repository } from "typeorm"

import Course from "Entities/Courses"
import { SerializedCourse, ActivityType, Course as CourseClass } from "@labfaz/entities";

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

  serialize(course: Course): SerializedCourse {
    const {
      id,
      name,
      teacher,
      type,
      tags,
      detail,
      link,
      fonte,
      short_description,
      about,
      requirements,
      available,
      banner,
      has_subscription,
      subscription_start_date,
      subscription_finish_date,
      class_dates,
    } = course
    const nonSerializedCourse = new CourseClass({
      id,
      name,
      teachers: teacher,
      type,
      tags,
      details: detail,
      link,
      fontes: fonte,
      shortDescription: short_description,
      about,
      requirements,
      available,
      banner,
      hasSubscription: has_subscription,
      subscriptionStart: subscription_start_date,
      subscriptionFinish: subscription_finish_date,
      classDates: class_dates,
    })

    return nonSerializedCourse.serialize()
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
