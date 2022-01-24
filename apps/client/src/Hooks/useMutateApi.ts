import { ErrorObject } from "Api"
import { AxiosError } from "axios"
import { MutationFunction, useMutation, UseMutationOptions } from "react-query"

type erroredResponse<T> = {
  error: T,
  data: undefined,
  isLoading: false,
  status: "error"
}

type loadingResponse = {
  error: null,
  data: undefined,
  isLoading: true,
  status: "loading"
}

type sucessfulResponse<T> = {
  error: null,
  data: T,
  isLoading: false,
  status: "success"
}

export type mutateHookResponse<D, E> = erroredResponse<E> | loadingResponse | sucessfulResponse<D>
type DefaultError = AxiosError<ErrorObject>

// D: Data
// E: Error
// V: Variables
// C: Context
export const useMutateApi = <D, E = DefaultError, V = unknown, C = unknown> (key: string, mutation: MutationFunction<D, V>, options: UseMutationOptions<D, E, V, C> = {}) => {
  return useMutation<D, E, V, C>(key, mutation, options)
}
