import React, { FC, Fragment } from "react";
import {
  Wrapper,
  MainTextContainer,
  Title,
  Description,
  Image,
  Button,
  ButtonText,
  ButtonWrapper,
  DateContainer,
  Date,
  Divisor,
} from "./styles";

import useMobile from "Utils/useMobile";
import { BlogPost } from "Api/BlogPost";

interface DisplayProps {
  post: BlogPost;
}

export const PostCard: FC<DisplayProps> = ({ post }) => {
  const isMobile = useMobile();

  return (
    <Fragment>
      <Wrapper>
        {isMobile ? (
          <>
            <MainTextContainer>
              <Title>{post?.title}</Title>
              <Description>{post?.description}</Description>
              {post?.image !== null ? (
                <Image src={post?.image?.url} alt={post?.image?.name} />
              ) : (
                <></>
              )}
            </MainTextContainer>
            <ButtonWrapper>
              <Button>
                <ButtonText>leia mais</ButtonText>
              </Button>
              <Divisor />
              <DateContainer>
                <Date>Segunda</Date>
                <Date>14:00</Date>
              </DateContainer>
            </ButtonWrapper>{" "}
          </>
        ) : (
          <>
            <MainTextContainer>
              <Title>{post?.title}</Title>
              <Description>{post?.description}</Description>
              {post?.image !== null ? (
                <Image src={post?.image?.url} alt={post?.image?.name} />
              ) : (
                <></>
              )}
              <Button>
                <ButtonText>leia mais</ButtonText>
              </Button>
            </MainTextContainer>
            <Divisor />
            <DateContainer>
              <Date>Segunda</Date>
              <Date>14:00</Date>
            </DateContainer>{" "}
          </>
        )}
      </Wrapper>
    </Fragment>
  );
};

export default PostCard;
