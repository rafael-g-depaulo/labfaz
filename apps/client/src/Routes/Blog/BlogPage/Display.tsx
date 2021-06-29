import React, { FC } from "react";

import Header from "Components/Header";
import Banner from "Components/Banner";
import PostCard from "./PostCard";
import { BlogPost } from "Api/BlogPost";
import { BlogBannerInfo } from "Api/BlogBannerInfo";

import { Container, Content } from "./styles";

export interface DisplayProps {
  data: BlogBannerInfo;
  postData: BlogPost[];
}

export const Display: FC<DisplayProps> = ({ data, postData }) => {
  const { title, subtitle } = data!;
  return (
    <>
      <Header />
      <Banner title={title} subtitle={subtitle} align="left" />
      <Container>
        <Content>
          {postData.map((item, index) => {
            return <PostCard post={item} key={index} />;
          })}
        </Content>
      </Container>
    </>
  );
};

export default Display;
