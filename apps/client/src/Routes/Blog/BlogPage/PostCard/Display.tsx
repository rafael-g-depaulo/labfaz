import React, { FC, Fragment } from "react";

import {
  Container,
  Content,
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
import { formatPostDate } from "Utils/formatPostDate";

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
                        <Date>{formatPostDate(post?.created_at)?.day}</Date>
                        <Date>{formatPostDate(post?.created_at)?.hour}</Date>
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
                      <Date>{formatPostDate(post?.created_at)?.day}</Date>
                      <Date>{formatPostDate(post?.created_at)?.hour}</Date>
                    </DateContainer>{" "}
                  </>
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
