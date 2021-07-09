import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"

export interface SocialNetworksLabfaz {
  facebook: string,
  twitter: string,
  googlePlus: string,
  linkedin: string,
  instagram: string
}

export const fetchSocialNetworksLabfaz: () => Promise<SocialNetworksLabfaz> = () => strapi
  .get(`/social-networks-labfaz`)
  .then(({ data }) => data)
  .then(({ facebook, twitter, googlePlus, linkedin, instagram }) => ({ facebook, twitter, googlePlus, linkedin, instagram }))

export const useSocialNetworksLabfaz = () => useFetchApi<SocialNetworksLabfaz>(`/social-networks-labfaz`, fetchSocialNetworksLabfaz)
