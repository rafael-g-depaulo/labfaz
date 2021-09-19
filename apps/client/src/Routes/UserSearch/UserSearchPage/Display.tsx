import React, { FC, FormEvent, useState } from 'react'
import Header from 'Components/Header';
import Form from '../Form'
import Option from "./Options"
import FullPage from 'Components/FullPage';

import { FormDiv, OptionsDiv } from './style'

export interface FormData {
  name: string,
  cities: string,
  areas: string,
  services: string,
  diversity: string,
  experience: string
}

export type Fields = "cidades" | "areas" | "serviços" | "diversidade" | "experiência"

export const Display: FC = () => {

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const updatedFrom: FormData = {
      ...formData,
      name: name,
    }
    
    console.log(updatedFrom)
  }

  const [name, setName] = useState("")
  const [formData, setFormData] = useState<FormData>({
    name: "",
    cities: "",
    areas: "",
    services: "",
    diversity: "",
    experience: "",
  })

  // Todo pegar esses dados do back
  const options = ["CEILANDIA", "TAGUATINGA", "PLANO PILOTO", "ESTRUTURAL", "RECANTO DAS EMAS", 'LAGO NORTE']
  const areas = ["AUDIO", "PRODUÇAO", "ILUMINAÇÃO", "ELETRICA"]
  const servicos = ["CABEAMENTO DE AUDIO", "SAC", "PLANEJAMENTO"]
  const experiencias = ["DRT", "CEAC", "CNPJ", "MEI", "NR-1"]

  return (
    <FullPage>
      <Header />
      <FormDiv>
        <Form 
          name={name} 
          setFunction={setName}
          handler={handleSubmit}/>
          <OptionsDiv>
            <Option 
              name="cidades" 
              options={options}
              setFuntion={setFormData}
              data={formData}
              />
            <Option 
              name="areas" 
              options={areas}
              setFuntion={setFormData}
              data={formData}
              />
            <Option 
              name="serviços" 
              options={servicos}
              setFuntion={setFormData}
              data={formData}
              />
            <Option 
              name="experiência" 
              options={experiencias}
              setFuntion={setFormData}
              data={formData}
              />            
          </OptionsDiv>
      </FormDiv>
    </FullPage>
  )
}

export default Display;
