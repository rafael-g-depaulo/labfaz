import { strapi } from "Api"
import useFetchApi from "Hooks/useFetchApi"
import { Asset2Image, Image, Asset } from "@labfaz/strapi-utils"
import { extractStrapiData } from "Utils/handleApiResponse"

interface StrapiBlogPost {
  title: string
  description: string
  created_at: string
  image: Asset | null
  content: string
  id: number
}
export interface BlogPost {
  title: string
  description: string
  created_at: string
  image: Image | null
  content: string
  id: number
}

const deserializeBlogpost = ({
  id,
  title,
  description,
  created_at,
  image,
  content,
}: StrapiBlogPost): BlogPost => ({
  id,
  content,
  title,
  description,
  created_at,
  image: image ? Asset2Image(image) : image,
})

export const fetchBlogPost= (id: number) => strapi
    .get<StrapiBlogPost>(`/blog-posts/${id}`)
    .then(extractStrapiData)
    .then(deserializeBlogpost)

export const useBlogPost = (id: number) => useFetchApi<BlogPost>(`/blog-posts/${id}`, () => fetchBlogPost(id))

export const fetchBlogPosts = () => strapi
  .get<StrapiBlogPost[]>(`/blog-posts`)
  .then(extractStrapiData)
  .then((people) => people.map(deserializeBlogpost))

export const useBlogPosts = () => useFetchApi<BlogPost[]>(`/blog-posts`, fetchBlogPosts)
