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

export type fetchHookReturn<Data, Error> = erroredFetch<Error> | loadingFetch | sucessfulFetch<Data>

export function useFetchApi<Data, Error = any> (key: string, fetcher: fetcherFn<Data>) {
  const { data, error, isValidating } = useSWR<Data, Error>(key, fetcher)

  return {
    error,
    data,
    isLoading: isValidating || (!data && !error),
  } as fetchHookReturn<Data, Error>
}

export default useFetchApi
