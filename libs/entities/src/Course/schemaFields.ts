import { array, boolean, mixed, string, date } from "yup"
import { ActivityType } from "./enums"

// fields
export const id = string().min(10).max(10) //.uuid()
export const name = string().min(6)
export const short_description = string()
export const requirements = string()
export const available = boolean()
export const banner = string()
export const about = string()
export const link = string()
export const has_subscription = boolean()
export const subscription_start = date()
export const subscription_finish = date()

export const class_dates = array().of(date())

export const teachers = array().of(string())
export const tags = array().of(string())
export const details = array().of(string())
export const fontes = array().of(string())

export const type = mixed<ActivityType>()
  .oneOf(Object.values(ActivityType))
