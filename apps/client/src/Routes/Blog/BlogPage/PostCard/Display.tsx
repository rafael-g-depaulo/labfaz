import React, { FC, Fragment } from "react";

import { Container, Content, Wrapper } from "./styles";

import { BlogPost } from "Api/BlogPost";
import Web from "./Web";
import Mobile from "./Mobile";
import useMobile from "Utils/useMobile";

interface DisplayProps {
  posts: BlogPost[];
}

export const Display: FC<DisplayProps> = ({ posts }) => {
  const isMobile = useMobile();

  return (
    <Container>
      <Content>
        {posts?.map((post, index) => {
          return (
            <Fragment key={index}>
              <Wrapper>
                {isMobile ? (
                  <Mobile
                    title={post?.title}
                    description={post?.description}
                    image={post?.image}
                    created_at={post?.created_at}
                    id={post?.id}
                  />
                ) : (
                  <Web
                    title={post?.title}
                    description={post?.description}
                    image={post?.image}
                    created_at={post?.created_at}
                    id={post?.id}
                  />
                )}
              </Wrapper>
            </Fragment>
          );
        })}
      </Content>
    </Container>
  );
};

export default Display;
