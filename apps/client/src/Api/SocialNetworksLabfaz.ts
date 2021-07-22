import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface SocialNetworksLabfaz {
  facebook: string,
  twitter: string,
  googlePlus: string,
  linkedin: string,
  instagram: string,
  youtube: string,
  phone: string,
  email: string
}

export const fetchSocialNetworksLabfaz: () => Promise<SocialNetworksLabfaz> = () => strapi
  .get(`/social-networks-labfaz`)
  .then(({ data }) => data)
  .then(({
    facebook,
    twitter,
    googlePlus,
    linkedin,
    instagram,
    youtube,
    phone,
    email
  }) => ({
    facebook,
    twitter,
    googlePlus,
    linkedin,
    instagram,
    youtube,
    phone,
    email
  }))

export const useSocialNetworksLabfaz = () => useFetchApi<SocialNetworksLabfaz>(`/social-networks-labfaz`, fetchSocialNetworksLabfaz)
