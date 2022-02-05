import { SerializedCourse } from "../serializedSchema"
import { ActivityType } from "../enums"

export type GetCoursesByTypeReturn = { [t in ActivityType]: SerializedCourse[] }
