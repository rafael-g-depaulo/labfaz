import React, { FC, Fragment } from "react";

import { Container, Content, Wrapper } from "./styles";

import { BlogPost } from "Api/BlogPost";
import Web from "./Web";
//import Mobile from "./Mobile";
import useMobile from "Utils/useMobile";

interface DisplayProps {
  post: BlogPost;
}

export const Display: FC<DisplayProps> = ({ post }) => {
  const isMobile = useMobile();

  console.log(post);

  return (
    <Container>
      <Content>
        <Fragment>
          <Wrapper>
            {isMobile ? (
              // <Mobile
              //   title={post?.title}
              //   description={post?.description}
              //   image={post?.image}
              //   created_at={post?.created_at}
              // />
              <> </>
            ) : (
              <Web
                title={post?.title}
                description={post?.description}
                image={post?.image}
                created_at={post?.created_at}
                content={post?.content}
              />
            )}
          </Wrapper>
        </Fragment>
      </Content>
    </Container>
  );
};

export default Display;
