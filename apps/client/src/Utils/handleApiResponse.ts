import { Data, ErrorObject, SuccessObject } from "@labfaz/server-conn-info"
import { AxiosError, AxiosResponse } from "axios"

export const throwApiError = <ErrorData extends Data = object> (err: any) => {
  throw (err.isAxiosError &&
  (err as AxiosError<ErrorObject<ErrorData>>).response?.data) ??
  { code: 520, status: "error", message: "unknown error" }
}

export const extractApiData = <T extends Data = object> (response: AxiosResponse<SuccessObject<T>>) => (response.data.data)

export const extractStrapiData = <T extends Data = object> (response: AxiosResponse<T>) => (response.data)