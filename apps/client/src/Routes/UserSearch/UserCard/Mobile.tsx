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

import { Link } from "react-router-dom";

interface UserCardData {
  data: {
    id: string;
    isVerified: boolean;
    name: string;
    area: {
      name: string;
    }[];
    photo: string;
    description: string;
  };
}

export const Mobile: FC<UserCardData> = ({ data }) => {
  const { id, isVerified, name, area, photo, description } = data;

  return (
    <Link to={`/profile/${id}`}>
      <Container>
        <MobileWrapper>
          <MobileMainContent>
            <Image src={photo} />
            <TextWrapper>
              <CardTitle>{name}</CardTitle>
              <Description>{description}</Description>
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
    </Link>
  );
};

export default Mobile;
