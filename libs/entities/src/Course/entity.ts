import { SerializedCourse, courseSchema } from "./serializedSchema"
import { Entity } from "../Entity"

import { ActivityType } from "./enums"

export class Course extends Entity<typeof courseSchema, SerializedCourse> implements SerializedCourse {
  id!: string
  name!: string
  teachers!: string[]
  type!: ActivityType
  tags!: string[]
  details!: string[]
  link!: string
  fontes!: string[]
  shortDescription!: string
  about!: string
  requirements!: string
  available!: boolean
  banner!: string
  hasSubscription!: boolean
  subscriptionStart!: Date
  subscriptionFinish!: Date
  classDates!: Date[]
}
