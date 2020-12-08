import { api } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface HelloExample {
  msg: string
}

export const fetchHelloExample = () => api
  .get<HelloExample>(`/hello`)
  .then(({ data }) => data)

export const useHelloExample = () => useFetchApi<HelloExample>(`/hello`, fetchHelloExample)
