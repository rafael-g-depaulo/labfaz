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
  VerifiedWrapper,
  TitleWrapper,
} from "./styles";

import Label from "../../../Components/Label";
import { getIcon } from "../../../Utils/IconDictionary";
import { Link } from "react-router-dom";
import verifiedIcon from "./verified.png";

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
  area.length = 2;

  return (
    <Link 
      to={`/profile/${id}`}
      style={{
        width: "100%"
      }}
    >
      <Container>
        <MobileWrapper>
          <MobileMainContent>
            <Image src={photo} />
            <TextWrapper>
              <TitleWrapper>
                <CardTitle>{name}</CardTitle>
                {isVerified ? (
                  <VerifiedWrapper>
                    <img src={verifiedIcon} />
                  </VerifiedWrapper>
                ) : (
                  <></>
                )}
              </TitleWrapper>
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
