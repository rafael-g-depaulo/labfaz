import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { BlogPost } from "Api/BlogPost";
import PostDetails from "./Display";

const post: BlogPost = {
  id: 1,
  title: "Teste de blog post",
  description: "Isso é um teste",
  created_at: "2021-06-29T23:50:54.596Z",
  image: {
    url: "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Blog Banner Image",
    caption: "string",
    width: 20,
    height: 20,
    ext: "jpeg"
  },
  content: "Esse é o conteúdo do post!",
};

storiesOf("Pages/Blog/PostDetails", module)
  .addParameters({ component: PostDetails })
  .add("responsive", () => (
    <BrowserRouter>
      <PostDetails post={post} />
    </BrowserRouter>
  ));
