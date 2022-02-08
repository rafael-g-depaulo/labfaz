
export type Data = object | string
export type SuccessObject<T extends Data = object> = {
  status: "success"
  data: T
  code: number
}

export type ErrorObject<T extends Data = object> = {
  status: "error"
  code: number
  message: string
  data?: T
}

export type ResponseObject = ErrorObject | SuccessObject
