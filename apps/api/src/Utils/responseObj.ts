import { Response } from "express"

export type ErrorObject = {
  status: "error"
  code: number
  message: string
  data?: object
}

export type Data = object
export type SuccessObject = {
  status: "success",
  data: Data
}

export type ResponseObject = ErrorObject | SuccessObject

export type ErrorObjFn = (code: number, message: string, data?: object) => ErrorObject
export type SuccessObjFn = (code: number, data: Data) => SuccessObject

export const ErrorObj: ErrorObjFn = (code, message, data) => ({
  code,
  status: "error",
  message,
  data
})

export const SuccessObj: SuccessObjFn = (code, data) => ({
  status: "success",
  code,
  data,
})

export const errorReturn = (errorCode: number) => (res: Response, message: string, data?: object) => {
  return res
    .status(errorCode)
    .json(ErrorObj(errorCode, message, data))
}

export const successfulReturn = (status: number) => (res: Response, data: Data) => {
  return res
    .status(status)
    .json(SuccessObj(status, data))
}
