import { strapi } from "Api"
import useFetchApi from 'Hooks/useFetchApi'
import { useMutateApi } from "Hooks/useMutateApi"

export interface Example {
  name: string,
  age: number,
}

export const fetchExample = (id: number) => strapi
  .get<Example>(`/examples/${id}`)
  .then(({ data }) => data)
  .then(({ name, age }) => ({ name, age }))

export const useExample = (id: number) => useFetchApi<Example>(`/example/${id}`, () => fetchExample(id))

export const fetchExamples = () => strapi
  .get<Example[]>(`/examples`)
  .then(({ data }) => data)
  .then(people => people
    .map(({ name, age }) => ({ name, age }))
  )

export const useExamples = () => useFetchApi<Example[]>(`/example`, fetchExamples)

// mutations must take only 1 parameter
export const createExample = (example: Example) => strapi
  .post(`/examples/create`, example, { headers: {} })

export const useCreateExample = () => useMutateApi(`/examples/create/`, createExample)
