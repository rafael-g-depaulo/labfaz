import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { OptionDiv, BadgeInput, BadgeDiv, OptionWrapper } from "../../UserSearchPage/style"

import { Title } from "Components/Typography/Title"
import { Text } from "Components/Typography/Text"

import { Experience } from "Utils/selectOptionsData"

import { UserSearchParams } from 'Api/UserSeatch'
interface OptionsProps {
  setFunction: Dispatch<SetStateAction<UserSearchParams>>,
}

type SearchKeys = "drtOnly" | "cpnjOnly" | "ceacOnly" | "meiOnly"

export const OptionsExperience: FC<OptionsProps> = ({ setFunction }) => {  

  const [isChecked, setIsChecked] = useState(false)

  return(
    <OptionDiv>
      <Title 
        level={4}
      >  EXPERIÊNCIA </Title>
      <OptionWrapper>
        {
          Experience.map(option => (
            <BadgeDiv 
              isChecked={isChecked}
            >
              <Text> {option.label} </Text>
              <BadgeInput 
                type="checkbox" 
                name="experience" 
                value={option.value}
                key="DRT"
                onChange={() =>{
                  setFunction(formData => {
                    const key = option.value as SearchKeys
                    formData[key] = !formData[key]
                    formData['showNothing'] = false
                    setIsChecked(formData[key])
                    return formData
                  })
                }}
              />
          </BadgeDiv>
          ))
        }
      </OptionWrapper>
    </OptionDiv>
  )
}


export default OptionsExperience;
