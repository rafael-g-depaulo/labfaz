import React, { FC } from "react"

import { ObservatorioPost } from "Api/ObservatorioPost"
import Pagination from "Components/Pagination/Static"

import { Container, Content } from "./styles"
import PostItem from "./PostItem"

interface DisplayProps {
  posts: ObservatorioPost[];
}

export const Display: FC<DisplayProps> = ({ posts }) => {
  return (
    <Container>
      <Content>
        <Pagination items={posts}>
        {renderedPosts => renderedPosts.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
        </Pagination>
      </Content>
    </Container>
  )
}

export default Display;
