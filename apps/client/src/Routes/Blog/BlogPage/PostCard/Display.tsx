import React, { FC } from "react"

import { Container, Content } from "./styles"

import { BlogPost } from "Api/BlogPost"

import PostItem from "./PostItem"

interface DisplayProps {
  posts: BlogPost[];
}

export const Display: FC<DisplayProps> = ({ posts }) => {
  return (
    <Container>
      <Content>
        {posts.map((post, index) => <PostItem post={post} key={index} />)}
      </Content>
    </Container>
  )
}

export default Display;
