import axios from "axios"

import { getApiUrl, getStrapiUrl } from "@starter-project/server-conn-info"

// create axios instance to connect to main server
export const api = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? getApiUrl({ hostname: window.location.hostname }) : getApiUrl(),
})
// create axios instance to connect to strapi server
export const strapi = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? getStrapiUrl({ hostname: window.location.hostname }) : getStrapiUrl(),
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
