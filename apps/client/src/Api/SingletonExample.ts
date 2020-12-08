import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface StrapiSingletonExample {
  text: string,
  image: StrapiAsset,
}

export interface SingletonExample {
  text: string,
  image: Image,
}

export const fetchSingletonExample: () => Promise<SingletonExample> = () => strapi
  .get<StrapiSingletonExample>(`/singleton-example`)
  .then(({ data }) => data)
  .then(({ text, image }) => ({ text, image: Asset2Image(image) }))

export const useSingletonExample = () => useFetchApi<SingletonExample>(`/singleton-example`, fetchSingletonExample)
