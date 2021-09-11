import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image } from "Utils/Image"
import StrapiAsset from "Utils/StrapiAsset"

interface StrapiLoginInfo {
  titulo: string,
  imagem: StrapiAsset | null,
}

export interface LoginInfo {
  titulo: string,
  imagem?: Image,
}

const path = `/login-info`

export const fetchLoginInfo: () => Promise<LoginInfo> = () => strapi
  .get<StrapiLoginInfo>(path)
  .then(({ data }) => data)
  .then(({ imagem, titulo }) => ({ titulo, imagem: imagem ? Asset2Image(imagem) : undefined }))

export const useLoginInfo = () => useFetchApi<LoginInfo>(path, fetchLoginInfo)
