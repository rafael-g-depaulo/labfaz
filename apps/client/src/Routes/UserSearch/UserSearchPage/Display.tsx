import React, { FC, FormEvent, useState } from 'react'
import Header from 'Components/Header';
import Form from '../Form'
import SelectInput from '../Form/Select';
import OptionGender from "../Form/Options/OptionGender"
import OptionsExperience from "../Form/Options/OptionsExperience"
import LGBTField from "../Form/Options/LgbtCheckbox"
import FullPage from 'Components/FullPage';

import { UserSearchParams, useUserSearch } from 'Api/UserSeatch';

import { FormDiv, OptionsDiv } from './style'

export type Fields = "areas" | "serviços" | "diversidade" | "experiência"

export const Display: FC = () => {
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
  }
  
  const [formData, setFormData] = useState<UserSearchParams>({
    nameOrProfession: "",
    city: "",
    area: "",
    nonMenOnly: false,
    LBTQOnly: false,
    drtOnly: false,
    cpnjOnly: false,
    ceacOnly: false,
    meiOnly: false
  })
  
  const { isLoading, error, users } = useUserSearch(formData)

   // TODO: pegar esses dados do back
  if(isLoading) {
    console.log("Carregante")
  }

  if(users) {
    console.log("usuários", users)
  }
  return (
    <FullPage>
      <Header />
      <FormDiv>
        <Form 
          setFunction={setFormData}
          handler={handleSubmit}/>
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
            <LGBTField 
              setFormData={setFormData}
            />
            <OptionsExperience 
              setFunction={setFormData}
            />
          </OptionsDiv>
      </FormDiv>
    </FullPage>
  )
}

export default Display;
