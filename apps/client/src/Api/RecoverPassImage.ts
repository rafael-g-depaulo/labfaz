import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Image } from "Utils/Image"

export interface RecoverData {
  image: Image
}

export const fetchRecoverPassImage = () => strapi
  .get<RecoverData>("/recover-pass-image")
  .then(({ data }) => data)
  .then(({ image }) =>({
    image
  }))


  export const useRecoverPassImage = () => useFetchApi<RecoverData>('/recover-image', fetchRecoverPassImage)
