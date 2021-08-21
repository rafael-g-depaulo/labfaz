import { Response } from "express"

export type ErrorObject = {
  status: "error"
  code: number
  message: string
  data?: object
}

export type Data = object | string
export type SuccessObject = {
  status: "success",
  data: Data
  code: number
}

export type ResponseObject = ErrorObject | SuccessObject

export type ErrorObjFn = (code: number, message: string, data?: object) => ErrorObject
export type SuccessObjFn = (code: number, data: Data) => SuccessObject

export const ErrorObj: ErrorObjFn = (code, message, data) => {
  const baseErrorObj: ErrorObject = {
    code,
    status: "error",
    message,
  } 

  if (!data) return baseErrorObj
  return { ...baseErrorObj, data }
}

export const SuccessObj: SuccessObjFn = (code, data) => ({
  status: "success",
  code,
  data,
})

export type errorReturnFn = (res: Response, message: string, data?: object) => Response
export const errorReturn = (errorCode: number): errorReturnFn => (res, message, data) => {
  return res
    .status(errorCode)
    .json(ErrorObj(errorCode, message, data))
}

export type successReturnFn = (res: Response, data: Data) => Response
export const successfulReturn = (status: number) => (res: Response, data: Data) => {
  return res
    .status(status)
    .json(SuccessObj(status, data))
}
