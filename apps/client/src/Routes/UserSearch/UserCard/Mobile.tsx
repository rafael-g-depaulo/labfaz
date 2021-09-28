import React, { FC } from "react";
import {
  Container,
  MobileWrapper,
  MobileMainContent,
  Image,
  Description,
  CardTitle,
  TextWrapper,
  LabelWrapper,
} from "./styles";

import Label from "../../../Components/Label";
import { getIcon } from "../../../Utils/IconDictionary";

interface UserCardData {
  data: {
    id: string;
    isVerified: boolean;
    name: string;
    area: {
      name: string;
    }[];
    photo: string;
  };
}

export const Mobile: FC<UserCardData> = ({ data }) => {
  const { id, isVerified, name, area, photo } = data;

  return (
    <Container>
      <MobileWrapper>
        <MobileMainContent>
          <Image src={photo} />
          <TextWrapper>
            <CardTitle>{name}</CardTitle>
            <Description>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit
              amet, consectetuer adipiscing elit. Aenean massa. Lorem ipsum
              dolor sit amet, consectetuer adipiscing elit.
            </Description>
          </TextWrapper>
        </MobileMainContent>
        <LabelWrapper>
          {area.map((a) => {
            return (
              <Label name={a.name} image={getIcon(a.name)} lightMode={true} />
            );
          })}
        </LabelWrapper>
      </MobileWrapper>
    </Container>
  );
};

export default Mobile;
