import React from "react";
import { storiesOf } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";

import { ObservatorioPost } from "Api/ObservatorioPost";
import PostDetails from "./Display";

const post: ObservatorioPost = {
  id: 1,
  title: "Teste de observatorio post",
  description: "Isso é um teste",
  created_at: "2021-06-29T23:50:54.596Z",
  image: {
    url:
      "https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/Whats_App_Image_2020_12_19_at_17_23_28_439c4529a0.jpeg",
    alternativeText: "Observatorio Banner Image",
    caption: "string",
    width: 20,
    height: 20,
    ext: "jpeg",
  },
  content:
    " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.\n\n![index.jpeg](https://labfaz-strapi-assets.s3.sa-east-1.amazonaws.com/index_cee2a34341.jpeg)\n\n**Lorem ipsum dolor sit amet,** consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.\n\nLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec. [**Lorem ipsum dolor sit amet**](https://www.amazon.com.br/), consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. *Nulla consequat massa quis enim. Donec.*\n\n-  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n-  Aenean commodo ligula eget dolor.\n-  Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.\n-  Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.\n\n[link](https://www.youtube.com/watch?v=NxNpYpvPFWU)\n\n1. **Lorem ipsum dolor sit amet, consectetuer adipiscing elit.**\n2. *Aenean commodo ligula eget dolor.*\n3. [Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.](www.google.com)\n4. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
};

storiesOf("Pages/Observatorio/PostDetails", module)
  .addParameters({ component: PostDetails })
  .add("responsive", () => (
    <BrowserRouter>
      <PostDetails post={post} />
    </BrowserRouter>
  ));
