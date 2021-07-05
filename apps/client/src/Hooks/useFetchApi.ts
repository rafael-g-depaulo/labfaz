import { AxiosError } from "axios"
import useSWR from "swr"
import { fetcherFn } from "swr/dist/types"

type erroredFetch<T> = {
  error: T,
  data: undefined,
  isLoading: false,
}

type loadingFetch = {
  error: undefined,
  data: undefined,
  isLoading: true,
}

type sucessfulFetch<T> = {
  error: undefined,
  data: T,
  isLoading: false,
}

export type fetchHookReturn<D, E> = erroredFetch<E> | loadingFetch | sucessfulFetch<D>
type DefaultError = AxiosError

export function useFetchApi<D, E = DefaultError> (key: string, fetcher: fetcherFn<D>) {
  const { data, error, isValidating } = useSWR<D, E>(key, fetcher)

  return {
    error,
    data,
    isLoading: isValidating || (!data && !error),
  } as fetchHookReturn<D, E>
}

export default useFetchApi
