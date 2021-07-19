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
    url:
      "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    name: "imagem aleatória",
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
