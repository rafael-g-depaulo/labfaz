import { AxiosRequestConfig } from "axios";
import { AnyObjectSchema } from "yup";
import deepMerge from "./deepMerge";

const isFile = (value: any): value is File => 'File' in window && value instanceof File

const multipartFormConfig: AxiosRequestConfig<FormData> = {
  headers: { 'Content-Type': 'multipart/form-data' }
}

// example usage:
// api.post("/route", ...multipartForm(jsonData))
export const multipartForm = <
  FormSchema extends AnyObjectSchema,
  FormInfo extends FormSchema["__outputType"]
>(formData: FormInfo, config?: AxiosRequestConfig<FormData>): [FormData, AxiosRequestConfig<FormData>] => {
  const data = new FormData()

  for (const propKey in formData) {
    const propValue: any = formData[propKey as keyof FormInfo]
    if (isFile(propValue))
      data.append(propKey, propValue)
    else data.append(propKey, `${propValue}`)
  }

  return [data, deepMerge(multipartFormConfig, config ?? {})]
}
