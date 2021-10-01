import React, { FC, useState } from "react";

import Form from "../Form";
import SelectInput from "../Form/Select";
import OptionGender from "../Form/Options/OptionGender";
import OptionsExperience from "../Form/Options/OptionsExperience";
import UserCard from "../UserCard";
import Wireframe from "Components/Wireframe";
import Loading from "Components/Loading";
import useTimeout from "Hooks/useTimeout";
import { Title } from "Components/Typography/Title";
import { Text } from "Components/Typography/Text";
import { Pagination } from "Components/Pagination/Static"

import { UserSearchParams, useUserSearch } from "Api/UserSearch";

import { FormDiv, OptionsDiv, Header, ContentDiv } from "./style";
import { getUserName } from "Utils/userUtils";

export type Fields = "areas" | "serviços" | "diversidade" | "experiência";

interface UserSearchInterface {
  title?: string,
  description?: string
}

export const Display: FC<UserSearchInterface> = ({title, description}) => {
  
  const [formData, setFormData] = useState<UserSearchParams>({
    nameOrProfession: "",
    city: "",
    area: "",
    nonMenOnly: false,
    LBTQOnly: false,
    drtOnly: false,
    cpnjOnly: false,
    ceacOnly: false,
    meiOnly: false,
    showNothing: true,
  });

  const { isLoading, users } = useUserSearch(formData)
  const { start, done } = useTimeout(250)

  return (
    <Wireframe>
      <Header>
        {title && <Title>{title}</Title> }
        {description && <Text>{description}</Text> }
      </Header>
      <FormDiv>
        <Form setFunction={setFormData} onInput={start}>
          <OptionsDiv>
            <SelectInput label="cidade" setInput={setFormData} />
            <SelectInput label="area" setInput={setFormData}  />
            <OptionGender setFunction={setFormData}  />
            <OptionsExperience setFunction={setFormData} />
          </OptionsDiv>
      </Form>
      </FormDiv>
      <ContentDiv>
        {users && !isLoading && done ? (
          <Pagination items={users} >
            {
              users => users.map((user, index) => {
                const { id, isVerified } = user;
                const name = getUserName(user)
                const area = user.artist.technical.area;
                const photo = user.artist.photo_url;
                const description = user.artist.technical.area[0].describe;
                const data = {
                  id,
                  isVerified,
                  name,
                  area,
                  photo,
                  description,
                };
                return <UserCard data={data} key={index} />;
              })
            }
          </Pagination>
        ) : <Loading />}
      </ContentDiv>
    </Wireframe>
  );
};

export default Display;
