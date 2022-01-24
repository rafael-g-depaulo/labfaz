import { Data, ErrorObject, SuccessObject } from "Api"
import { AxiosError, AxiosResponse } from "axios"

export const throwApiError = <ErrorData extends Data = object> (err: any) => {
  throw (err.isAxiosError &&
  (err as AxiosError<ErrorObject<ErrorData>>).response?.data) ??
  { code: 520, status: "error", message: "unknown error" }
}

export const extractApiData = <T extends Data = object> (response: AxiosResponse<SuccessObject<T>>) => (response.data.data)
