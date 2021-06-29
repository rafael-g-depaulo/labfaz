import { strapi } from "Api"
import useFetchApi from 'Hooks/useFetchApi'

export interface BlogPost {
  title: string,
  description: string,
  created_at: string,
  image: any, 
}

export const fetchBlogPost = (id: number) => strapi
  .get<BlogPost>(`/blog-posts/${id}`)
  .then(({ data }) => data)
  .then(({ title, description, created_at, image }) => ({ title, description, created_at, image }))

export const useBlogPost = (id: number) => useFetchApi<BlogPost>(`/blog-posts/${id}`, () => fetchBlogPost(id))

export const fetchBlogPosts = () => strapi
  .get<BlogPost[]>(`/blog-posts`)
  .then(({ data }) => data)
  .then(people => people
    .map(({ title, description, created_at, image }) => ({ title, description, created_at, image }))
  )

export const useBlogPosts = () => useFetchApi<BlogPost[]>(`/blog-posts`, fetchBlogPosts)
