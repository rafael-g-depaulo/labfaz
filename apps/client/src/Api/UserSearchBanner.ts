import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"

interface UserSearchData {
  title: string,
  description: string
}

export const fetchUserSearchBannerInfo: () => Promise<UserSearchData> = () => strapi
  .get<UserSearchData>(`/profissionais-banner`)
  .then(({data}) => data)
  .then(({ title, description }) => ({
    title, description
  }))

  export const useFetchUserSearchBannerInfo = () => useFetchApi<UserSearchData>(`profissionais-banner`, fetchUserSearchBannerInfo)
