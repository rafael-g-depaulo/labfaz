import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { OptionDiv, Label } from "../style"

import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"

import { FormData, Fields } from "../Display" 

interface OptionsProps {
  name: Fields,
  options: string[],
  setFuntion: Dispatch<SetStateAction<FormData>>,
  data: FormData
}

type Field = "cities" | "areas" | "services" | "diversity" | "experience"

export const Option: FC<OptionsProps> = ({ name, options, setFuntion, data }) => {  

  const Translate = {
    cidades: "cities",
    areas: "areas",
    serviços: "services",
    diversidade: "diversity",
    experiência: "experience"
  }

  const [focus, setFocus] = useState(false)
  const handleClick = (option: Fields, selected: string) => {
    const field = Translate[option] as Field
    setFuntion(formData => {
      formData[field] = selected;
      return formData
    })
  }

  return(
    <OptionDiv>
      <Title 
        level={4}
      > {name.toUpperCase()} </Title>
      {
        options.map((option: string, index) => (
          <Label
            onClick={(e) => {
              console.log(e.target)
              handleClick(name, option)
            }}
            tabIndex={index}
          >
            <Text>
              {option}
            </Text>
          </Label>
        ))
      }
    </OptionDiv>
  )
}


export default Option;
