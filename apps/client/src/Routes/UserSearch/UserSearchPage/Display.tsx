import React, { FC, useState } from 'react'
import Form from '../Form'
import SelectInput from '../Form/Select';
import OptionGender from "../Form/Options/OptionGender"
import OptionsExperience from "../Form/Options/OptionsExperience"
import UserCard from "../UserCard";
import Wireframe from 'Components/Wireframe';

import { UserSearchParams, useUserSearch } from 'Api/UserSeatch';

import { FormDiv, OptionsDiv } from './style'
import Loading from 'Components/Loading';
import useTimeout from 'Hooks/useTimeout';

export type Fields = "areas" | "serviços" | "diversidade" | "experiência"

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
    showNothing: true
  })
  
  const { isLoading, users } = useUserSearch(formData)
  const { start, stop, done } = useTimeout(1000)

  if(isLoading) {
    return <Loading />
  }

  console.log(users)
  console.log(done)

  return (
    <Wireframe>
      <FormDiv>
        <Form 
          setFunction={setFormData}
          />
          <OptionsDiv>
            <SelectInput
              label="cidade"
              setInput={setFormData}
              start={start}
            />
            <SelectInput
              label="area"
              setInput={setFormData}
              start={start}
            />
            <OptionGender 
              setFunction={setFormData}
              start={start}
            />
            <OptionsExperience 
              setFunction={setFormData}
              start={start}
            />
          </OptionsDiv>
      </FormDiv>
      {
        users && done ? users.map(user => {
          const { id, isVerified } = user
          const name = user.artist.show_name
          const area = user.artist.technical.area
          const photo = user.artist.photo_url
          const data = {
            id,
            isVerified,
            name,
            area,
            photo
          }
          return <UserCard data={data}/>
        }) 
        :
        <Loading /> 
      }
    </Wireframe>
  )
}

export default Display;
