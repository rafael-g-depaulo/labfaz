import React, { FC, useState } from 'react'
import Form from '../Form'
import SelectInput from '../Form/Select';
import OptionGender from "../Form/Options/OptionGender"
import OptionsExperience from "../Form/Options/OptionsExperience"
import UserCard from "../UserCard";
import Wireframe from 'Components/Wireframe';

import { UserSearchParams, useUserSearch } from 'Api/UserSeatch';

import { FormDiv, OptionsDiv } from './style'

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

   // TODO: pegar esses dados do back
  if(isLoading) {
    console.log("Carregante")
  }

  if(users) {
    console.log("usuários", users)
  }

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
            />
            <SelectInput
              label="area"
              setInput={setFormData}
            />
            <OptionGender 
              setFunction={setFormData}
            />
            <OptionsExperience 
              setFunction={setFormData}
            />
          </OptionsDiv>
      </FormDiv>
      {
        users && users.map(user => {
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
      }
    </Wireframe>
  )
}

export default Display;
