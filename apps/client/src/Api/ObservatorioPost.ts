import { strapi } from "Api";
import useFetchApi from "Hooks/useFetchApi";
import { Asset2Image, Image } from "Utils/Image";
import StrapiAsset from "Utils/StrapiAsset";

interface StrapiObservatorioPost {
  title: string;
  description: string;
  created_at: string;
  image: StrapiAsset | null;
  content: string;
  id: number;
}
export interface ObservatorioPost {
  title: string;
  description: string;
  created_at: string;
  image: Image | null;
  content: string;
  id: number;
}

export const fetchObservatorioPost: (id: number) => Promise<ObservatorioPost> = (id: number) =>
  strapi
    .get<StrapiObservatorioPost>(`/observatorio-posts/${id}`)
    .then(({ data }) => data)
    .then(({ title, description, created_at, image, content, id }) => ({
      title,
      description,
      created_at,
      image: image ? Asset2Image(image) : image,
      content,
      id,
    }));

export const useObservatorioPost = (id: number) =>
  useFetchApi<ObservatorioPost>(`/observatorio-posts/${id}`, () => fetchObservatorioPost(id));

export const fetchObservatorioPosts: () => Promise<ObservatorioPost[]> = () =>
  strapi
    .get<StrapiObservatorioPost[]>(`/observatorio-posts`)
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

export const useObservatorioPosts = () =>
  useFetchApi<ObservatorioPost[]>(`/observatorio-posts`, fetchObservatorioPosts);
