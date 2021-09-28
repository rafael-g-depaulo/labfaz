import React, { FC } from "react";
import {
  Container,
  Image,
  TextWrapper,
  CardTitle,
  LabelWrapper,
  Description,
  Button,
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

export const Web: FC<UserCardData> = ({ data }) => {
  const { id, isVerified, name, area, photo } = data;

  return (
    <Container>
      <TextWrapper>
        <CardTitle>{name}</CardTitle>
        <LabelWrapper>
          {area.map((a) => {
            return (
              <Label name={a.name} image={getIcon(a.name)} lightMode={true} />
            );
          })}
        </LabelWrapper>
        <Description>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean massa. Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit.
        </Description>
        <Button href="">visualizar perfil</Button>
      </TextWrapper>
      <Image src={photo} />
    </Container>
  );
};

export default Web;
