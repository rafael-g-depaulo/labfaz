import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Image } from '@labfaz/strapi-utils'

export interface AboutUsData {
  welcome_data: DataObject,
  about_us_data: DataObject[]
}

export interface DataObject {
  id: number,
  img: Image,
  text: string
}

export interface StaffObject {
  id: number,
  name: string,
  tag: string,
  text: string,
  image: Image,
}

export interface Team {
  id: number
  name: string,
  description: string,
  staff: StaffObject[]
}
export interface TeamsData {
  team: Team[],
  subtitulo: string
}



export const fetchAboutUsData = () => strapi
  .get<AboutUsData>("/about-us-data")
  .then(({ data }) => data)
  .then(({ welcome_data, about_us_data }) => ({
    welcome_data,
    about_us_data
  }))

export const useAboutUsdata = () => useFetchApi<AboutUsData>('/about-us', fetchAboutUsData)


export const fetchTeamData = () => strapi
  .get<TeamsData>("/teams")
  .then(({data}) => data)
  .then(( { team, subtitulo } ) => ({
    team,
    subtitulo,
  }))


export const useTeamData = () => useFetchApi<TeamsData>('/staff', fetchTeamData)
