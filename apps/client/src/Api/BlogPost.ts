import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { Asset2Image, Image } from "Utils/Image";
import StrapiAsset from "Utils/StrapiAsset";

interface StrapiBlogPost {
  title: string;
  description: string;
  created_at: string;
  image: StrapiAsset | null;
  content: string;
  id: number;
}
export interface BlogPost {
  title: string;
  description: string;
  created_at: string;
  image: Image | null;
  content: string;
  id: number;
}

export const fetchBlogPost: (id: number) => Promise<BlogPost> = (id: number) =>
  strapi
    .get<StrapiBlogPost>(`/blog-posts/${id}?_sort=created_at:desc`)
    .then(({ data }) => data)
    .then(({ title, description, created_at, image, content, id }) => ({
      title,
      description,
      created_at,
      image: image ? Asset2Image(image) : image,
      content,
      id,
    }));

export const useBlogPost = (id: number) =>
  useFetchApi<BlogPost>(`/blog-posts/${id}`, () => fetchBlogPost(id));

export const fetchBlogPosts: () => Promise<BlogPost[]> = () =>
  strapi
    .get<StrapiBlogPost[]>(`/blog-posts`)
    .then(({ data }) => data)
    .then((people) =>
      people.map(({ title, description, created_at, image, content, id }) => ({
        title,
        description,
        created_at,
        image: image ? Asset2Image(image) : image,
        content,
        id,
      }))
    );

export const useBlogPosts = () =>
  useFetchApi<BlogPost[]>(`/blog-posts`, fetchBlogPosts);
