import React, { FC, useState } from "react";
import Form from "../Form";
import SelectInput from "../Form/Select";
import OptionGender from "../Form/Options/OptionGender";
import OptionsExperience from "../Form/Options/OptionsExperience";
import UserCard from "../UserCard";
import Wireframe from "Components/Wireframe";

import { UserSearchParams, useUserSearch } from "Api/UserSeatch";

import { FormDiv, OptionsDiv } from "./style";
import Loading from "Components/Loading";
import useTimeout from "Hooks/useTimeout";

export type Fields = "areas" | "serviços" | "diversidade" | "experiência";

export const Display: FC = () => {
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

  const { isLoading, users } = useUserSearch(formData);
  const { start, stop, done } = useTimeout(1000);
  const example = {
    id: "2",
    isVerified: true,
    name: "Clementina Maria",
    area: [
      {
        name: "maquiagem",
      },
      {
        name: "maquiagem",
      },
    ],
    photo:
      "https://images.pexels.com/photos/8285483/pexels-photo-8285483.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
  };

  if (isLoading) {
    return <Loading />;
  }

  console.log(users);
  console.log(done);

  return (
    <Wireframe>
      <FormDiv>
        <Form setFunction={setFormData} />
        <OptionsDiv>
          <SelectInput label="cidade" setInput={setFormData} start={start} />
          <SelectInput label="area" setInput={setFormData} start={start} />
          <OptionGender setFunction={setFormData} start={start} />
          <OptionsExperience setFunction={setFormData} start={start} />
        </OptionsDiv>
      </FormDiv>
      {users && done ? (
        users.map((user) => {
          const { id, isVerified } = user;
          const name = user.artist.show_name;
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
          return <UserCard data={data} />;
        })
      ) : (
        <Loading />
      )}
      <UserCard data={example} />;
    </Wireframe>
  );
};

export default Display;
