import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface HomePartners {
  name: string,
  logo: any;
}

export const fetchHomePartner = (id: number) => strapi
  .get<HomePartners>(`/home-partners/${id}`)
  .then(({ data }) => data)
  .then(({ name, logo }) => ({ name, logo }))

export const useHomePartner = (id: number) => useFetchApi<HomePartners>(`/home-partners/${id}`, () => fetchHomePartner(id))

export const fetchHomePartners = () => strapi
  .get<HomePartners[]>(`/home-partners`)
  .then(({ data }) => data)
  .then(partners => partners
    .map(({ name, logo }) => ({name, logo}))
  )

export const useHomePartners = () => useFetchApi<HomePartners[]>(`/home-partners`, fetchHomePartners)
