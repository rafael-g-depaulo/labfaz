import axios from "axios"

import { getApiUrl, getStrapiUrl } from "@labfaz/server-conn-info"

// create axios instance to connect to main server
export const api = axios.create({
  baseURL: getApiUrl(),
})
// create axios instance to connect to strapi server
export const strapi = axios.create({
  baseURL: getStrapiUrl(),
})

export type Data = object | string
export type SuccessObject<T extends Data = object> = {
  status: "success"
  data: T
  code: number
}

export type ErrorObject<T extends Data = object> = {
  status: "error"
  code: number
  message: string
  data?: T
}
