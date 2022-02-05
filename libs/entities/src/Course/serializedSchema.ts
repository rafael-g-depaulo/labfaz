import { Asserts, object } from "yup"
import * as Field from "./schemaFields"

// serialized course
export interface SerializedCourse extends Asserts<typeof courseSchema> {}
export const courseSchema = object({
  id: Field.id.required(),
  name: Field.name.required(),
  teachers: Field.teachers.required(),
  type: Field.type.required(),
  tags: Field.tags.required(),
  details: Field.details.required(),
  link: Field.link.required(),
  fontes: Field.fontes.required(),
  shortDescription: Field.short_description.required(),
  about: Field.about.required(),
  requirements: Field.requirements,
  available: Field.available.required(),
  banner: Field.banner.required(),
  hasSubscription: Field.has_subscription.required(),
  subscriptionStart: Field.subscription_start,
  subscriptionFinish: Field.subscription_finish,
  classDates: Field.class_dates.required(),
})
