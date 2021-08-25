import React, { FC } from "react"

import { BlogPost } from "Api/BlogPost"
// import Pagination from "Components/Pagination/Static"

import { Container, Content } from "./styles"
import PostItem from "./PostItem"

interface DisplayProps {
  posts: BlogPost[];
}

export const Display: FC<DisplayProps> = ({ posts }) => {
  return (
    <Container>
      <Content>
        {/* <Pagination items={posts}>
        {renderedPosts => renderedPosts.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
        </Pagination> */}
        
        {posts.map((post, index) => (
          <PostItem post={post} key={index} />
        ))}
      </Content>
    </Container>
  )
}

export default Display;
