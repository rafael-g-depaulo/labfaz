import React, { FC } from "react"
import { ObservatorioPost } from "Api/ObservatorioPost"

import useMobile from "Hooks/useMobile"
import { Wrapper } from "./styles"
import Mobile from "./Mobile"
import Web from "./Web"

export interface PostItemProps {
  post: ObservatorioPost
}

export const PostItem: FC<PostItemProps> = ({
  post,
}) => {
  const isMobile = useMobile()

  return (
    <Wrapper>
      {isMobile ? (
        <Mobile
          title={post.title}
          description={post.description}
          image={post.image}
          created_at={post.created_at}
          id={post.id}
        />
      ) : (
        <Web
          title={post.title}
          description={post.description}
          image={post.image}
          created_at={post.created_at}
          id={post.id}
        />
      )}
    </Wrapper>
  )
}

export default PostItem
