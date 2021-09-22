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
import Label from "Components/Label";

export const UserCard: FC = () => {
  return (
    <Container>
      <TextWrapper>
        <CardTitle>Claudia Maria</CardTitle>
        <LabelWrapper>
          <Label name="audiovisual" image={undefined} />
          <Label name="formação tecnica" image={undefined} />
        </LabelWrapper>
        <Description>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Aenean massa. Lorem ipsum dolor sit
          amet, consectetuer adipiscing elit.
        </Description>
        <Button href="">visualizar perfil</Button>
      </TextWrapper>
      <Image src="https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
    </Container>
  );
};

export default UserCard;
