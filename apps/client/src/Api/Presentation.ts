import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface HomePresentationInfo {
  Title: string,
  SubTitle: string,
  Video: string,
}

export const fetchHomePresentationInfo: () => Promise<HomePresentationInfo> = () => strapi
  .get(`/home-presentation-info`)
  .then(({ data }) => data)
  .then(({ Title, SubTitle, Video }) => ({ Title, SubTitle, Video }))

export const useHomePresentationInfo = () => useFetchApi<HomePresentationInfo>(`/home-presentation-info`, fetchHomePresentationInfo)
